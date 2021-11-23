import HomeLayout from '@/components/layout/HomeLayout';
import NavbarHelper from '@/components/shared/NavbarHelper';
import ShikshanaInformation from '@/components/shared/ShikshanaInformation';
import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/layout';
import { chakra } from '@chakra-ui/system';
import {
     Table,
     TableCaption,
     Tbody,
     Td,
     Th,
     Thead,
     Tr
} from '@chakra-ui/table';
import React from 'react';

function YicYoga() {
     return (
          <Box>
               <NavbarHelper />
               <Flex
                    margin="auto"
                    padding={{
                         base: '2rem 0',
                         md: '3rem 0',
                         lg: '3rem 0'
                    }}
                    justifyContent="center"
                    alignItems="center"
                    width="100vw"
                    bg="primaryWhite"
               >
                    <Flex
                         justifyContent="center"
                         direction="column"
                         alignItems="flex-start"
                         width="80vw"
                    >
                         <Heading
                              fontWeight="normal"
                              fontSize={{
                                   base: '1.5rem',
                                   md: '2rem',
                                   lg: '2rem'
                              }}
                         >
                              YIC - Yoga Instructor course
                         </Heading>
                         <Flex
                              padding={{
                                   base: '1rem 0',
                                   md: '1rem 0',
                                   lg: '2rem 0'
                              }}
                              justifyContent="space-between"
                         >
                              <Stack spacing={2} mb={5}>
                                   <Text>
                                        The yoga instructor course is a one
                                        month course that helps an individual to
                                        shape their personality and transform
                                        their knowledge to teach yoga
                                        comprehensively. It is propounded by
                                        Swami Vivekananda, the Indian Hindu monk
                                        who was a key figure in the introduction
                                        of the Indian philosophies of Vedanta
                                        and Yoga. The objective of this course
                                        is to provide instructions, training,
                                        research and advancement of all the
                                        streams of yoga and its applications.
                                        Undertaking extra-mural studies and
                                        activities will help contribute to
                                        Peace, Poise, Harmony, Love, Health &
                                        Happiness. It brings together theory and
                                        practical subjects that cover breathing
                                        techniques, asanas, Sat Kriyas,
                                        Pranayama and meditation techniques. The
                                        theory would include an introduction to
                                        Patanjali and Hatha yoga along with
                                        studies of Spiritual Masters and
                                        Applications of Yoga.
                                   </Text>
                              </Stack>
                         </Flex>
                         <Heading
                              fontWeight="normal"
                              fontSize={{ base: 'xl', md: '2xl' }}
                              mt={20}
                              textAlign="center"
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
                                             <Th bg="secondaryGreen">
                                                  Course Name
                                             </Th>
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
                                        Shikshana Pada - Level 1 course - Vyasa
                                        - YIC
                                   </TableCaption>
                                   <Thead>
                                        <Tr>
                                             <Th bg="secondaryGreen">
                                                  Course Name
                                             </Th>
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
          </Box>
     );
}

export default YicYoga;
YicYoga.Layout = HomeLayout;
