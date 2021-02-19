import {
     Box,
     chakra,
     Flex,
     Grid,
     Heading,
     HStack,
     Text
} from '@chakra-ui/react';
import React from 'react';
import { useRouter } from 'next/router';
import { BiBadgeCheck } from 'react-icons/bi';
import paymentSuccess from 'public/paymentSuccess.svg';
import Image from 'next/image';

const callback = () => {
     const router = useRouter();
     const {
          razorpay_payment_id,
          razorpay_payment_link_id,
          razorpay_payment_link_reference_id,
          razorpay_payment_link_status,
          razorpay_signature
     } = router.query;

     return (
          <Grid placeItems="center" height="100vh" bg="primaryWhite">
               <Box bg="white" boxShadow="base" rounded="lg" padding={5}>
                    <HStack justify="space-around" spacing={2}>
                         <Image
                              height="300px"
                              width="300px"
                              src={paymentSuccess}
                         />
                         <Box>
                              <Flex alignItems="center">
                                   <BiBadgeCheck fontSize="3rem" />
                                   <Heading>Payment Success</Heading>
                              </Flex>
                              <Box mt={3}>
                                   <Text textColor="gray.600">
                                        <chakra.span
                                             fontWeight="medium"
                                             textColor="gray.900"
                                        >
                                             Reference Id:{' '}
                                        </chakra.span>
                                        {razorpay_payment_link_reference_id}
                                   </Text>
                              </Box>
                         </Box>
                    </HStack>
               </Box>
          </Grid>
     );
};

export default callback;
