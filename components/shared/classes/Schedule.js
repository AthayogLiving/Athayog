import {
     Box,
     Divider,
     Flex,
     Heading,
     Table,
     Tbody,
     Td,
     Text,
     Th,
     Thead,
     HStack,
     Badge,
     TableContainer,
     Tr,
     ListIcon,
     ListItem,
     List
} from '@chakra-ui/react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import React from 'react';
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
                              {/* Schedule For {monthNames[d.getMonth()]}{' '}
                              {d.getFullYear()} (Indiranagar) */}
                              Schedule For Arambha Sadhana (Indiranagar)
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
                                             <Td>Sadhana </Td>
                                             <Td>Sadhana</Td>
                                             <Td>Sadhana </Td>
                                             <Td>Sadhana </Td>
                                             <Td>Sadhana</Td>
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
                                             <Td>Sadhana </Td>
                                             <Td>Sadhana</Td>
                                             <Td>Sadhana </Td>
                                             <Td>Sadhana </Td>
                                             <Td>Sadhana </Td>
                                             <Td>Sadhana</Td>
                                             <Td>Sadhana </Td>
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
                                             <Td>Sadhana</Td>
                                             <Td>Sadhana</Td>
                                             <Td>Sadhana </Td>
                                             <Td>Sadhana</Td>
                                             <Td>Sadhana</Td>
                                             <Td>Sadhana</Td>
                                             <Td>Sadhana </Td>
                                        </Tr>
                                        <Tr>
                                             <Td
                                                  bg="aygreen.100"
                                                  borderBottom="1px"
                                                  borderColor="aygreen.200"
                                                  padding="0px"
                                                  paddingLeft="10px"
                                             >
                                                  11:00 AM - 4:00 PM
                                             </Td>
                                             <Td> - </Td>
                                             <Td> - </Td>
                                             <Td> - </Td>
                                             <Td> - </Td>
                                             <Td> - </Td>
                                             <Td> - </Td>
                                             <Td> - </Td>
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
                                             <Td>Sadhana </Td>
                                             <Td>Sadhana </Td>
                                             <Td>Sadhana </Td>
                                             <Td>Sadhana </Td>
                                             <Td>Sadhana </Td>
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
                                             <Td>Sadhana</Td>
                                             <Td>Sadhana</Td>
                                             <Td>Sadhana</Td>
                                             <Td>Sadhana</Td>
                                             <Td>Sadhana</Td>
                                             <Td>Sadhana</Td>
                                             <Td>Sadhana</Td>
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
                                             <Td>Sadhana</Td>
                                             <Td>Sadhana</Td>
                                             <Td>Sadhana</Td>
                                             <Td>Sadhana</Td>
                                             <Td>Sadhana</Td>
                                             <Td>Sadhana</Td>
                                             <Td>Sadhana</Td>
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
                                             <Td>Sadhana</Td>
                                             <Td>Sadhana</Td>
                                             <Td>Sadhana</Td>
                                             <Td>Sadhana</Td>
                                             <Td>Sadhana</Td>
                                             <Td>-</Td>
                                             <Td>-</Td>
                                        </Tr>
                                   </Tbody>
                              </Table>
                         </Box>
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
                              {/* Schedule For {monthNames[d.getMonth()]}{' '}
                              {d.getFullYear()} (KR Puram) */}
                              Schedule For Arambha Sadhana (KR Puram)
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
                                             <Td>Sadhana </Td>
                                             <Td>Sadhana </Td>
                                             <Td>Sadhana </Td>
                                             <Td>Sadhana</Td>
                                             <Td>Sadhana </Td>
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
                                             <Td>Sadhana</Td>
                                             <Td>Sadhana </Td>
                                             <Td>Sadhana </Td>
                                             <Td>Sadhana</Td>
                                             <Td>Sadhana </Td>
                                             <Td>Sadhana</Td>
                                             <Td>Sadhana </Td>
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
                                             <Td>Sadhana</Td>
                                             <Td>Sadhana</Td>
                                             <Td>Sadhana </Td>
                                             <Td>Sadhana</Td>
                                             <Td>Sadhana</Td>
                                             <Td>Sadhana</Td>
                                             <Td>Sadhana </Td>
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
                                             <Td>Sadhana </Td>
                                             <Td>Sadhana </Td>
                                             <Td>Sadhana </Td>
                                             <Td>Sadhana </Td>
                                             <Td>Sadhana </Td>
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
                                             <Td>Sadhana</Td>
                                             <Td>Sadhana</Td>
                                             <Td>Sadhana</Td>
                                             <Td>Sadhana</Td>
                                             <Td>Sadhana</Td>
                                             <Td>Sadhana</Td>
                                             <Td>Sadhana</Td>
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
                                             <Td>Sadhana</Td>
                                             <Td>Sadhana</Td>
                                             <Td>Sadhana</Td>
                                             <Td>Sadhana</Td>
                                             <Td>Sadhana</Td>
                                             <Td>Sadhana</Td>
                                             <Td>Sadhana</Td>
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
                                             <Td>Sadhana</Td>
                                             <Td>Sadhana</Td>
                                             <Td>Sadhana</Td>
                                             <Td>Sadhana</Td>
                                             <Td>Sadhana</Td>
                                             <Td>-</Td>
                                        </Tr>
                                   </Tbody>
                              </Table>
                         </Box>

                         <Box
                              mt={10}
                              textAlign="left"
                              width="100%"
                              boxShadow="base"
                              bg="white"
                              rounded="md"
                              p={3}
                         >
                              <Box>
                                   <Text
                                        fontWeight="medium"
                                        textTransform="uppercase"
                                   >
                                        Timings Information
                                   </Text>

                                   <Flex gap={10} my={2} direction="row">
                                        <Flex direction="column" gap={1}>
                                             <Box>Monday - Sunday</Box>
                                             {/* <Box>Saturday - Sunday</Box> */}
                                        </Flex>
                                        <Flex direction="column" gap={1}>
                                             <Box>06:00 AM - 08:00 PM</Box>
                                             {/* <Box>07:00 AM - 08:00 PM</Box> */}
                                        </Flex>
                                   </Flex>
                              </Box>
                              {/* <List mt={3}>
                                   <ListItem>
                                        <ListIcon
                                             as={BsFillArrowRightCircleFill}
                                             color="green.500"
                                        />
                                        Athayog living will be closed on 2nd
                                        Saturday of every Month.
                                   </ListItem>
                                   <ListItem>
                                        <ListIcon
                                             as={BsFillArrowRightCircleFill}
                                             color="green.500"
                                        />
                                        2nd May - 13th May: Sadhana Camp - 11:00
                                        AM - 1:00 PM
                                   </ListItem>
                              </List> */}

                              {/* <Badge
                                   whiteSpace="pre-wrap"
                                   fontWeight="medium"
                                   mt={3}
                              >
                                   Note: 108 Surya Namaskara will be practiced
                                   on 1st Saturday of every month, 7am - 9am
                                   batch.{' '}
                              </Badge> */}
                         </Box>
                    </Flex>
               </Flex>
          </div>
     );
}

export default Schedule;
