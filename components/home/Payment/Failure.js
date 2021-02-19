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
import paymentFailure from 'public/paymentFailure.svg';
import Image from 'next/image';

import { ImSad } from 'react-icons/im';

const Failure = ({ linkId, referenceId }) => {
     return (
          <HStack justify="space-around" spacing={2}>
               <Image height="300px" width="300px" src={paymentFailure} />
               <Box>
                    <Flex alignItems="center">
                         <Heading textColor="red.600">Payment Failed</Heading>
                    </Flex>
                    <Box mt={2}>
                         <Text textColor="gray.600" fontSize="xl">
                              Any amount dedcuted will be refunded within 5 - 7
                              working days
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

export default Failure;
