import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import EnquiryModal from '../home/Enquiry/EnquiryModal';
import Link from 'next/link';
function RegisterBlock() {
     return (
          <Flex
               width="100%"
               bg="white"
               alignItems={{ base: 'center', md: 'start' }}
               justifyContent={{ base: 'center', md: 'space-evenly' }}
               flexDir={{ base: 'column', md: 'row' }}
          >
               <Flex
                    py={{ base: '5', md: '20' }}
                    px={{ base: '5', md: '20' }}
                    bg="green.50"
                    width="100%"
                    flexDir="column"
                    alignItems="center"
               >
                    <Heading
                         fontSize={{ base: '3xl', md: '4xl' }}
                         fontWeight="light"
                    >
                         Join The Camp!
                    </Heading>
                    <Link
                         href="https://rzp.io/l/lS6proLJPJ"
                         target="_blank"
                         passHref
                    >
                         <a target="_blank">
                              {' '}
                              <Button
                                   mt={{ base: '5', md: '10' }}
                                   colorScheme="aygreen"
                                   size="md"
                              >
                                   Register Now
                              </Button>
                         </a>
                    </Link>
               </Flex>

               <Flex
                    width="100%"
                    py={{ base: '5', md: '20' }}
                    px={{ base: '5', md: '20' }}
                    bg="white"
                    flexDir="column"
                    alignItems="center"
               >
                    <Heading
                         fontSize={{ base: '3xl', md: '4xl' }}
                         fontWeight="light"
                    >
                         Have Questions?
                    </Heading>
                    <EnquiryModal />
               </Flex>
          </Flex>
     );
}

export default RegisterBlock;
