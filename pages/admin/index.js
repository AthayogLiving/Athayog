import React, { useState } from 'react';
import { auth } from 'firebase';
import { Router } from 'next/router';
import { useAuth } from '@/lib/auth';
import {
     Input,
     Stack,
     Button,
     ButtonGroup,
     Flex,
     Box,
     FormControl,
     Heading
} from '@chakra-ui/react';
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons';
import Head from 'next/head';

const index = () => {
     const auth = useAuth();
     const [email, setEmail] = useState();
     const [password, setPassword] = useState();
     const handleClick = (e) => {
          e.preventDefault();
          auth.signinWithEmail(email, password);
          if (auth.user) {
               Router.push('/admin/dashboard');
          }
     };
     return (
          <>
               <Box bg="gray.100">
                    <Head>
                         <title>Athayog Admin</title>
                    </Head>
                    <Flex
                         as="main"
                         direction="column"
                         align="center"
                         justify="center"
                         h="100vh"
                    >
                         <Box
                              p={10}
                              width="500px"
                              shadow="md"
                              bg="white"
                              borderRadius="md"
                              mt="-10"
                         >
                              <Heading
                                   as="h3"
                                   size="lg"
                                   textAlign="center"
                                   mb={2}
                              >
                                   Athayog Admin
                              </Heading>
                              {!auth.user ? (
                                   <FormControl id="admin_login">
                                        <Input
                                             variant="outline"
                                             placeholder="Email"
                                             type="text"
                                             mt={4}
                                             bg="white"
                                             onChange={(e) =>
                                                  setEmail(e.target.value)
                                             }
                                        />
                                        <Input
                                             variant="outline"
                                             placeholder="Password"
                                             type="password"
                                             mt={4}
                                             bg="white"
                                             onChange={(e) =>
                                                  setPassword(e.target.value)
                                             }
                                        />
                                   </FormControl>
                              ) : null}

                              {!auth.user ? (
                                   <Button
                                        sizs="sm"
                                        type="button"
                                        mt="4"
                                        width="full"
                                        onClick={(e) => handleClick(e)}
                                   >
                                        Sign In
                                   </Button>
                              ) : (
                                   <Button
                                        colorScheme="red"
                                        sizs="sm"
                                        mt="4"
                                        width="full"
                                        onClick={() => auth.signout()}
                                   >
                                        SignOut
                                   </Button>
                              )}
                         </Box>
                    </Flex>
               </Box>
          </>
     );
};

export default index;
