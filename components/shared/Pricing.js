import React, { useState } from 'react';
import {
     Box,
     Button,
     Flex,
     Grid,
     Heading,
     SimpleGrid,
     Text,
     toast,
     useToast
} from '@chakra-ui/react';
import { capitalizeFirstLetter } from '@/components/helper/Capitalize';
import axios from 'axios';
import { logo } from 'public/og.png';
import { useAuth } from '@/lib/auth';
import { useRouter } from 'next/router';
import { updatePaymentDetails } from '@/lib/db/users';

const Pricing = ({ pricing }) => {
     const { user, signout, loading } = useAuth();
     const [buttonId, setButtonId] = useState('');
     const [loadingPayment, setLoading] = useState(['', false]);
     const router = useRouter();
     const toast = useToast();
     if (!pricing) {
          return null;
     }

     const handleUserPayment = async (
          price,
          duration,
          description,
          name,
          courseId,
          isTrial
     ) => {
          setButtonId(courseId);
          if (!user) {
               toast({
                    title: 'Login First',
                    description:
                         'Create or Login to your account to continue payment',
                    status: 'warning',
                    duration: 5000,
                    isClosable: true
               });
               setButtonId('');

               router.push('/account/login');

               return;
          }

          if (isTrial) {
               // await updatePaymentDetails(razorpayPaymentId, paymentDetails);
               return;
          }
          displayRazorpay(price, duration, description, name, courseId);
     };

     const loadScript = (src) => {
          return new Promise((resolve) => {
               const script = document.createElement('script');
               script.src = src;
               script.onload = () => {
                    resolve(true);
               };
               script.onerror = () => {
                    resolve(false);
               };
               document.body.appendChild(script);
          });
     };
     const displayRazorpay = async (
          price,
          duration,
          description,
          name,
          courseId
     ) => {
          const res = await loadScript(
               'https://checkout.razorpay.com/v1/checkout.js'
          );

          if (!res) {
               toast({
                    title: 'Error',
                    description:
                         'Something happend on our side :(. Please try again',
                    status: 'error',
                    duration: 5000,
                    isClosable: true
               });
               setButtonId('');
               return;
          }

          // creating a new order
          const result = await axios.post('/api/payment/orders', {
               amount: price * 100
          });

          if (!result) {
               toast({
                    title: 'Error',
                    description: 'Are you online?',
                    status: 'error',
                    duration: 5000,
                    isClosable: true
               });
               setButtonId('');

               return;
          }

          // Getting the order details back
          const { amount, id: order_id, currency } = result.data;

          const options = {
               key: 'rzp_test_zlJ8m8btntTqEu', // Enter the Key ID generated from the Dashboard
               amount: amount.toString(),
               currency: currency,
               name: 'Athayog Living.',
               description: name,
               image: { logo },
               order_id: order_id,
               handler: async function (response) {
                    const data = {
                         orderCreationId: order_id,
                         razorpayPaymentId: response.razorpay_payment_id,
                         razorpayOrderId: response.razorpay_order_id,
                         razorpaySignature: response.razorpay_signature,
                         courseId,
                         uid: user.uid,
                         price,
                         duration,
                         description,
                         name
                    };

                    const result = await axios
                         .post('/api/payment/success', data)
                         .then((result) => {
                              toast({
                                   title: 'Payment Successfull',
                                   description: `Your payment for ${name} is successfull`,
                                   status: 'success',
                                   duration: 5000,
                                   isClosable: true
                              });
                              setButtonId('');
                         })
                         .catch((error) => {
                              toast({
                                   title: 'Error',
                                   description: error.message,
                                   status: 'error',
                                   duration: 5000,
                                   isClosable: true
                              });
                              setButtonId('');
                         });
               },
               prefill: {
                    name: user?.name,
                    email: user?.email,
                    contact: ''
               },
               notes: {
                    address:
                         'AthayogLiving 307, Sunrise Arcade,Devasandra Main Road,Kodigehalli K R Puram,Bangalore- 560036'
               },
               theme: {
                    color: '#ADDCBC'
               }
          };

          const paymentObject = new window.Razorpay(options);
          paymentObject.open();
     };

     if (pricing === 'Contact For More') {
          return (
               <Flex
                    margin="auto"
                    padding={{
                         base: '2rem 0',
                         md: '3rem 0',
                         lg: '5rem 0'
                    }}
                    justifyContent="center"
                    alignItems="center"
                    width="100vw"
                    bg="#fbfbfb"
               >
                    <Flex
                         justifyContent="center"
                         direction="column"
                         alignItems="center"
                         width="60%"
                    >
                         <Heading
                              fontWeight="normal"
                              fontSize="xl"
                              fontStyle="italic"
                         >
                              Contact us for more information on customized
                              plans.
                         </Heading>
                    </Flex>
               </Flex>
          );
     }
     return (
          <Flex
               margin="auto"
               padding={{
                    base: '2rem 0',
                    md: '3rem 0',
                    lg: '5rem 0'
               }}
               justifyContent="center"
               alignItems="center"
               width="100vw"
               bg="#fbfbfb"
          >
               <Flex
                    justifyContent="center"
                    direction="column"
                    alignItems="center"
                    width={{ base: '90%', md: '75%', lg: '70%' }}
               >
                    <Heading fontWeight="normal">Pricing</Heading>

                    <SimpleGrid
                         minChildWidth={{
                              base: '250px',
                              md: '300px',
                              lg: '350px'
                         }}
                         spacing="20px"
                         width="100%"
                         mt={10}
                    >
                         {pricing.map((data, index) => {
                              return (
                                   <Box
                                        bg={
                                             index % 2 == 0
                                                  ? '#DFF6E4'
                                                  : '#D5FFE2'
                                        }
                                        height="auto"
                                        rounded="lg"
                                        padding={{
                                             base: '6',
                                             md: '8',
                                             lg: '8'
                                        }}
                                        textAlign="center"
                                        d="flex"
                                        flexDirection="column"
                                        key={data.id}
                                        justifyContent="space-between"
                                   >
                                        <Box>
                                             <Heading
                                                  fontSize={{
                                                       base: 'xl',
                                                       md: 'xl',
                                                       lg: '2xl'
                                                  }}
                                                  fontWeight="normal"
                                                  textAlign="left"
                                             >
                                                  {capitalizeFirstLetter(
                                                       data.courseName
                                                  )}
                                             </Heading>
                                             <Text
                                                  mt={5}
                                                  fontWeight="light"
                                                  textAlign="left"
                                                  fontSize={{
                                                       base: 'base',
                                                       md: 'md',
                                                       lg: 'lg'
                                                  }}
                                             >
                                                  {data.description}
                                             </Text>
                                        </Box>
                                        <Box>
                                             <Flex
                                                  justifyContent="space-between"
                                                  align="center"
                                                  mt={5}
                                             >
                                                  <Text
                                                       fontSize={{
                                                            base: 'md',
                                                            md: 'lg',
                                                            lg: 'xl'
                                                       }}
                                                  >
                                                       {data.duration}
                                                  </Text>
                                                  <Text
                                                       fontSize={{
                                                            base: 'xl',
                                                            md: '2xl',
                                                            lg: '3xl'
                                                       }}
                                                  >
                                                       ₹ {data.price}
                                                  </Text>
                                             </Flex>
                                             <Button
                                                  bg="#DBE6CF"
                                                  width="8rem"
                                                  size="sm"
                                                  mt={4}
                                                  isLoading={
                                                       buttonId === data.id
                                                  }
                                                  onClick={() =>
                                                       handleUserPayment(
                                                            data.price,
                                                            data.durationNum,
                                                            data.description,
                                                            data.courseName.toLowerCase(),
                                                            data.id,
                                                            data.isTrial
                                                       )
                                                  }
                                             >
                                                  Purchase
                                             </Button>
                                        </Box>
                                   </Box>
                              );
                         })}
                    </SimpleGrid>
               </Flex>
          </Flex>
     );
};

export default Pricing;
