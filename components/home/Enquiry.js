import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import React, { useState } from 'react';
import EnquiryModal from './Enquiry/EnquiryModal';

const Enquiry = () => {
     return (
          <Box
               height={{
                    base: '12rem',
                    md: 'sm',
                    lg: 'sm'
               }}
               bg="white"
               maxW="90%"
               margin="auto"
          >
               <Flex
                    alignItems="center"
                    justifyContent="center"
                    direction="column"
                    height="100%"
                    width="100%"
               >
                    <Heading
                         textAlign="center"
                         fontWeight="normal"
                         color="primaryDarkGray"
                         fontSize={{
                              base: '1.2rem',
                              md: '1.5rem',
                              lg: '1.5rem'
                         }}
                    >
                         Have an Enquiry? Reach out to us.
                    </Heading>
                    <EnquiryModal />
               </Flex>
          </Box>
     );
};

export default Enquiry;
