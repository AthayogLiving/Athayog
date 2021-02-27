import {
     Box,
     Flex,
     Grid,
     Text,
     Heading,
     VStack,
     chakra,
     Spinner
} from '@chakra-ui/react';
import React from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/lib/auth';
import Image from 'next/image';
import HomeLayout from '@/components/layout/HomeLayout';
import paymentSuccess from 'public/paymentSuccess.svg';

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
          <Grid placeItems="center" height="100vh" bg="primaryWhite">
               <Box bg="white" boxShadow="base" rounded="lg" padding={5}>
                    <VStack justify="space-around" spacing={2}>
                         <Image
                              height="300px"
                              width="300px"
                              src={paymentSuccess}
                         />
                         <Box>
                              <Flex alignItems="center">
                                   <Heading textColor="green.600">
                                        Payment Success
                                   </Heading>
                              </Flex>
                              <Box mt={2}>
                                   <Text textColor="gray.600" fontSize="xl">
                                        {courseName}
                                   </Text>
                                   <Text textColor="gray.600" mt={2}>
                                        <chakra.span
                                             fontWeight="medium"
                                             textColor="gray.900"
                                        >
                                             Order Id:{' '}
                                        </chakra.span>
                                        {razorpayOrderId}
                                   </Text>
                                   <Text textColor="gray.600">
                                        <chakra.span
                                             fontWeight="medium"
                                             textColor="gray.900"
                                        >
                                             Payment Id:{' '}
                                        </chakra.span>
                                        {razorpayPaymentId}
                                   </Text>
                              </Box>
                         </Box>
                    </VStack>
               </Box>
          </Grid>
     );
};

export default success;
success.Layout = HomeLayout;
