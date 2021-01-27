import { useAuth } from '@/lib/auth';
import { Avatar, Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const Account = () => {
     const { user } = useAuth();
     const [noUser, setUser] = useState(null);
     const router = useRouter();
     useEffect(() => {
          if (user) {
               setUser(user);
          } else {
               router.push('/');
          }
          // if there is no authenticated user, redirect to profile page
     }, [user]);

     return (
          <Flex
               margin="auto"
               padding="5rem"
               justifyContent="center"
               alignItems="center"
               width="100vw"
               bg="#fbfbfb"
               height="100vh"
          >
               <Flex
                    justifyContent="space-around"
                    direction="row"
                    alignItems="center"
                    width="60vw"
               >
                    <Stack
                         direction="column"
                         justifyContent="center"
                         alignItems="center"
                         spacing="2"
                    >
                         <Avatar size="xl" />
                         <Heading fontWeight="primaryDark">
                              {user?.name}
                         </Heading>
                         <Text>Student</Text>
                    </Stack>
                    <Box bg="white" boxShadow="base" rounded="lg" padding={5}>
                         {user?.email}
                    </Box>
               </Flex>
          </Flex>
     );
};

export default Account;
