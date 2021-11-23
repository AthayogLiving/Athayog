import HomeLayout from '@/components/layout/HomeLayout';
import NavbarHelper from '@/components/shared/NavbarHelper';
import {
     Box,
     Flex,
     Heading,
     HStack,
     ListItem,
     OrderedList,
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

function ShortCourses() {
     const d = new Date();

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
          <>
               {' '}
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
                              Short Course
                         </Heading>

                         <Stack spacing={2} my={5}>
                              <Stack spacing={5}>
                                   {' '}
                                   <Text>
                                        AthaYog Living is an institution of Yoga
                                        devoted to preserving its long-standing
                                        legacy by propagating true purpose,
                                        philosophies and practices. The name
                                        Athayog is derived from the combination
                                        of two Sanskrit words, ‘Atha’ which
                                        translates to ‘now’ and ‘Yog’ than means
                                        ‘to join’. Our deep-rooted knowledge in
                                        this field comes from age-old scriptures
                                        like the Vedas, Sankhya Philosophy,
                                        Bhagwat Geeta, Patanjali’s Yoga Sutras,
                                        Hatha Yoga Pradipika and the teachings
                                        of all our gurus. We also have a team of
                                        young, energetic and dynamic individuals
                                        who are constantly enhancing their Yogic
                                        knowledge.
                                   </Text>
                              </Stack>
                         </Stack>

                         <Box mt={10}>
                              <Heading
                                   fontWeight="normal"
                                   fontSize={{
                                        base: '1.5rem',
                                        md: '2rem',
                                        lg: '2rem'
                                   }}
                              >
                                   The syllabus consists of topics like :
                              </Heading>
                              <Flex
                                   padding={{
                                        base: '1rem 0',
                                        md: '1rem 0',
                                        lg: '2rem 0'
                                   }}
                                   justifyContent="space-between"
                              >
                                   <OrderedList spacing={20}>
                                        <HStack
                                             justifyContent="space-between"
                                             alignItems="flex-start"
                                             spacing={{
                                                  base: 0,
                                                  md: 20,
                                                  lg: 20
                                             }}
                                             flexDirection={{
                                                  base: 'column',
                                                  md: 'row',
                                                  lg: 'row'
                                             }}
                                        >
                                             <Box>
                                                  <ListItem>
                                                       Introduction to Yoga and
                                                       its Streams
                                                  </ListItem>
                                                  <ListItem>
                                                       Life and Message of
                                                       Spiritual Masters &
                                                       Indian Culture
                                                  </ListItem>
                                                  <ListItem>
                                                       Report Writing &
                                                       Presentation
                                                  </ListItem>
                                                  <ListItem>
                                                       Kriyā, Āsana, Prāṇāyāma,
                                                       Dhyāna – Practice &
                                                       Presentation
                                                  </ListItem>
                                                  <ListItem>
                                                       Teaching Techniques -
                                                       Worksheet Writing &
                                                       Presentation
                                                  </ListItem>
                                                  <ListItem>
                                                       Karma Yoga, Maitri
                                                       Milana, Kīrtana, Krīḍa
                                                       Yoga & Ānanda Sabhā
                                                  </ListItem>
                                             </Box>
                                        </HStack>
                                   </OrderedList>
                              </Flex>
                         </Box>

                         <Flex
                              padding={{
                                   base: '1rem 0',
                                   md: '1rem 0',
                                   lg: '2rem 0'
                              }}
                              justifyContent="space-between"
                         >
                              <Stack spacing={5}>
                                   <Text>
                                        There will also be yogic games and
                                        assignments to improve concentration,
                                        stamina, memory, awareness and a happy
                                        assembly program to tune oneself with
                                        nature, happiness and bliss. The
                                        completion of this course will result in
                                        the ability to teach yoga to the public
                                        who are also having health concerns.
                                   </Text>
                                   <Text>
                                        Teaching methodologies for students
                                        consist of presentations, application of
                                        eight steps, demonstration, group
                                        discussions and practice, library
                                        facility, report writing, one-to-one
                                        discussions, lectures and review
                                        classes. Other value systems and
                                        teachings that would be inculcated are
                                        Maitrimilan (chanting of slok based on
                                        the Gita), Karma Yoga (self-less
                                        service), Sattvic food, spiritual
                                        guidance, changes in lifestyle and other
                                        important values.
                                   </Text>
                              </Stack>
                         </Flex>
                         <Box mt={10}>
                              <Heading
                                   fontWeight="normal"
                                   fontSize={{
                                        base: '1.5rem',
                                        md: '2rem',
                                        lg: '2rem'
                                   }}
                              >
                                   Course Inclusion
                              </Heading>
                              <Flex
                                   padding={{
                                        base: '1rem 0',
                                        md: '1rem 0',
                                        lg: '2rem 0'
                                   }}
                                   justifyContent="space-between"
                              >
                                   <OrderedList spacing={20}>
                                        <HStack
                                             justifyContent="space-between"
                                             alignItems="flex-start"
                                             spacing={{
                                                  base: 0,
                                                  md: 20,
                                                  lg: 20
                                             }}
                                             flexDirection={{
                                                  base: 'column',
                                                  md: 'row',
                                                  lg: 'row'
                                             }}
                                        >
                                             <Box>
                                                  <ListItem>
                                                       Classical Asanas
                                                  </ListItem>
                                                  <ListItem>Pranayama</ListItem>
                                                  <ListItem>
                                                       Yoga Nidra
                                                  </ListItem>
                                                  <ListItem>
                                                       Anatomy & Physiology
                                                  </ListItem>
                                                  <ListItem>
                                                       Philosophy
                                                  </ListItem>
                                                  <ListItem>
                                                       Yoga Text / Yoga Sutra -
                                                       Bhagvatgita
                                                  </ListItem>
                                                  <ListItem>Ayurveda</ListItem>
                                             </Box>
                                             <Box>
                                                  <ListItem>Shatkarma</ListItem>
                                                  <ListItem>Chanting</ListItem>
                                                  <ListItem>
                                                       2 Days Retreat
                                                  </ListItem>
                                                  <ListItem>
                                                       Teaching Methodology
                                                  </ListItem>
                                                  <ListItem>
                                                       Class Apprenticeship
                                                  </ListItem>
                                                  <ListItem>
                                                       Internship
                                                  </ListItem>
                                                  <ListItem>
                                                       Career Opportunity
                                                  </ListItem>
                                             </Box>
                                        </HStack>
                                   </OrderedList>
                              </Flex>
                         </Box>
                    </Flex>
               </Flex>
               {/*
                */}
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
                         {' '}
                         <Heading
                              fontWeight="normal"
                              fontSize={{ base: '2xl', md: '3xl' }}
                         >
                              Schedule For {monthNames[d.getMonth()]}{' '}
                              {d.getFullYear()}
                         </Heading>
                         <Heading
                              fontWeight="normal"
                              fontSize={{ base: 'xl', md: '2xl' }}
                              mt={10}
                         >
                              RYT 200 Courses
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
                                        RYT 200 Courses
                                   </TableCaption>
                                   <Thead>
                                        <Tr>
                                             <Th bg="secondaryGreen">Date</Th>
                                             <Th bg="secondaryGreen">
                                                  Timings
                                             </Th>
                                             <Th bg="secondaryGreen">Days</Th>
                                        </Tr>
                                   </Thead>
                                   <Tbody>
                                        <Tr>
                                             <Td bg="green.100">
                                                  4th Oct 2021 - 3rd Dec 2021
                                             </Td>
                                             <Td>11am - 4pm </Td>
                                             <Td>Mon - Fri</Td>
                                        </Tr>
                                        <Tr>
                                             <Td bg="green.100">-</Td>
                                             <Td>6am & 6pm</Td>
                                             <Td>Mon - Fri</Td>
                                        </Tr>
                                        <Tr></Tr>
                                        <Tr>
                                             <Td bg="green.100">
                                                  3rd Jan 2022 - 28th Feb 2022
                                             </Td>
                                             <Td>11am - 4pm </Td>
                                             <Td>Mon - Fri</Td>
                                        </Tr>
                                        <Tr>
                                             <Td bg="green.100">-</Td>
                                             <Td>6am & 6pm</Td>
                                             <Td>Mon - Fri</Td>
                                        </Tr>
                                   </Tbody>
                              </Table>
                         </Box>
                    </Flex>
               </Flex>
          </>
     );
}

export default ShortCourses;
ShortCourses.Layout = HomeLayout;
