import { useAuth } from '@/lib/auth';
import {
     Avatar,
     Box,
     chakra,
     Flex,
     Grid,
     Heading,
     Spinner,
     Stack,
     Text
} from '@chakra-ui/react';
import React from 'react';
import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import Head from 'next/head';
import HomeLayout from '@/components/layout/HomeLayout';

const Account = () => {
     const { user } = useAuth();
     const { data, error } = useSWR(
          user ? [`/api/user/purchases/${user.uid}`, user.token] : null,
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
                         direction={{ base: 'column', md: 'row', lg: 'row' }}
                         alignItems="center"
                         width="60vw"
                    >
                         <Stack
                              direction="column"
                              justifyContent="center"
                              alignItems="center"
                              spacing="2"
                         >
                              <Avatar
                                   fontSize={{
                                        base: 'lg',
                                        md: 'xl',
                                        lg: 'xl'
                                   }}
                                   name={user?.name}
                              />
                              <Heading
                                   fontWeight="primaryDark"
                                   fontSize={{
                                        base: 'lg',
                                        md: '2xl',
                                        lg: '2xl'
                                   }}
                              >
                                   {user?.name}
                              </Heading>
                              <Text textColor="gray.500"> {user?.email}</Text>
                         </Stack>

                         {data.purchases.length !== 0 ? (
                              <Flex
                                   direction="column"
                                   justifyContent="center"
                                   alignItems="center"
                                   mt={{ base: '2rem', md: '0', lg: '0' }}
                              >
                                   <Heading
                                        fontSize={{
                                             base: 'lg',
                                             md: '2xl',
                                             lg: '2xl'
                                        }}
                                   >
                                        Courses Purchased
                                   </Heading>
                                   {data?.purchases.map((data) => {
                                        return (
                                             <Box
                                                  bg="white"
                                                  boxShadow="base"
                                                  rounded="lg"
                                                  padding={5}
                                                  key={data.id}
                                                  mt={3}
                                             >
                                                  <Grid key={data.id}>
                                                       <Text>
                                                            Course Name: {'\t'}
                                                            <chakra.span fontWeight="medium">
                                                                 {
                                                                      data.courseName
                                                                 }
                                                            </chakra.span>
                                                       </Text>
                                                       <Box>
                                                            Duration:{'\t'}
                                                            <chakra.span fontWeight="medium">
                                                                 {data.duration}
                                                            </chakra.span>
                                                       </Box>
                                                       <Box>
                                                            Price:
                                                            <chakra.span fontWeight="medium">
                                                                 {'\t'}
                                                                 &#8377;
                                                                 {data.price}
                                                            </chakra.span>
                                                       </Box>
                                                  </Grid>
                                             </Box>
                                        );
                                   })}
                              </Flex>
                         ) : (
                              <Flex
                                   direction="column"
                                   justifyContent="center"
                                   alignItems="center"
                                   mt={{ base: '2rem', md: '0', lg: '0' }}
                              >
                                   <Heading
                                        fontSize={{
                                             base: 'lg',
                                             md: '2xl',
                                             lg: '2xl'
                                        }}
                                        fontWeight="normal"
                                   >
                                        No Courses Purchased :(
                                   </Heading>
                                   <chakra.span>
                                        Please check our offerings
                                   </chakra.span>
                              </Flex>
                         )}
                    </Flex>
               </Flex>
          </>
     );
};

export default Account;
Account.Layout = HomeLayout;
