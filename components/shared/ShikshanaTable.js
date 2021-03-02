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

const ShikshanaTable = () => {
     return (
          <Flex
               margin="auto"
               padding={{ base: '2rem 0', md: '3rem 0', lg: '5rem 0' }}
               justifyContent="center"
               alignItems="center"
               width="100vw"
               bg="gray.200"
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
                              <TableCaption bg="white" mt="0">
                                   Shikshana Pada - Level 1 course - 300 hours
                              </TableCaption>
                              <Thead>
                                   <Tr>
                                        <Th bg="secondaryGreen">Time</Th>
                                        <Th bg="secondaryGreen">Course Name</Th>
                                        <Th bg="secondaryGreen">Batch 1</Th>
                                        <Th bg="secondaryGreen">Batch 2</Th>
                                        <Th bg="secondaryGreen">Batch 3</Th>
                                   </Tr>
                              </Thead>
                              <Tbody>
                                   <Tr>
                                        <Td bg="green.100">
                                             11:00 am - 4:00 pm
                                        </Td>
                                        <Td>RYT 200 / YIC</Td>
                                        <Td>1st March - 19th May</Td>
                                        <Td>31st May - 13th August</Td>
                                        <Td>1st September - 19th November</Td>
                                   </Tr>
                              </Tbody>
                         </Table>
                    </Box>
               </Flex>
          </Flex>
     );
};

export default ShikshanaTable;
