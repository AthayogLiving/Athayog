import { Box, Text } from '@chakra-ui/react';
import React from 'react';

function Events() {
     return (
          <Box p={5} bg="white">
               <Text
                    textAlign="center"
                    fontWeight="medium"
                    fontSize={{ base: 'xl', md: '3xl' }}
               >
                    Our Live Events
               </Text>
          </Box>
     );
}

export default Events;
