import React from 'react';
import {
     Box,
     chakra,
     Flex,
     Grid,
     Heading,
     HStack,
     Spinner,
     Text
} from '@chakra-ui/react';
import paymentSuccess from 'public/paymentSuccess.svg';
import Image from 'next/image';

const Success = ({ courseName, linkId, referenceId }) => {
     return (
          <HStack justify="space-around" spacing={2}>
               <Image height="300px" width="300px" src={paymentSuccess} />
               <Box>
                    <Flex alignItems="center">
                         <Heading textColor="green.600">
                              Payment Success
                         </Heading>
                    </Flex>
                    <Box mt={2}>
                         <Text textColor="gray.600" fontSize="xl">
                              <chakra.span
                                   fontWeight="medium"
                                   textColor="gray.900"
                              >
                                   Course Name:{' '}
                              </chakra.span>
                              {courseName}
                         </Text>
                         <Text textColor="gray.600" mt={2}>
                              <chakra.span
                                   fontWeight="medium"
                                   textColor="gray.900"
                              >
                                   Reference Id:{' '}
                              </chakra.span>
                              {linkId}
                         </Text>
                         <Text textColor="gray.600">
                              <chakra.span
                                   fontWeight="medium"
                                   textColor="gray.900"
                              >
                                   Payment Id:{' '}
                              </chakra.span>
                              {referenceId}
                         </Text>
                    </Box>
               </Box>
          </HStack>
     );
};

export default Success;
