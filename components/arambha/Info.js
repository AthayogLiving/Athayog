import {
     Box,
     Container,
     Heading,
     Stack,
     Text,
     Table,
     Thead,
     Tbody,
     Tfoot,
     Tr,
     Th,
     Td,
     TableCaption,
     TableContainer,
     Divider,
     Flex,
     Grid,
     chakra
} from '@chakra-ui/react';
import Head from 'next/head';

import React from 'react';

function Info() {
     return (
          <Box bg="gray.50">
               <Grid>
                    <Stack
                         spacing={6}
                         textColor="gray.800"
                         bg="yellow.50"
                         p={10}
                    >
                         <Heading
                              as="h4"
                              fontSize="2xl"
                              textAlign="center"
                              textColor="yellow.900"
                              textTransform="uppercase"
                         >
                              Yoga as an ‘innercise’
                         </Heading>
                         <Text fontSize="xl">
                              One of our main goals is to help individuals
                              cultivate and enrich their inner self as much as
                              they work on their external needs like career,
                              physical fitness, entertainment and leisure. In
                              this way, Yoga is not just an exercise for the
                              physical body but also a means to build resilience
                              for dealing with life’s challenges.
                         </Text>
                         <Text fontSize="xl">
                              <chakra.span fontWeight="medium">
                                   Last year, we celebrated International Day of
                                   Yoga with a 12-hour Yogathon celebration{' '}
                              </chakra.span>
                              and our members joined the asana, pranayama,
                              meditation, lecture, chanting and satsang session
                              with great joy. This year we are taking it forward
                              with a grand initiative beyond our studio to an
                              outdoor space open to everyone in Bengaluru.
                         </Text>
                         <Text fontSize="xl">
                              <chakra.span fontWeight="medium">
                                   {' '}
                                   This year{' '}
                              </chakra.span>
                              we are taking it forward with{' '}
                              <chakra.span fontWeight="medium">
                                   a grand initiative beyond our studio{' '}
                              </chakra.span>
                              to an outdoor space open to everyone in Bengaluru.
                         </Text>
                         <Text fontSize="xl" fontStyle="italic">
                              Meet people from all walks of life united through
                              Yoga.
                         </Text>
                    </Stack>
               </Grid>
               <Container maxW="90vw" py={10}>
                    <Stack spacing={10} divider={<Divider />}>
                         <Stack spacing={6} textColor="gray.800">
                              <Heading
                                   as="h4"
                                   fontSize="2xl"
                                   textColor="black"
                                   textDecor="underline"
                              >
                                   Who Can Join?
                              </Heading>
                              <Text>YOGA IS FOR ALL.</Text>
                              <Text fontSize="xl" textColor="gray.800">
                                   Athyayog values the importance of community
                                   and Yoga helps rebuild this sense of
                                   community by allowing people of different
                                   backgrounds, ages, and interests to share the
                                   experience.
                              </Text>
                              <Text fontSize="xl" fontStyle="italic">
                                   Please note that it is open to all above 6
                                   years.
                              </Text>
                         </Stack>
                         <Stack spacing={6}>
                              <Heading
                                   as="h4"
                                   fontSize="2xl"
                                   textDecor="underline"
                              >
                                   Programme Schedule
                              </Heading>
                              <Box fontSize="xl">
                                   <Text>Date: Tuesday, June 21, 2022</Text>
                                   <Text>Time: 5.30 AM - 8.45 AM</Text>
                                   <Text>
                                        Location: Kittur Rani Chennamma Stadium,
                                        Bengaluru
                                   </Text>
                              </Box>
                              <Box>
                                   <TableContainer
                                        border="1px solid"
                                        borderColor="gray.200"
                                        boxShadow="sm"
                                        bg="white"
                                   >
                                        <Table
                                             variant="striped"
                                             colorScheme="gray"
                                        >
                                             <Thead>
                                                  <Tr>
                                                       <Th>Time</Th>
                                                       <Th>Event</Th>
                                                  </Tr>
                                             </Thead>
                                             <Tbody>
                                                  <Tr>
                                                       <Td>5:30 AM</Td>
                                                       <Td>
                                                            Registrations Open{' '}
                                                       </Td>
                                                  </Tr>
                                                  <Tr>
                                                       <Td>
                                                            5:30 AM - 6:30 AM{' '}
                                                       </Td>
                                                       <Td>Pooja & Rituals</Td>
                                                  </Tr>
                                                  <Tr>
                                                       <Td>
                                                            6:30 AM - 6:45 AM
                                                       </Td>
                                                       <Td>Opening Ceremony</Td>
                                                  </Tr>
                                                  <Tr>
                                                       <Td>
                                                            7:00 AM - 8:30 AM{' '}
                                                       </Td>
                                                       <Td>
                                                            Special Yoga Session
                                                            by Sharath
                                                            Basavaraju & Team
                                                       </Td>
                                                  </Tr>
                                                  <Tr>
                                                       <Td>
                                                            8:30 AM - 8:45 AM{' '}
                                                       </Td>
                                                       <Td>Closing Ceremony</Td>
                                                  </Tr>
                                             </Tbody>
                                        </Table>
                                   </TableContainer>
                              </Box>
                         </Stack>
                    </Stack>
               </Container>
          </Box>
     );
}

export default Info;
