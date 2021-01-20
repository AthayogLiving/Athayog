import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';

const Faq = () => {
     return (
          <Box height="100vh" bg="#f9f9f9">
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
                    >
                         Faq
                    </Heading>
               </Flex>
          </Box>
     );
};

export default Faq;
