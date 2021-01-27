import {
     Button,
     FormControl,
     FormErrorMessage,
     FormLabel,
     Heading,
     Input,
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

const Login = () => {
     const { handleSubmit, register, errors, reset } = useForm();
     const { signinWithEmail } = useAuth();
     const [loading, setLoading] = useState(false);
     const toast = useToast();
     const router = useRouter();
     const onUserLogin = async ({ email, password }) => {
          setLoading(true);
          await signinWithEmail(email, password, '/').catch((error) => {
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
     return (
          <>
               <Heading
                    textAlign="center"
                    fontWeight="normal"
                    fontSize="4xl"
                    color="primaryDarkGray"
               >
                    Log In
               </Heading>
               <Stack
                    spacing={8}
                    mt={5}
                    width="sm"
                    as="form"
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
                         <Link href="/">
                              <Text cursor="pointer" mt={2} color="aygreen.500">
                                   Forgot your password?
                              </Text>
                         </Link>
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
                    <Link href="signup">
                         <Text textAlign="center" cursor="pointer">
                              Don't have an account?
                         </Text>
                    </Link>
               </Stack>
          </>
     );
};

export default Login;
