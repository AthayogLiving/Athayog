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
                                   Workshop 2021
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
                                        <Td bg="green.100">1st May</Td>
                                        <Td>Pranayama Workshop</Td>
                                        <Td>7:30 AM - 9:00 AM</Td>
                                        <Td>Sharath</Td>
                                   </Tr>
                                   <Tr>
                                        <Td bg="green.100">9th May</Td>
                                        <Td>Yoga for immunity</Td>
                                        <Td>7:30 AM - 9:00 AM</Td>
                                        <Td>Anjali</Td>
                                   </Tr>
                                   <Tr>
                                        <Td bg="green.100">15th May</Td>
                                        <Td>Yoga Nidra</Td>
                                        <Td>7:30 AM - 9:00 AM</Td>
                                        <Td>Kamaljeet </Td>
                                   </Tr>
                                   <Tr>
                                        <Td bg="green.100">22nd May</Td>
                                        <Td>Ashtanga</Td>
                                        <Td>7:30 AM - 9:00 AM</Td>
                                        <Td>Deepak</Td>
                                   </Tr>
                                   <Tr>
                                        <Td bg="green.100">23rd May</Td>
                                        <Td>Sivananda</Td>
                                        <Td>7:30 AM - 9:00 AM</Td>
                                        <Td>Spandana</Td>
                                   </Tr>
                                   <Tr>
                                        <Td bg="green.100">29th May</Td>
                                        <Td>Yoga for Covid,</Td>
                                        <Td>7:30 AM - 9:00 AM</Td>
                                        <Td>Prashanth </Td>
                                   </Tr>
                                   <Tr>
                                        <Td bg="green.100">19th June</Td>
                                        <Td>Teaching Methodology,</Td>
                                        <Td>7:30 AM - 9:00 AM</Td>
                                        <Td>Sharath</Td>
                                   </Tr>
                              </Tbody>
                         </Table>
                    </Box>
               </Flex>
          </Flex>
     );
};

export default WorkShopTable;
