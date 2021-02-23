import {
     Button,
     Divider,
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
     useDisclosure,
     useToast
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useAuth } from '@/lib/auth';
import Router, { useRouter } from 'next/router';
import firebase from '@/lib/firebase';
import { AnimatePresence } from 'framer-motion';
import { MotionStack } from '../shared/MotionElements';
import { CountryCode } from './ContentData';
import { RiLoader2Line } from 'react-icons/ri';

const LoginOtp = () => {
     const { handleSubmit, register, errors, reset } = useForm();
     const [loginType, setLoginType] = useState('otp');
     const [useOtp, setUseOtp] = useState(false);
     const [loading, setLoading] = useState(false);
     const [loadingOtp, setLoadingOtp] = useState(false);
     const toast = useToast();
     const router = useRouter();

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

     const onPhoneSignInSubmit = ({ phone, countryCode }) => {
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
                    toast({
                         title: 'An error occurred.',
                         description: error.message,
                         status: 'error',
                         duration: 5000,
                         isClosable: true
                    });

                    grecaptcha.reset(window.recaptchaWidgetId);
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
                    toast({
                         title: 'Signed In.',
                         description: 'OTP verified succesfully',
                         status: 'success',
                         duration: 5000,
                         isClosable: true
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

     return (
          <>
               <Heading
                    textAlign="center"
                    fontWeight="normal"
                    fontSize={['2xl', '2xl', '4xl']}
                    color="primaryDarkGray"
               >
                    Log In OTP
               </Heading>

               {!useOtp ? (
                    <>
                         <MotionStack
                              spacing={{ base: 5, md: 8, lg: 8 }}
                              mt={5}
                              width={{ base: '100%', md: 'sm', lg: 'sm' }}
                              exit={{ y: -1000, opacity: 1 }}
                              as="form"
                              onSubmit={handleSubmit((data) =>
                                   onPhoneSignInSubmit(data)
                              )}
                         >
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
                                             {Object.keys(CountryCode).map(
                                                  function (key, index) {
                                                       return (
                                                            <option
                                                                 val={
                                                                      CountryCode[
                                                                           key
                                                                      ]
                                                                 }
                                                                 key={index}
                                                            >
                                                                 {
                                                                      CountryCode[
                                                                           key
                                                                      ]
                                                                 }
                                                            </option>
                                                       );
                                                  }
                                             )}
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

                              <Button
                                   type="submit"
                                   colorScheme="aygreen"
                                   isLoading={loading}
                                   loadingText="Generating"
                                   onClick={() => setLoading(true)}
                                   _active={{
                                        transform: 'scale(0.95)'
                                   }}
                              >
                                   Get OTP
                              </Button>
                         </MotionStack>

                         <Stack
                              spacing={{ base: 5, md: 8, lg: 8 }}
                              mt={5}
                              width={{ base: '100%', md: 'sm', lg: 'sm' }}
                         >
                              <Divider />
                              <Button
                                   type="submit"
                                   colorScheme="aygray"
                                   id="sign-in-button"
                                   width="100%"
                                   onClick={() => router.push('/account/login')}
                                   _active={{
                                        transform: 'scale(0.95)'
                                   }}
                              >
                                   Login Via Email
                              </Button>
                              <Link href="signup">
                                   <Text textAlign="center" cursor="pointer">
                                        Don't have an account?
                                   </Text>
                              </Link>
                         </Stack>
                    </>
               ) : (
                    <MotionStack
                         spacing={{ base: 5, md: 8, lg: 8 }}
                         mt={5}
                         width={{ base: '100%', md: 'sm', lg: 'sm' }}
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
               )}

               <div id="recapctha-box"></div>
          </>
     );
};

export default LoginOtp;
