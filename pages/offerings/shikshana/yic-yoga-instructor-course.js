import HomeLayout from '@/components/layout/HomeLayout';
import NavbarHelper from '@/components/shared/NavbarHelper';
import ShikshanaInformation from '@/components/shared/ShikshanaInformation';
import {
     Badge,
     Box,
     Flex,
     Heading,
     HStack,
     Stack,
     Text
} from '@chakra-ui/layout';
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
import { BiRightArrowAlt } from 'react-icons/bi';
import { MdLocationOn } from 'react-icons/md';
function YicYoga() {
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
                    bg="white"
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

                         <Box overflowX="auto" width="100%" mt={10}>
                              <Flex fontWeight="medium">
                                   <MdLocationOn
                                        style={{
                                             marginRight: '0.2rem'
                                        }}
                                   />
                                   <Text>Location: KR Puram</Text>
                              </Flex>
                              <Text fontWeight="medium">
                                   Time: 6 AM - 8:30 AM (Weekday, MonFri)
                              </Text>
                              <Table
                                   variant="simple"
                                   size="md"
                                   bg="white"
                                   colorScheme="gray"
                                   borderWidth="1px"
                              >
                                   <Thead>
                                        <Tr fontWeight="medium">
                                             <Th bg="gray.100">Location</Th>
                                             <Th bg="gray.100">Time</Th>
                                             <Th bg="gray.100">January</Th>
                                             <Th bg="gray.100">May</Th>
                                             <Th bg="gray.100">September</Th>
                                        </Tr>
                                   </Thead>
                                   <Tbody>
                                        <Tr fontWeight="normal">
                                             <Td>
                                                  <Flex colorScheme="aygreen">
                                                       <MdLocationOn
                                                            style={{
                                                                 marginRight:
                                                                      '0.2rem'
                                                            }}
                                                       />
                                                       KR Puram
                                                  </Flex>
                                             </Td>
                                             <Td>
                                                  <Box>
                                                       <Text>
                                                            6 AM - 8:30 AM
                                                            (Weekday, MonFri)
                                                       </Text>
                                                  </Box>
                                             </Td>

                                             <Td>
                                                  <HStack>
                                                       <Badge
                                                            rounded="sm"
                                                            colorScheme="green"
                                                            fontWeight="medium"
                                                       >
                                                            3rd January 2022
                                                       </Badge>
                                                       <BiRightArrowAlt />
                                                       <Badge
                                                            rounded="sm"
                                                            fontWeight="medium"
                                                            colorScheme="green"
                                                       >
                                                            12th April 2022
                                                       </Badge>
                                                  </HStack>
                                             </Td>
                                             <Td>
                                                  <HStack>
                                                       <Badge
                                                            rounded="sm"
                                                            colorScheme="green"
                                                            fontWeight="medium"
                                                       >
                                                            2nd May 2022
                                                       </Badge>
                                                       <BiRightArrowAlt />
                                                       <Badge
                                                            rounded="sm"
                                                            fontWeight="medium"
                                                            colorScheme="green"
                                                       >
                                                            5th August 2022
                                                       </Badge>
                                                  </HStack>
                                             </Td>
                                             <Td>
                                                  <HStack>
                                                       <Badge
                                                            rounded="sm"
                                                            colorScheme="green"
                                                            fontWeight="medium"
                                                       >
                                                            5th September 2022
                                                       </Badge>
                                                       <BiRightArrowAlt />
                                                       <Badge
                                                            rounded="sm"
                                                            fontWeight="medium"
                                                            colorScheme="green"
                                                       >
                                                            December 2022
                                                       </Badge>
                                                  </HStack>
                                             </Td>
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
