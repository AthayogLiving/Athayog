import {
     Button,
     FormControl,
     FormErrorMessage,
     FormLabel,
     Heading,
     HStack,
     Input,
     Select,
     Stack,
     Text,
     toast,
     useToast
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useAuth } from '@/lib/auth';
import Router, { useRouter } from 'next/router';
import firebase from '@/lib/firebase';
import { MotionStack } from '../shared/MotionElements';
import { CountryCode } from './ContentData';
import useSSR from 'use-ssr';

const Signup = () => {
     const { handleSubmit, register, errors, reset } = useForm();
     const { handleOTPUser } = useAuth();
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [phone, setPhone] = useState('');
     const [name, setName] = useState('');
     const [useOtp, setUseOtp] = useState(false);
     const [loading, setLoading] = useState(false);
     const [loadingOtp, setLoadingOtp] = useState(false);
     const toast = useToast();
     const router = useRouter();
     const auth = firebase.auth();
     var { isBrowser, isServer, isNative } = useSSR();

     //
     const initiateRecaptha = () => {
          window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
               'recapctha-box',
               {
                    size: 'invisible',
                    callback: (response) => {
                         // reCAPTCHA solved, allow signInWithPhoneNumber.
                         onPhoneSignInSubmit();
                    }
               }
          );
     };

     const onPhoneSignInSubmit = (phone, countryCode) => {
          // const phoneNumber = getPhoneNumberFromUserInput();
          const userPhone = countryCode + phone;
          initiateRecaptha();

          const appVerifier = window.recaptchaVerifier;

          firebase
               .auth()
               .signInWithPhoneNumber(userPhone, appVerifier)
               .then((confirmationResult) => {
                    // SMS sent. Prompt user to type the code from the message, then sign the
                    // user in with confirmationResult.confirm(code).
                    window.confirmationResult = confirmationResult;
                    setUseOtp(true);
                    // setLoading(false);
               })
               .catch((error) => {
                    setLoading(false);
                    toast({
                         title: 'An error occurred.',
                         description: error.message,
                         status: 'error',
                         duration: 5000,
                         isClosable: true
                    });

                    window.recaptchaVerifier.render().then(function (widgetId) {
                         grecaptcha.reset(widgetId);
                    });
               });
     };

     const onOTPSubmit = ({ otp }) => {
          setLoadingOtp(true);
          confirmationResult = window.confirmationResult;
          const code = otp;
          confirmationResult
               .confirm(code)
               .then((result) => {
                    // User signed in successfully.
                    const user = result.user;
                    const credential =
                         firebase.auth.EmailAuthProvider.credential(
                              email,
                              password
                         );
                    auth.currentUser
                         .linkWithCredential(credential)
                         .then((usercred) => {
                              const user = usercred.user;
                              user.updateProfile({
                                   displayName: name
                              }).then(() => {
                                   handleOTPUser(user, phone);
                              });
                              toast({
                                   title: 'Signed In.',
                                   description: 'OTP verified succesfully',
                                   status: 'success',
                                   duration: 5000,
                                   isClosable: true
                              });
                         })
                         .catch((error) => {
                              toast({
                                   title: 'An error occurred.',
                                   description: error.message,
                                   status: 'error',
                                   duration: 5000,
                                   isClosable: true
                              });
                         });

                    // ...
                    router.push('/');
               })
               .catch((error) => {
                    setLoadingOtp(false);
                    toast({
                         title: 'An error occurred.',
                         description: error.message,
                         status: 'error',
                         duration: 5000,
                         isClosable: true
                    });
               });
     };
     //
     const onUserCreation = async ({
          displayName,
          email,
          password,
          phone,
          countryCode
     }) => {
          if (email.match(/^[a-zA-Z0-9+_.-]+@athayogliving.com/)) {
               toast({
                    title: `Can't use administrator account`,
                    description: `Can't use this email as it already authorized`,
                    status: 'error',
                    duration: 5000,
                    isClosable: true
               });
               return;
          }
          setLoading(true);
          setEmail(email);
          setPassword(password);
          setName(displayName);
          setPhone(phone);
          onPhoneSignInSubmit(phone, countryCode);
          try {
               await fetch(
                    'https://formsubmit.co/ajax/info@athayogliving.com',
                    {
                         method: 'POST',
                         headers: {
                              'Content-Type': 'application/json',
                              Accept: 'application/json'
                         },
                         body: JSON.stringify({
                              FormType: 'Signup Form',
                              fullname: displayName,
                              email: email,
                              phone: phone
                         })
                    }
               );
          } catch (error) {}
     };

     return (
          <>
               <Heading
                    textAlign="center"
                    fontWeight="normal"
                    fontSize={['2xl', '2xl', '4xl']}
                    color="primaryDarkGray"
               >
                    {useOtp ? 'Enter OTP' : 'Join Us'}
               </Heading>

               {useOtp ? (
                    <MotionStack
                         spacing={8}
                         mt={5}
                         width="sm"
                         exit={{ y: -1000, opacity: 1 }}
                         as="form"
                         onSubmit={handleSubmit((data) => onOTPSubmit(data))}
                    >
                         <FormControl isRequired>
                              <FormLabel>OTP</FormLabel>
                              <Input
                                   type="otp"
                                   aria-label="otp"
                                   name="otp"
                                   id="otp"
                                   ref={register({
                                        required: 'Please enter your otp.'
                                   })}
                              />
                         </FormControl>
                         <Button
                              type="submit"
                              colorScheme="aygreen"
                              isLoading={loadingOtp}
                              _active={{
                                   transform: 'scale(0.95)'
                              }}
                         >
                              Submit OTP
                         </Button>
                    </MotionStack>
               ) : (
                    <Stack
                         spacing={{ base: 5, md: 8, lg: 8 }}
                         mt={5}
                         width={{ base: '100%', md: 'sm', lg: 'sm' }}
                         as="form"
                         onSubmit={handleSubmit((data) => onUserCreation(data))}
                    >
                         <FormControl
                              isRequired
                              isRequired={true}
                              isInvalid={errors.name && errors.name.message}
                         >
                              <FormLabel>Name</FormLabel>
                              <Input
                                   type="text"
                                   aria-label="name"
                                   name="displayName"
                                   id="name"
                                   placeholder="Your name"
                                   ref={register({
                                        required: 'Please enter your name.'
                                   })}
                              />
                              <FormErrorMessage>
                                   {errors.name && errors.name.message}
                              </FormErrorMessage>
                         </FormControl>
                         <FormControl isRequired>
                              <FormLabel>Phone</FormLabel>
                              <HStack>
                                   <Select
                                        width="xsm"
                                        name="countryCode"
                                        ref={register({
                                             required:
                                                  'Please select your countryCode.'
                                        })}
                                   >
                                        {Object.keys(CountryCode).map(function (
                                             keyName,
                                             keyIndex
                                        ) {
                                             return (
                                                  <option
                                                       val={keyIndex}
                                                       key={
                                                            CountryCode[keyName]
                                                       }
                                                  >
                                                       {keyName +
                                                            ' ' +
                                                            CountryCode[
                                                                 keyName
                                                            ]}
                                                  </option>
                                             );
                                        })}
                                   </Select>
                                   <Input
                                        type="phone"
                                        aria-label="phone"
                                        name="phone"
                                        id="phone"
                                        placeholder="1234567890"
                                        ref={register({
                                             required:
                                                  'Please enter your phone.'
                                        })}
                                   />
                              </HStack>
                         </FormControl>
                         <FormControl isRequired>
                              <FormLabel>Email address</FormLabel>
                              <Input
                                   type="email"
                                   aria-label="email"
                                   name="email"
                                   id="email"
                                   placeholder="xyz@abc.com"
                                   ref={register({
                                        required: 'Please enter a password.'
                                   })}
                              />
                         </FormControl>

                         <FormControl isRequired>
                              <FormLabel>Password</FormLabel>
                              <Input
                                   type="password"
                                   aria-label="password"
                                   name="password"
                                   id="password"
                                   ref={register({
                                        required: 'Please enter a password.'
                                   })}
                              />
                         </FormControl>
                         <Text textAlign="center" textColor="aygreen.800">
                              By submitting this form you agree to our{' '}
                              <Link href=" /privacy" target="_blank">
                                   <a
                                        target="_blank"
                                        style={{
                                             textDecoration: 'underline',
                                             color: '#029dd6'
                                        }}
                                   >
                                        {' '}
                                        privacy policy
                                   </a>
                              </Link>
                         </Text>

                         <Button
                              type="submit"
                              colorScheme="aygreen"
                              isLoading={loading}
                              _active={{
                                   transform: 'scale(0.95)'
                              }}
                         >
                              Create
                         </Button>

                         <Link href="login">
                              <Text
                                   textAlign="center"
                                   textColor="aygreen.800"
                                   cursor="pointer"
                              >
                                   Log in instead?
                              </Text>
                         </Link>
                    </Stack>
               )}
               {isBrowser && <div id="recapctha-box"></div>}
          </>
     );
};

export default Signup;
