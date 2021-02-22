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

const Singup = () => {
     const { handleSubmit, register, errors, reset } = useForm();
     const { createUserWithEmailAndPassword } = useAuth();
     const [loading, setLoading] = useState(false);
     const toast = useToast();
     const router = useRouter();
     const onUserCreation = async ({ displayName, email, password }) => {
          setLoading(true);
          await createUserWithEmailAndPassword(email, password, displayName)
               .then(() => {
                    toast({
                         title: 'Account created.',
                         description: "We've created your account for you.",
                         status: 'success',
                         duration: 9000,
                         isClosable: true
                    });
                    reset();
                    setLoading(false);
                    router.push('/');
               })
               .catch((error) => {
                    toast({
                         title: error,
                         description: error.message,
                         status: 'danger',
                         duration: 9000,
                         isClosable: true
                    });
                    setLoading(false);
                    reset();
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
                    Sing In
               </Heading>
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
                    </FormControl>

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
                         <Text textAlign="center" cursor="pointer">
                              Already have an account?
                         </Text>
                    </Link>
               </Stack>
          </>
     );
};

export default Singup;
