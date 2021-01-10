import React, { useState } from 'react';
import { useAuth } from '@/lib/auth';
import { useForm } from 'react-hook-form';
import {
     Input,
     Button,
     Flex,
     Box,
     FormControl,
     Heading,
     FormLabel,
     Image,
     InputGroup,
     useToast,
     InputLeftElement,
     Text,
     FormErrorMessage
} from '@chakra-ui/react';
import { AtSignIcon, UnlockIcon } from '@chakra-ui/icons';
import Head from 'next/head';
import BrandLogo from '../../public/logo.png';

const index = () => {
     const auth = useAuth();
     const toast = useToast();
     const [loading, setLoading] = useState(false);
     const { signinWithEmail } = useAuth();
     const { handleSubmit, register, errors } = useForm();

     const onLogin = ({ email, pass }) => {
          setLoading(true);
          signinWithEmail(email, pass, '/admin/dashboard').catch((error) => {
               setLoading(false);
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
               <Box bg="gray.50">
                    <Head>
                         <title>Athayog Admin</title>
                    </Head>
                    <Flex as="main" direction="column" align="center" h="100vh">
                         <Image
                              boxSize="80px"
                              objectFit="cover"
                              src={BrandLogo}
                              alt="Brand Logo"
                              mb={10}
                              mt={20}
                         />
                         <Heading as="h3" size="lg" textAlign="center" mb={0}>
                              Sign in to your account
                         </Heading>
                         <Text fontSize="md" color="purple.600" mb={5}>
                              Athayog Admin
                         </Text>
                         <Box
                              p={10}
                              shadow={[null, 'md']}
                              bg="white"
                              borderRadius="lg"
                              w={[300, 400, 500]}
                              mt="5"
                              as="form"
                              onSubmit={handleSubmit((data) => onLogin(data))}
                              register={register}
                         >
                              <>
                                   <FormControl
                                        id="admin_login"
                                        isRequired={true}
                                        isInvalid={
                                             errors.email &&
                                             errors.email.message
                                        }
                                   >
                                        <FormLabel>Email address</FormLabel>
                                        <InputGroup>
                                             <InputLeftElement
                                                  pointerEvents="none"
                                                  children={
                                                       <AtSignIcon color="gray.300" />
                                                  }
                                             />
                                             <Input
                                                  variant="outline"
                                                  type="text"
                                                  bg="white"
                                                  shadow="sm"
                                                  autoFocus
                                                  aria-label="Email Address"
                                                  id="email"
                                                  name="email"
                                                  ref={register({
                                                       required:
                                                            'Please enter your email.'
                                                  })}
                                                  placeholder="name@athayog.com"
                                             />
                                             <FormErrorMessage>
                                                  {errors.email &&
                                                       errors.email.message}
                                             </FormErrorMessage>
                                        </InputGroup>
                                   </FormControl>
                                   <FormControl
                                        isRequired={true}
                                        isInvalid={
                                             errors.pass && errors.pass.message
                                        }
                                   >
                                        <FormLabel mt="8">Password</FormLabel>
                                        <InputGroup>
                                             <InputLeftElement
                                                  pointerEvents="none"
                                                  children={
                                                       <UnlockIcon color="gray.300" />
                                                  }
                                             />
                                             <Input
                                                  variant="outline"
                                                  type="password"
                                                  bg="white"
                                                  shadow="sm"
                                                  aria-label="Password"
                                                  name="pass"
                                                  id="password"
                                                  type="password"
                                                  ref={register({
                                                       required:
                                                            'Please enter a password.'
                                                  })}
                                             />
                                             <FormErrorMessage>
                                                  {errors.pass &&
                                                       errors.pass.message}
                                             </FormErrorMessage>
                                        </InputGroup>
                                   </FormControl>
                                   <Box mt={10}>
                                        <Button
                                             sizs="sm"
                                             type="button"
                                             width="full"
                                             shadow="md"
                                             type="submit"
                                             loadingText="Submitting"
                                             background="green.500"
                                             _hover={{
                                                  bg: 'green.400'
                                             }}
                                             color="white"
                                             isLoading={loading}
                                             fontWeight="medium"
                                             mt={4}
                                             h="50px"
                                             fontSize="lg"
                                             _active={{
                                                  bg: 'gray.800',
                                                  transform: 'scale(0.95)'
                                             }}
                                        >
                                             Sign in
                                        </Button>
                                   </Box>
                              </>
                         </Box>
                    </Flex>
               </Box>
          </>
     );
};

export default index;
