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
import { useAuth } from '@/lib/auth';
import { useRouter } from 'next/router';
import cookie from 'js-cookie';
import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import { chakra } from '@chakra-ui/system';

const Pricing = ({ pricing, registerTo, toRegister }) => {
     const { user, signout, loading } = useAuth();
     const [buttonId, setButtonId] = useState('');
     const [loadingPayment, setLoading] = useState(['', false]);
     const router = useRouter();
     const toast = useToast();

     const { data, error } = useSWR(
          user ? [`/api/user/purchases/${user.uid}`, user.token] : null,
          fetcher
     );

     if (pricing.length === 0) {
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
                              Contact us for more information
                         </Heading>
                    </Flex>
               </Flex>
          );
     }

     let coursePurchased = [];
     if (data) {
          data?.purchases?.map((each) => {
               coursePurchased.push(each.id);
          });
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

               cookie.set('routeTo', `/offerings/${registerTo}`, {
                    expires: 1
               });

               router.push('/account/login');

               return;
          }

          if (/@athayogliving.com\s*$/.test(user.email)) {
               setButtonId('');
               toast({
                    title: 'Admin Account',
                    description: `Can't make purchases from admin account`,
                    status: 'warning',
                    duration: 5000,
                    isClosable: true
               });
               return;
          }

          router.push({
               pathname: `/register/${registerTo}`,
               query: {
                    price: price,
                    duration: duration,
                    description: description,
                    courseName: name,
                    courseId: courseId,
                    isTrial: isTrial
               }
          });
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
               bg="#fff"
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
                         {pricing
                              .filter((data) => data.isTrial == false)
                              .sort((a, b) => a.durationNum - b.durationNum)
                              .map((data, index) => {
                                   return (
                                        <Box
                                             bg={
                                                  index % 2 == 0
                                                       ? 'aygreen.100'
                                                       : 'aygreen.200'
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
                                             boxShadow="base"
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
                                                       <Flex>
                                                            {data.old_price &&
                                                                 data?.old_price !==
                                                                      '0' && (
                                                                      <Text
                                                                           fontSize={{
                                                                                base: 'xl',
                                                                                md: '2xl',
                                                                                lg: '3xl'
                                                                           }}
                                                                           mr={
                                                                                3
                                                                           }
                                                                           textColor="#555"
                                                                           textDecoration="line-through"
                                                                           style={{
                                                                                textDecorationThickness:
                                                                                     '3px'
                                                                           }}
                                                                      >
                                                                           {toRegister !==
                                                                           false
                                                                                ? '₹'
                                                                                : null}{' '}
                                                                           {
                                                                                data.old_price
                                                                           }
                                                                      </Text>
                                                                 )}

                                                            <Text
                                                                 fontSize={{
                                                                      base: 'xl',
                                                                      md: '2xl',
                                                                      lg: '3xl'
                                                                 }}
                                                            >
                                                                 {toRegister !==
                                                                 false
                                                                      ? '₹'
                                                                      : null}{' '}
                                                                 {data.price}
                                                            </Text>
                                                       </Flex>
                                                  </Flex>
                                                  {toRegister !== false ? (
                                                       <Button
                                                            colorScheme="aygreen"
                                                            width="8rem"
                                                            size="sm"
                                                            mt={4}
                                                            isDisabled={coursePurchased.find(
                                                                 (element) =>
                                                                      element ==
                                                                      data.id
                                                            )}
                                                            onClick={() =>
                                                                 handleUserPayment(
                                                                      data.price,
                                                                      data.durationNum,
                                                                      data.description,
                                                                      data.courseName,
                                                                      data.id,
                                                                      data.isTrial
                                                                 )
                                                            }
                                                            isLoading={
                                                                 buttonId ===
                                                                 data.id
                                                            }
                                                       >
                                                            {user
                                                                 ? coursePurchased.find(
                                                                        (
                                                                             element
                                                                        ) =>
                                                                             element ==
                                                                             data.id
                                                                   ) !==
                                                                   undefined
                                                                      ? 'Purchased'
                                                                      : 'Register'
                                                                 : 'Register'}
                                                       </Button>
                                                  ) : null}
                                             </Box>
                                        </Box>
                                   );
                              })}
                    </SimpleGrid>

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
                         {pricing
                              .filter((data) => data.isTrial == true)
                              .sort((a, b) => a.durationNum - b.durationNum)
                              .map((data, index) => {
                                   return (
                                        <Box
                                             bg={
                                                  index % 2 == 0
                                                       ? 'aygreen.100'
                                                       : 'aygreen.200'
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
                                             boxShadow="base"
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
                                                            Free
                                                       </Text>
                                                  </Flex>
                                             </Box>
                                        </Box>
                                   );
                              })}
                    </SimpleGrid>
                    <Text textAlign="left" mt={8} width="100%">
                         *Terms and conditions apply
                    </Text>
                    <Text width="100%" textAlign="left">
                         *All price inclusive of 18% GST
                    </Text>
                    <Text mt={8} fontSize="lg">
                         {registerTo == 'space'
                              ? ' *Connect with us to know more about our ongoing offers.'
                              : null}
                         {registerTo == 'shikshana'
                              ? '*Get in touch with us for our early bird offer. Valid for a limited time only'
                              : null}
                    </Text>
               </Flex>
          </Flex>
     );
};

export default Pricing;
