import { useAuth } from '@/lib/auth';
import {
     Avatar,
     Box,
     Divider,
     Flex,
     Grid,
     Heading,
     Spinner,
     Stack,
     Text
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import Head from 'next/head';

const Account = () => {
     const { user } = useAuth();
     const { data, error } = useSWR(
          user ? [`/api/user/${user.uid}`, user.token] : null,
          fetcher
     );

     if (error) {
          return (
               <>
                    <Head>
                         <script
                              dangerouslySetInnerHTML={{
                                   __html: `
                              if (!document.cookie && !document.cookie.includes('athayog-auth')) {
                                   window.location.href = "/"
                              }
                         `
                              }}
                         />
                    </Head>
                    <Grid placeItems="center" height="100vh">
                         <Text>
                              Oops something happend on our end :(. Please try
                              again
                         </Text>
                    </Grid>
               </>
          );
     }

     if (!data) {
          return (
               <>
                    <Head>
                         <script
                              dangerouslySetInnerHTML={{
                                   __html: `
                              if (!document.cookie && !document.cookie.includes('athayog-auth')) {
                                   window.location.href = "/"
                              }
                         `
                              }}
                         />
                    </Head>
                    <Grid placeItems="center" height="100vh">
                         <Spinner />
                    </Grid>
               </>
          );
     }

     return (
          <>
               <Head>
                    <script
                         dangerouslySetInnerHTML={{
                              __html: `
                              if (!document.cookie && !document.cookie.includes('athayog-auth')) {
                                   window.location.href = "/"
                              }
                         `
                         }}
                    />
               </Head>
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
                         <Box
                              bg="white"
                              boxShadow="base"
                              rounded="lg"
                              padding={5}
                         >
                              {user?.email}

                              <Divider />
                              <Grid gridTemplateColumns="repeat(auto-fit,(250px,1fr))">
                                   {data.information.map((data) => {
                                        return (
                                             <Grid key={data.id}>
                                                  <Box>
                                                       Course Name: {data.name}
                                                  </Box>
                                                  <Box>
                                                       Duration: {data.duration}
                                                  </Box>
                                                  <Box>Price: {data.price}</Box>
                                             </Grid>
                                        );
                                   })}
                              </Grid>
                         </Box>
                    </Flex>
               </Flex>
          </>
     );
};

export default Account;
