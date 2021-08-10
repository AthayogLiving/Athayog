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

const WorkShopTable = () => {
     const monthNames = [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'
     ];
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
                         Schedule 2021
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
                                   Schedule For {monthNames[d.getMonth()]}{' '}
                                   {d.getFullYear()}
                              </TableCaption>
                              <Thead>
                                   <Tr>
                                        <Th bg="secondaryGreen">Date</Th>
                                        <Th bg="secondaryGreen">Class Name</Th>
                                        <Th bg="secondaryGreen">Time</Th>
                                        <Th bg="secondaryGreen">Teacher</Th>
                                   </Tr>
                              </Thead>
                              <Tbody>
                                   <Tr>
                                        <Td bg="green.100">3rd July</Td>
                                        <Td>Universal Harmony </Td>
                                        <Td>7:30 AM - 9:00 AM</Td>
                                        <Td>Anjali</Td>
                                   </Tr>
                                   <Tr>
                                        <Td bg="green.100">4th July</Td>
                                        <Td>Rhythm of Being</Td>
                                        <Td>7:30 AM - 9:00 AM</Td>
                                        <Td>Prashanth</Td>
                                   </Tr>
                                   <Tr>
                                        <Td bg="green.100">17th July</Td>
                                        <Td> Transcending Transition </Td>
                                        <Td>7:30 AM - 9:00 AM</Td>
                                        <Td>Depak </Td>
                                   </Tr>
                                   <Tr>
                                        <Td bg="green.100">18th July</Td>
                                        <Td>Sivananda</Td>
                                        <Td>7:30 AM - 9:00 AM</Td>
                                        <Td>Spandana</Td>
                                   </Tr>
                                   <Tr>
                                        <Td bg="green.100">24th July</Td>
                                        <Td>Deep Space</Td>
                                        <Td>7:30 AM - 9:00 AM</Td>
                                        <Td>Anjali</Td>
                                   </Tr>
                                   <Tr>
                                        <Td bg="green.100">31st July</Td>
                                        <Td>Cyclic Meditation</Td>
                                        <Td>7:30 AM - 9:00 AM</Td>
                                        <Td>Deepak </Td>
                                   </Tr>
                              </Tbody>
                         </Table>
                    </Box>
               </Flex>
          </Flex>
     );
};

export default WorkShopTable;
