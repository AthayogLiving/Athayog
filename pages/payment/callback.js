import { Box, Flex, Grid, Spinner, Text } from '@chakra-ui/react';
import React from 'react';
import { useRouter } from 'next/router';

import { updatePaymentSession } from '@/lib/db/payment';
import { useAuth } from '@/lib/auth';
import Success from '@/components/home/Payment/Success';
import Failure from '@/components/home/Payment/Failure';
import HomeLayout from '@/components/layout/HomeLayout';

const callback = () => {
     const { user, signout, loading } = useAuth();
     const router = useRouter();
     const {
          razorpay_payment_id,
          razorpay_payment_link_id,
          razorpay_payment_link_reference_id,
          razorpay_payment_link_status,
          razorpay_signature,
          userId,
          courseId,
          courseName
     } = router.query;

     if (!userId) {
          return (
               <Grid height="100vh" placeItems="center">
                    <Grid placeItems="center">
                         <Spinner />
                         <Text>Please do not refresh</Text>
                    </Grid>
               </Grid>
          );
     }

     if (courseId) {
          updatePaymentSession(
               userId,
               razorpay_payment_id,
               razorpay_payment_link_id,
               courseId,
               razorpay_payment_link_status
          );
     }

     return (
          <Grid placeItems="center" height="100vh" bg="primaryWhite">
               <Box bg="white" boxShadow="base" rounded="lg" padding={5}>
                    {razorpay_payment_link_status === 'paid' ? (
                         <Success
                              courseName={courseName}
                              linkId={razorpay_payment_link_id}
                              referenceId={razorpay_payment_link_reference_id}
                         />
                    ) : (
                         <Failure
                              linkId={razorpay_payment_link_id}
                              referenceId={razorpay_payment_link_reference_id}
                         />
                    )}
               </Box>
          </Grid>
     );
};

export default callback;
callback.Layout = HomeLayout;
