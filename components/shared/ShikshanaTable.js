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
                         Schedule 2021
                    </Heading>
                    <Heading
                         fontWeight="normal"
                         fontSize={{ base: 'xl', md: '2xl' }}
                         mt={10}
                    >
                         Short Courses
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
                              <TableCaption bg="white" mt="0">
                                   Shikshana Pada
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
                                        <Td bg="green.100">
                                             {' '}
                                             10:00am - 1:00pm{' '}
                                        </Td>
                                        <Td>Pranayama course</Td>
                                        <Td>26th July - 30th July </Td>

                                        <Td>Anjali</Td>
                                   </Tr>
                                   <Tr>
                                        <Td bg="green.100"> 10am - 1pm </Td>
                                        <Td>Cyclic Meditation</Td>
                                        <Td> 2nd August - 6th August </Td>

                                        <Td>Parsanth</Td>
                                   </Tr>
                                   <Tr>
                                        <Td bg="green.100"> 10am - 1pm </Td>
                                        <Td>Advance Hata course</Td>
                                        <Td>9th August - 13th August </Td>

                                        <Td>Deepak </Td>
                                   </Tr>
                                   <Tr>
                                        <Td bg="green.100"> 10am - 1pm</Td>
                                        <Td>YogaNidra</Td>
                                        <Td>16th - 20th August </Td>

                                        <Td>Kamaljeet</Td>
                                   </Tr>
                                   <Tr>
                                        <Td bg="green.100"> 10am - 1pm</Td>
                                        <Td>Advanced Meditation technique </Td>
                                        <Td> 23rd - 27th August </Td>

                                        <Td>Parshanth & Spandhana</Td>
                                   </Tr>
                              </Tbody>
                         </Table>
                    </Box>
                    <Heading
                         fontWeight="normal"
                         fontSize={{ base: 'xl', md: '2xl' }}
                         mt={20}
                    >
                         Vyasa Yoga Instructor Course
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
                              <TableCaption bg="white" mt="0">
                                   Shikshana Pada - YIC (Online)
                              </TableCaption>
                              <Thead>
                                   <Tr>
                                        <Th bg="secondaryGreen">Course Name</Th>
                                        <Th bg="secondaryGreen">Time</Th>
                                        <Th bg="secondaryGreen">Date</Th>
                                        <Th bg="secondaryGreen">Days</Th>
                                   </Tr>
                              </Thead>
                              <Tbody>
                                   <Tr>
                                        <Td bg="green.100">
                                             YIC Course (Online)
                                        </Td>
                                        <Td>10:00am - 12:30am</Td>
                                        <Td>31st May - 20th August</Td>
                                        <Td>Mon - Sat</Td>
                                   </Tr>
                                   <Tr>
                                        <Td bg="green.100">
                                             YIC Course (Online)
                                        </Td>
                                        <Td>10:00am - 3:00pm</Td>
                                        <Td>3rd July - 21st November</Td>
                                        <Td>Sat - Sun</Td>
                                   </Tr>
                              </Tbody>
                         </Table>
                    </Box>
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
                              <TableCaption bg="white" mt="0">
                                   Shikshana Pada - Level 1 course - Vyasa - YIC
                              </TableCaption>
                              <Thead>
                                   <Tr>
                                        <Th bg="secondaryGreen">Course Name</Th>
                                        <Th bg="secondaryGreen">Time</Th>
                                        <Th bg="secondaryGreen">Date</Th>
                                        <Th bg="secondaryGreen">Days</Th>
                                   </Tr>
                              </Thead>
                              <Tbody>
                                   <Tr>
                                        <Td bg="green.100">
                                             YIC Course (Onsite)
                                        </Td>
                                        <Td>6:00am - 8:30am</Td>
                                        <Td>5th April - 9th July</Td>
                                        <Td>Mon - Fri</Td>
                                   </Tr>
                                   <Tr>
                                        <Td bg="green.100">
                                             YIC Course (Onsite)
                                        </Td>
                                        <Td>5:00pm - 7:30pm</Td>
                                        <Td>5th April - 9th July</Td>
                                        <Td>Mon - Fri</Td>
                                   </Tr>
                                   <Tr>
                                        <Td bg="green.100">
                                             YIC Course (Onsite)
                                        </Td>
                                        <Td> 6am - 8:30am </Td>
                                        <Td>2nd August - 10th November</Td>
                                        <Td>Mon - Fri</Td>
                                   </Tr>
                              </Tbody>
                         </Table>
                    </Box>
               </Flex>
          </Flex>
     );
};

export default ShikshanaTable;
