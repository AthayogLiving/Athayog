import React from 'react';
import {
     Table,
     Thead,
     Tbody,
     Tfoot,
     Tr,
     Th,
     Td,
     TableCaption,
     Flex,
     Heading,
     Box
} from '@chakra-ui/react';

function GeneralOfferTable() {
     return (
          <Flex
               margin="auto"
               padding={{ base: '2rem 0', md: '3rem 0', lg: '5rem 0' }}
               justifyContent="center"
               alignItems="center"
               width="100vw"
               bg="primaryWhite"
          >
               <Flex
                    justifyContent="center"
                    direction="column"
                    alignItems="center"
                    width={{ base: '95%', md: '90%', lg: '80%' }}
               >
                    <Heading
                         fontWeight="normal"
                         fontSize={{ base: '2xl', md: '3xl' }}
                    >
                         Intensity Of Classes
                    </Heading>
                    <Box
                         overflowX="auto"
                         width="100%"
                         boxShadow="base"
                         rounded="lg"
                         mt={10}
                    >
                         <Table
                              variant="simple"
                              size="md"
                              bg="white"
                              colorScheme="aygreen"
                              className="scheduleTable"
                         >
                              <Thead>
                                   <Tr>
                                        <Th bg="aygreen.200">Class Name</Th>
                                        <Th bg="aygreen.200">
                                             Body Engagement
                                        </Th>

                                        <Th bg="aygreen.200">
                                             Breath Engagement
                                        </Th>
                                        <Th bg="aygreen.200">
                                             Mind Engagement
                                        </Th>
                                   </Tr>
                              </Thead>
                              <Tbody>
                                   <Tr>
                                        <Td bg="aygreen.100">
                                             Universal Harmony
                                        </Td>
                                   </Tr>
                                   <Tr>
                                        <Td bg="aygreen.100">
                                             Transcending Transitions
                                        </Td>
                                   </Tr>
                                   <Tr>
                                        <Td bg="aygreen.100">
                                             Rhythm of Being
                                        </Td>
                                   </Tr>
                                   <Tr>
                                        <Td bg="aygreen.100">Deep Space </Td>
                                   </Tr>
                                   <Tr>
                                        <Td bg="aygreen.100">Little Star</Td>
                                   </Tr>
                                   <Tr>
                                        <Td bg="aygreen.100">Inner World</Td>
                                   </Tr>
                              </Tbody>
                         </Table>
                    </Box>
               </Flex>
          </Flex>
     );
}

export default GeneralOfferTable;
