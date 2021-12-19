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
     Heading,
     Flex,
     Box,
     Text
} from '@chakra-ui/react';
function Schedule() {
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
          <div>
               <Flex
                    margin="auto"
                    padding={{ base: '2rem 0', md: '3rem 0', lg: '5rem 0' }}
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                    width="100vw"
                    bg="primaryWhite"
               >
                    <Flex
                         justifyContent="center"
                         direction="column"
                         alignItems="center"
                         width={{ base: '95%', md: '90%', lg: '90%' }}
                    >
                         <Heading
                              fontWeight="normal"
                              fontSize={{ base: '2xl', md: '3xl' }}
                         >
                              Schedule For {monthNames[d.getMonth()]}{' '}
                              {d.getFullYear()} (Indiranagar)
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
                                   size="sm"
                                   bg="white"
                                   colorScheme="aygreen"
                                   className="scheduleTable"
                              >
                                   <Thead>
                                        <Tr>
                                             <Th bg="aygreen.200">Time</Th>
                                             <Th bg="aygreen.200">Monday</Th>
                                             <Th bg="aygreen.200">Tuesday</Th>
                                             <Th bg="aygreen.200">Wednesday</Th>
                                             <Th bg="aygreen.200">Thursday</Th>
                                             <Th bg="aygreen.200">Friday</Th>
                                             <Th bg="aygreen.200">Saturday</Th>
                                             <Th bg="aygreen.200">Sunday</Th>
                                        </Tr>
                                   </Thead>
                                   <Tbody>
                                        <Tr>
                                             <Td
                                                  bg="aygreen.100"
                                                  borderBottom="1px"
                                                  borderColor="aygreen.200"
                                                  padding="0px"
                                                  paddingLeft="10px"
                                             >
                                                  <Text width="150px">
                                                       6.00 AM - 7.00 AM
                                                  </Text>
                                             </Td>
                                             <Td>Rhythm of Being </Td>
                                             <Td>Sivananda</Td>
                                             <Td>Rhythm of Being </Td>
                                             <Td>Rhythm of Being </Td>
                                             <Td>Transcending Transition</Td>
                                             <Td>---</Td>
                                             <Td>---</Td>
                                        </Tr>
                                        <Tr>
                                             <Td
                                                  bg="aygreen.100"
                                                  borderBottom="1px"
                                                  borderColor="aygreen.200"
                                                  padding="0px"
                                                  paddingLeft="10px"
                                             >
                                                  7.00 AM - 8.00 AM
                                             </Td>
                                             <Td>Transcending Transition </Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Rhythm of Being </Td>
                                             <Td>Transcending Transition </Td>
                                             <Td>Rhythm of Being</Td>
                                             <Td>Sivananda</Td>
                                             <Td>Universal Harmony</Td>
                                        </Tr>
                                        <Tr>
                                             <Td
                                                  bg="aygreen.100"
                                                  borderBottom="1px"
                                                  borderColor="aygreen.200"
                                                  padding="0px"
                                                  paddingLeft="10px"
                                             >
                                                  8:00 AM - 9:00 AM
                                             </Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Rhythm of Being</Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Rhythm of Being</Td>
                                             <Td>Rhythm of Being</Td>
                                             <Td>Transcending Transition </Td>
                                        </Tr>

                                        <Tr>
                                             <Td
                                                  bg="aygreen.100"
                                                  borderBottom="1px"
                                                  borderColor="aygreen.200"
                                                  padding="0px"
                                                  paddingLeft="10px"
                                             >
                                                  4:00 PM - 5:00 PM
                                             </Td>
                                             <Td>Kids Yoga </Td>
                                             <Td>Kids Yoga </Td>
                                             <Td>Kids Yoga </Td>
                                             <Td>Kids Yoga </Td>
                                             <Td>Kids Yoga </Td>
                                             <Td>---</Td>
                                             <Td>---</Td>
                                        </Tr>
                                        <Tr>
                                             <Td
                                                  bg="aygreen.100"
                                                  borderBottom="1px"
                                                  borderColor="aygreen.200"
                                                  padding="0px"
                                                  paddingLeft="10px"
                                             >
                                                  5:00 PM - 6:00 PM
                                             </Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Rhythm of Being</Td>
                                             <Td>Transcending Transition</Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Transcending Transition</Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Rhythm of Being</Td>
                                        </Tr>
                                        <Tr>
                                             <Td
                                                  bg="aygreen.100"
                                                  borderBottom="1px"
                                                  borderColor="aygreen.200"
                                                  padding="0px"
                                                  paddingLeft="10px"
                                             >
                                                  6:00 PM - 7:00 PM
                                             </Td>
                                             <Td>Rhythm of Being</Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Transcending Transition</Td>
                                             <Td>Rhythm of Being</Td>
                                             <Td>Inner World</Td>
                                             <Td>Rhythm of Being</Td>
                                             <Td>Ashtanga</Td>
                                        </Tr>
                                        <Tr>
                                             <Td
                                                  bg="aygreen.100"
                                                  borderBottom="1px"
                                                  borderColor="aygreen.200"
                                                  padding="0px"
                                                  paddingLeft="10px"
                                             >
                                                  7:00 PM - 8:00 PM
                                             </Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Transcending Transition</Td>
                                             <Td>Rhythm of Being</Td>
                                             <Td>Transcending Transition</Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>-</Td>
                                             <Td>-</Td>
                                        </Tr>
                                        <Tr>
                                             <Td
                                                  bg="aygreen.100"
                                                  borderBottom="1px"
                                                  borderColor="aygreen.200"
                                                  padding="0px"
                                                  paddingLeft="10px"
                                             >
                                                  8:00 PM - 9:00 PM
                                             </Td>
                                             <Td>Universal Harmony </Td>
                                             <Td>Rhythm of Being</Td>
                                             <Td>Universal Harmony </Td>
                                             <Td>Deep Space</Td>
                                             <Td>Transcending Transition</Td>
                                             <Td>-</Td>
                                             <Td>-</Td>
                                        </Tr>
                                   </Tbody>
                              </Table>
                         </Box>

                         {/* <Box mt={10} textAlign="left" width="100%">
                              <Text fontWeight="medium">Working hours:</Text>
                              <Text>
                                   Monday to Friday (06:00 AM to 08:00 PM) and
                                   Saturday
                              </Text>
                              <Text>Sunday (07:00 AM to 08:00 PM)</Text>
                              <Text>
                                   Athayog living will be closed on 2nd Saturday
                                   of every Month.
                              </Text>
                         </Box> */}
                    </Flex>
                    <Flex
                         justifyContent="center"
                         direction="column"
                         alignItems="center"
                         width={{ base: '95%', md: '90%', lg: '90%' }}
                         mt={20}
                    >
                         <Heading
                              fontWeight="normal"
                              fontSize={{ base: '2xl', md: '3xl' }}
                         >
                              Schedule For {monthNames[d.getMonth()]}{' '}
                              {d.getFullYear()} (KR Puram)
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
                                   size="sm"
                                   bg="white"
                                   colorScheme="aygreen"
                                   className="scheduleTable"
                              >
                                   <Thead>
                                        <Tr>
                                             <Th bg="aygreen.200">Time</Th>
                                             <Th bg="aygreen.200">Monday</Th>
                                             <Th bg="aygreen.200">Tuesday</Th>
                                             <Th bg="aygreen.200">Wednesday</Th>
                                             <Th bg="aygreen.200">Thursday</Th>
                                             <Th bg="aygreen.200">Friday</Th>
                                             <Th bg="aygreen.200">Saturday</Th>
                                             <Th bg="aygreen.200">Sunday</Th>
                                        </Tr>
                                   </Thead>
                                   <Tbody>
                                        <Tr>
                                             <Td
                                                  bg="aygreen.100"
                                                  borderBottom="1px"
                                                  borderColor="aygreen.200"
                                                  padding="0px"
                                                  paddingLeft="10px"
                                             >
                                                  <Text width="150px">
                                                       6.00 AM - 7.00 AM
                                                  </Text>
                                             </Td>
                                             <Td>Transcending Transition</Td>
                                             <Td>Universal Harmony </Td>
                                             <Td>Rhythm of Being </Td>
                                             <Td>Universal Harmony </Td>x
                                             <Td>Sivananda</Td>
                                             <Td>---</Td>
                                             <Td>---</Td>
                                        </Tr>
                                        <Tr>
                                             <Td
                                                  bg="aygreen.100"
                                                  borderBottom="1px"
                                                  borderColor="aygreen.200"
                                                  padding="0px"
                                                  paddingLeft="10px"
                                             >
                                                  7.00 AM - 8.00 AM
                                             </Td>
                                             <Td>Rhythm of Being </Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Ashtanga </Td>
                                             <Td>Rhythm of Being</Td>
                                             <Td>Transcending Transition </Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Ashtanga</Td>
                                        </Tr>
                                        <Tr>
                                             <Td
                                                  bg="aygreen.100"
                                                  borderBottom="1px"
                                                  borderColor="aygreen.200"
                                                  padding="0px"
                                                  paddingLeft="10px"
                                             >
                                                  8:00 AM - 9:00 AM
                                             </Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Rhythm of Being</Td>
                                             <Td>Transcending Transition </Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Rhythm of Being</Td>
                                             <Td>Rhythm of Being</Td>
                                             <Td>Rhythm of Being</Td>
                                        </Tr>

                                        <Tr>
                                             <Td
                                                  bg="aygreen.100"
                                                  borderBottom="1px"
                                                  borderColor="aygreen.200"
                                                  padding="0px"
                                                  paddingLeft="10px"
                                             >
                                                  4:00 PM - 5:00 PM
                                             </Td>
                                             <Td>Kids Yoga </Td>
                                             <Td>Kids Yoga </Td>
                                             <Td>Kids Yoga </Td>
                                             <Td>Kids Yoga </Td>
                                             <Td>Kids Yoga </Td>
                                             <Td>---</Td>
                                             <Td>---</Td>
                                        </Tr>
                                        <Tr>
                                             <Td
                                                  bg="aygreen.100"
                                                  borderBottom="1px"
                                                  borderColor="aygreen.200"
                                                  padding="0px"
                                                  paddingLeft="10px"
                                             >
                                                  5:00 PM - 6:00 PM
                                             </Td>
                                             <Td>Transcending Transition</Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Rhythm of Being</Td>
                                             <Td>Sivananda</Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Ashtanga</Td>
                                             <Td>Sivananda</Td>
                                        </Tr>
                                        <Tr>
                                             <Td
                                                  bg="aygreen.100"
                                                  borderBottom="1px"
                                                  borderColor="aygreen.200"
                                                  padding="0px"
                                                  paddingLeft="10px"
                                             >
                                                  6:00 PM - 7:00 PM
                                             </Td>
                                             <Td>Rhythm of Being</Td>
                                             <Td>Transcending Transition</Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Rhythm of Being</Td>
                                             <Td>Ashtanga</Td>
                                             <Td>Rhythm of Being</Td>
                                             <Td>Transcending Transition</Td>
                                        </Tr>
                                        <Tr>
                                             <Td
                                                  bg="aygreen.100"
                                                  borderBottom="1px"
                                                  borderColor="aygreen.200"
                                                  padding="0px"
                                                  paddingLeft="10px"
                                             >
                                                  7:00 PM - 8:00 PM
                                             </Td>
                                             <Td>Universal Harmony</Td>
                                             <Td>Rhythm of Being</Td>
                                             <Td>Deep Space</Td>
                                             <Td>Sivananda</Td>
                                             <Td>Inner World</Td>
                                             <Td>-</Td>
                                             <Td>-</Td>
                                        </Tr>
                                        <Tr>
                                             <Td
                                                  bg="aygreen.100"
                                                  borderBottom="1px"
                                                  borderColor="aygreen.200"
                                                  padding="0px"
                                                  paddingLeft="10px"
                                             >
                                                  8:00 PM - 9:00 PM
                                             </Td>
                                             <Td>Sivananda</Td>
                                             <Td>Transcending Transition</Td>
                                             <Td>Universal Harmony </Td>
                                             <Td>Rhythm of Being</Td>
                                             <Td>Universal Harmony </Td>
                                             <Td>-</Td>
                                             <Td>-</Td>
                                        </Tr>
                                   </Tbody>
                              </Table>
                         </Box>

                         <Box mt={10} textAlign="left" width="100%">
                              <Text fontWeight="medium">Working hours:</Text>
                              <Text>
                                   Monday to Friday (06:00 AM to 08:00 PM) and
                                   Saturday
                              </Text>
                              <Text>Sunday (07:00 AM to 08:00 PM)</Text>
                              <Text>
                                   Athayog living will be closed on 2nd Saturday
                                   of every Month.
                              </Text>
                         </Box>
                    </Flex>
               </Flex>
          </div>
     );
}

export default Schedule;
