import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';

const Schedule = () => {
     return (
          <Box height="100vh" bg="primaryWhite">
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
                         Schedule
                    </Heading>
               </Flex>
          </Box>
     );
};

export default Schedule;
