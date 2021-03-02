import {
     Box,
     Table,
     Thead,
     Tbody,
     Tfoot,
     Tr,
     Th,
     Td,
     TableCaption,
     Flex,
     Heading
} from '@chakra-ui/react';
import React from 'react';

const IntensityTable = () => {
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
                         Schedule
                    </Heading>
                    <Box
                         overflowX="auto"
                         width="100%"
                         boxShadow="base"
                         rounded="lg"
                         mt={10}
                    >
                         {' '}
                         <Table
                              variant="simple"
                              size="md"
                              bg="white"
                              colorScheme="aygreen"
                              className="scheduleTable"
                         >
                              <Thead>
                                   <Tr>
                                        <Th bg="secondaryGreen">Class Name</Th>
                                        <Th bg="secondaryGreen">
                                             Body Engagemen
                                        </Th>
                                        <Th bg="secondaryGreen">
                                             Mind Engagement{' '}
                                        </Th>
                                        <Th bg="secondaryGreen">
                                             Breath Engagement
                                        </Th>
                                   </Tr>
                              </Thead>
                              <Tbody>
                                   <Tr>
                                        <Td bg="green.100">
                                             Universal Harmony
                                        </Td>
                                        <Td>5 Stars</Td>
                                        <Td>5 Stars</Td>
                                        <Td>5 Stars</Td>
                                   </Tr>
                                   <Tr>
                                        <Td bg="green.100">
                                             Transcending Transitions
                                        </Td>
                                        <Td>5 Stars</Td>
                                        <Td>2 Stars</Td>
                                        <Td>5 Stars</Td>
                                   </Tr>
                                   <Tr>
                                        <Td bg="green.100">Rhythm of Being</Td>
                                        <Td>5 Stars</Td>
                                        <Td>2 Stars</Td>
                                        <Td>5 Stars</Td>
                                   </Tr>
                                   <Tr>
                                        <Td bg="green.100">Deep Space </Td>
                                        <Td>2 Stars</Td>
                                        <Td>5 Stars</Td>
                                        <Td>5 Stars</Td>
                                   </Tr>
                                   <Tr>
                                        <Td bg="green.100">Little Star</Td>
                                        <Td>3 Stars</Td>
                                        <Td>5 Stars</Td>
                                        <Td>3 Stars</Td>
                                   </Tr>
                                   <Tr>
                                        <Td bg="green.100">Inner World</Td>
                                        <Td>2 Stars</Td>
                                        <Td>5 Stars</Td>
                                        <Td>4 Stars</Td>
                                   </Tr>
                              </Tbody>
                         </Table>
                    </Box>
               </Flex>
          </Flex>
     );
};

export default IntensityTable;
