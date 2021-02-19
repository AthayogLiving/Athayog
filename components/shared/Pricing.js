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
import { v4 as uuidv4 } from 'uuid';

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
          // if (!res) {
          //      toast({
          //           title: 'Error',
          //           description:
          //                'Something happend on our side :(. Please try again',
          //           status: 'error',
          //           duration: 5000,
          //           isClosable: true
          //      });
          //      setButtonId('');
          //      return;
          // }

          // creating a new order
          const result = await axios.post('/api/payment/link', {
               data: {
                    amount: 1000,
                    currency: 'INR',
                    accept_partial: false,
                    expire_by: 1691097057,
                    reference_id: uuidv4(),
                    description: 'Payment for policy no #23456',
                    customer: {
                         name: 'Harsim Kumar',
                         contact: '+919999999999',
                         email: 'gaurav.kumar@example.com'
                    },
                    notify: {
                         sms: true,
                         email: true
                    },
                    reminder_enable: true,
                    notes: {
                         policy_name: 'Jeevan Bima'
                    },
                    callback_url:
                         'https://7f50e1d3510c.ngrok.io/api/payment/callback',
                    callback_method: 'get'
               }
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

          console.log(result.data);

          const { short_url } = result.data;
          console.log('Short', short_url);
          router.push(short_url);
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
