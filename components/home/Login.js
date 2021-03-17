import {
     Button,
     Divider,
     FormControl,
     FormErrorMessage,
     FormLabel,
     Heading,
     Input,
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
import cookie from 'js-cookie';
import { MotionStack } from '../shared/MotionElements';

const Login = () => {
     const { handleSubmit, register, errors, reset, getValues } = useForm();
     const { signinWithEmail } = useAuth();
     const auth = firebase.auth();
     const [loading, setLoading] = useState(false);
     const toast = useToast();
     const router = useRouter();
     const routeCookie = cookie.get('routeTo');
     const [email, setEmail] = useState('');

     const isRoute =
          routeCookie == '' || routeCookie == undefined ? '/' : routeCookie;

     const onUserLogin = async ({ email, password }) => {
          setLoading(true);
          await signinWithEmail(email, password, isRoute).catch((error) => {
               setLoading(false);
               toast({
                    title: 'An error occurred.',
                    description: error.message,
                    status: 'error',
                    duration: 5000,
                    isClosable: true
               });
               reset();
          });
     };

     const forgotPassword = async () => {
          const emailAddress = getValues('email');

          if (emailAddress !== '') {
               auth.sendPasswordResetEmail(emailAddress)
                    .then(function () {
                         toast({
                              title: 'Email Sent',
                              description: 'Password reset email sent',
                              status: 'success',
                              duration: 5000,
                              isClosable: true
                         });
                    })
                    .catch(function (error) {
                         toast({
                              title: 'An error occurred.',
                              description: error.message,
                              status: 'error',
                              duration: 5000,
                              isClosable: true
                         });
                    });
          } else {
               toast({
                    title: 'An error occurred.',
                    description: 'Please enter the email field',
                    status: 'error',
                    duration: 5000,
                    isClosable: true
               });
          }
     };

     return (
          <>
               <Heading
                    textAlign="center"
                    fontWeight="normal"
                    fontSize={['2xl', '2xl', '4xl']}
                    color="primaryDarkGray"
               >
                    Log In
               </Heading>

               <MotionStack
                    spacing={{ base: 5, md: 8, lg: 8 }}
                    mt={5}
                    width={{ base: '100%', md: 'sm', lg: 'sm' }}
                    as="form"
                    exit={{ y: -1000 }}
                    onSubmit={handleSubmit((data) => onUserLogin(data))}
               >
                    <FormControl isRequired>
                         <FormLabel>Email address</FormLabel>
                         <Input
                              type="email"
                              aria-label="email"
                              name="email"
                              id="email"
                              placeholder="something@athayog.com"
                              ref={register({
                                   required: 'Please enter a password.'
                              })}
                         />
                         <FormErrorMessage>
                              {errors.email && errors.email.message}
                         </FormErrorMessage>
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
                         <FormErrorMessage>
                              {errors.password && errors.password.message}
                         </FormErrorMessage>

                         <Text
                              cursor="pointer"
                              mt={2}
                              color="aygreen.500"
                              onClick={() => forgotPassword()}
                         >
                              Forgot your password?
                         </Text>
                    </FormControl>

                    <Button
                         type="submit"
                         colorScheme="aygreen"
                         isLoading={loading}
                         _active={{
                              transform: 'scale(0.95)'
                         }}
                    >
                         Login
                    </Button>
               </MotionStack>

               <Stack
                    spacing={{ base: 5, md: 8, lg: 8 }}
                    mt={5}
                    width={{ base: '100%', md: 'sm', lg: 'sm' }}
               >
                    <Divider color="black" />
                    <Button
                         type="submit"
                         colorScheme="aygray"
                         id="sign-in-button"
                         width="100%"
                         onClick={(e) => router.push('/account/otp')}
                         _active={{
                              transform: 'scale(0.95)'
                         }}
                    >
                         Login Via Phone
                    </Button>
                    <Link href="signup">
                         <Text textAlign="center" cursor="pointer">
                              Sign up instead?
                         </Text>
                    </Link>
               </Stack>
          </>
     );
};

export default Login;
