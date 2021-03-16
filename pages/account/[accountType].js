import { Box, Flex } from '@chakra-ui/react';

import React from 'react';

import { useRouter } from 'next/router';
import Login from '@/components/home/Login';
import Signup from '@/components/home/Signup';
import Head from 'next/head';
import { capitalizeFirstLetter } from '@/components/helper/Capitalize';
import LoginOtp from '@/components/home/LoginOtp';
import HomeLayout from '@/components/layout/HomeLayout';
import NavbarHelper from '@/components/shared/NavbarHelper';

const Account = () => {
     const router = useRouter();
     const { accountType } = router.query;

     return (
          <>
               <Head>
                    <title>
                         {accountType
                              ? capitalizeFirstLetter(accountType)
                              : 'Account'}
                    </title>
                    <script
                         dangerouslySetInnerHTML={{
                              __html: `
                              if (document.cookie && document.cookie.includes('athayog-auth')) {
                                   window.location.href = "/"
                              }
                         `
                         }}
                    />
               </Head>{' '}
               <NavbarHelper />
               <Box minH="100%" bg="primaryWhite" padding="5rem 0">
                    <Flex
                         alignItems="center"
                         justifyContent="center"
                         direction="column"
                         height="100%"
                         width="100%"
                    >
                         <Box
                              bg="white"
                              rounded="lg"
                              boxShadow="base"
                              padding={10}
                              mt={{ base: '-5rem', md: '-5rem', lg: '0' }}
                              mb={20}
                              height={{ base: '100%', md: 'auto', lg: 'auto' }}
                              width={{ base: '100%', md: 'auto', lg: 'auto' }}
                         >
                              {accountType === 'login' ? (
                                   <Login />
                              ) : accountType === 'otp' ? (
                                   <LoginOtp />
                              ) : (
                                   <Signup />
                              )}
                         </Box>
                    </Flex>
               </Box>
          </>
     );
};

export default Account;
Account.Layout = HomeLayout;
