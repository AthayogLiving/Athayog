import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

function Quote() {
     return (
          <Flex
               p={{ base: '10', md: '15', lg: '20' }}
               bg="gray.50"
               textColor="aygray.300"
               fontWeight="bold"
               justifyContent="center"
               alignItems="center"
               direction="column"
               fontSize={{ base: 'xl', md: 'xl', lg: '2xl' }}
          >
               <Text maxW="container.lg">
                    “Through practice comes Yoga, through Yoga comes knowledge,
                    through knowledge love and through love bliss.”
               </Text>
               <Text maxW="container.lg" width="full" textAlign="right">
                    Swami Vivekananda
               </Text>
          </Flex>
     );
}

export default Quote;
