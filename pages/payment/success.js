import {
     Box,
     Flex,
     Grid,
     Text,
     Heading,
     VStack,
     chakra,
     Spinner,
     Divider
} from '@chakra-ui/react';
import React from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/lib/auth';
import Image from 'next/image';
import HomeLayout from '@/components/layout/HomeLayout';
import paymentSuccess from 'public/paymentSuccess.svg';
import NavbarHelper from '@/components/shared/NavbarHelper';

const success = () => {
     const { user, signout, loading } = useAuth();
     const router = useRouter();
     const { razorpayPaymentId, razorpayOrderId, courseName } = router.query;

     if (!razorpayPaymentId) {
          return (
               <Grid height="100vh" placeItems="center">
                    <Grid placeItems="center">
                         <Spinner />
                         <Text>Please do not refresh</Text>
                    </Grid>
               </Grid>
          );
     }

     // if (!user) {
     //      router.push('/');
     // }

     return (
          <>
               <NavbarHelper />
               <Grid placeItems="center" bg="primaryWhite">
                    <Box margin={{ base: '0', md: '5rem 0', lg: '5rem 0' }}>
                         <Box
                              bg="white"
                              boxShadow="base"
                              rounded={{ base: 'none', md: 'lg', lg: 'lg' }}
                              margin="rem 0"
                              padding={{ base: 3, md: 5, lg: 10 }}
                              height="100%"
                              w={{ base: '100%', md: 'lg', lg: 'lg' }}
                         >
                              <VStack justify="space-around" spacing={2}>
                                   <Image
                                        height="300px"
                                        width="300px"
                                        src={paymentSuccess}
                                   />
                                   <Box>
                                        <Heading
                                             textAlign="center"
                                             color="gray.800"
                                        >
                                             Payment Successfull
                                        </Heading>
                                        <Text
                                             textAlign="center"
                                             color="gray.500"
                                             mt={3}
                                        >
                                             Your payment has been successfull.
                                             You can check your purchases in my
                                             account section
                                        </Text>

                                        <Box
                                             mt={5}
                                             textAlign="center"
                                             border="1px solid "
                                             borderColor="gray.100"
                                             rounded="lg"
                                             padding={{
                                                  base: 3,
                                                  md: 3,
                                                  lg: 3
                                             }}
                                        >
                                             <Flex
                                                  width="100%"
                                                  justifyContent="space-between"
                                             >
                                                  <Text>Course Name:</Text>
                                                  <Text>{courseName}</Text>
                                             </Flex>
                                             <Divider mt={2} mb={2} />
                                             <Flex
                                                  width="100%"
                                                  justifyContent="space-between"
                                             >
                                                  <Text>Order Id:</Text>
                                                  <Text>{razorpayOrderId}</Text>
                                             </Flex>
                                        </Box>
                                   </Box>
                              </VStack>
                         </Box>
                    </Box>
               </Grid>
          </>
     );
};

export default success;
success.Layout = HomeLayout;
