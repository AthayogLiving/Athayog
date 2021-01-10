import React, { useState } from 'react';
import { auth } from 'firebase';
import Router from 'next/router';
import { useAuth } from '@/lib/auth';
import {
     Input,
     Stack,
     Button,
     ButtonGroup,
     Flex,
     Box,
     FormControl,
     Heading,
     FormLabel,
     Spacer,
     Image,
     InputGroup,
     InputLeftElement,
     Text
} from '@chakra-ui/react';
import {
     PhoneIcon,
     AddIcon,
     WarningIcon,
     AtSignIcon,
     UnlockIcon
} from '@chakra-ui/icons';
import Head from 'next/head';
import BrandLogo from '../../public/logo.png';

const index = () => {
     const auth = useAuth();
     const [email, setEmail] = useState();
     const [password, setPassword] = useState();
     const [isLoading, setIsLoading] = useState();
     const handleClick = (e) => {
          e.preventDefault();
          setIsLoading(true);
          auth.signinWithEmail(email, password, '/admin/dashboard');
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
                              shadow="md"
                              bg="white"
                              borderRadius="lg"
                              w={[300, 400, 500]}
                              mt="5"
                         >
                              {!auth.user ? (
                                   <FormControl id="admin_login">
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
                                                  onChange={(e) =>
                                                       setEmail(e.target.value)
                                                  }
                                             />
                                        </InputGroup>
                                        <FormLabel mt="8">Password</FormLabel>
                                        <InputGroup>
                                             {' '}
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
                                                  onChange={(e) =>
                                                       setPassword(
                                                            e.target.value
                                                       )
                                                  }
                                             />
                                        </InputGroup>
                                   </FormControl>
                              ) : null}
                              <Box mt={10}>
                                   <Button
                                        sizs="sm"
                                        type="button"
                                        width="full"
                                        shadow="md"
                                        isLoading={isLoading ? true : false}
                                        loadingText="Submitting"
                                        background="purple.600"
                                        _hover={{ bg: 'purple.500' }}
                                        color="white"
                                        onClick={(e) => handleClick(e)}
                                   >
                                        Sign in
                                   </Button>
                              </Box>
                         </Box>
                    </Flex>
               </Box>
          </>
     );
};

export default index;
