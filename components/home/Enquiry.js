import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import React from 'react';

const Enquiry = () => {
     return (
          <Box height="sm" bg="white">
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
                         Having an Enquiry? Reach out to us.
                    </Heading>
                    <Button
                         bg="aygreen.100"
                         color="primaryDarkGray"
                         variant="solid"
                         size="sm"
                         fontSize="md"
                         rounded="md"
                         mt={10}
                         px={10}
                         py={5}
                    >
                         Enquiry
                    </Button>
               </Flex>
          </Box>
     );
};

export default Enquiry;
