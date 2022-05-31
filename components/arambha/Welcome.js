import { Box, Text } from '@chakra-ui/react';
import React from 'react';

function Welcome() {
     return (
          <Box position="absolute" bottom="0" width="100%">
               <Text
                    textAlign="center"
                    fontSize="xl"
                    bg="green.900"
                    textColor="green.50"
                    padding="5"
               >
                    AthaYog Living is celebrating Yoga with a grand festival and
                    we cordially invite each and every one of you to celebrate
                    the Yogic way of life.
               </Text>
          </Box>
     );
}

export default Welcome;
