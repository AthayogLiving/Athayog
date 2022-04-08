import { Box, Button, Flex, Stack, StackDivider } from '@chakra-ui/react';
import Link from 'next/link';
import React, { useEffect } from 'react';

function RegisterNow({ pageType }) {
     const details = [
          { id: 1, firstColumn: 'Age', secondColumn: '6 - 11yr' },
          { id: 2, firstColumn: 'Date', secondColumn: ' 2nd May - 13th May' },
          { id: 3, firstColumn: 'Time', secondColumn: '  11am - 1pm' },
          {
               id: 4,
               firstColumn: 'Location',
               secondColumn: ' Indiranagar / KR Puram / Online'
          }
     ];

     useEffect(() => {
          // call api or anything
          (function () {
               var d = document;
               var x = !d.getElementById('razorpay-embed-btn-js');
               if (x) {
                    var s = d.createElement('script');
                    s.defer = !0;
                    s.id = 'razorpay-embed-btn-js';
                    s.src =
                         'https://cdn.razorpay.com/static/embed_btn/bundle.js';
                    d.body.appendChild(s);
               } else {
                    var rzp = window['__rzp__'];
                    rzp && rzp.init && rzp.init();
               }
          })();
     });

     if (pageType == 'hero') {
          return (
               <>
                    <Stack
                         border="1.5px solid"
                         borderColor="gray.100"
                         py="3"
                         boxShadow="base"
                         bg="white"
                         px="5"
                         display={{ base: 'none', md: 'none', lg: 'flex' }}
                         rounded="base"
                         spacing={{ base: '5', md: '8' }}
                         width={{ base: '100%', lg: 'container.xl' }}
                         position={{ base: 'relative', md: 'absolute' }}
                         bottom={{ base: '0px', md: '-20px' }}
                         divider={<StackDivider borderColor="gray.300" />}
                         mt="8"
                         align={{ base: 'baseline', md: 'center' }}
                         justifyContent={{
                              base: 'space-between',
                              md: 'space-evenly'
                         }}
                         direction={{ base: 'column', md: 'row' }}
                    >
                         <Flex direction="column" alignItems="center">
                              <Link
                                   href="https://rzp.io/l/y9lRXaC"
                                   target="_blank"
                                   passHref
                              >
                                   <a target="_blank">
                                        <Button
                                             colorScheme="aygreen"
                                             width="100%"
                                        >
                                             {' '}
                                             Register Now
                                        </Button>
                                   </a>
                              </Link>
                         </Flex>
                         {details.map(({ id, firstColumn, secondColumn }) => {
                              return (
                                   <Flex key={id} direction="column">
                                        <Box textColor="gray.600">
                                             {firstColumn}
                                        </Box>{' '}
                                        <Box
                                             textColor="gray.900"
                                             fontWeight="medium"
                                        >
                                             {secondColumn}
                                        </Box>
                                   </Flex>
                              );
                         })}
                    </Stack>
               </>
          );
     } else {
          return (
               <>
                    <Stack
                         borderColor="gray.100"
                         py="3"
                         bg="white"
                         px="5"
                         display={{ base: 'flex', md: 'flex', lg: 'none' }}
                         rounded="base"
                         spacing={{ base: '5', md: '8' }}
                         width={{ base: '100%', lg: 'container.lg' }}
                         bottom={{ base: '0px', md: '-20px' }}
                         divider={<StackDivider borderColor="gray.300" />}
                         align={{ base: 'baseline', md: 'center' }}
                         justifyContent={{
                              base: 'space-between',
                              md: 'space-evenly'
                         }}
                         direction={{ base: 'column', md: 'row' }}
                    >
                         <Flex
                              direction="column"
                              alignItems="center"
                              width="100%"
                         >
                              <Link
                                   href="https://rzp.io/l/y9lRXaC"
                                   target="_blank"
                                   passHref
                              >
                                   <a target="_blank" style={{ width: '100%' }}>
                                        <Button
                                             colorScheme="aygreen"
                                             width="100%"
                                        >
                                             {' '}
                                             Register Now
                                        </Button>
                                   </a>
                              </Link>
                         </Flex>
                         {details.map(({ id, firstColumn, secondColumn }) => {
                              return (
                                   <Flex key={id} direction="column">
                                        <Box textColor="gray.600">
                                             {firstColumn}
                                        </Box>{' '}
                                        <Box
                                             textColor="gray.900"
                                             fontWeight="medium"
                                        >
                                             {secondColumn}
                                        </Box>
                                   </Flex>
                              );
                         })}
                    </Stack>
               </>
          );
     }
}

export default RegisterNow;
