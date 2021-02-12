import ScheduleHeader from '@/components/admin/ScheduleHeader';
import {
     Box,
     Button,
     ButtonGroup,
     Divider,
     Table,
     Tbody,
     Text,
     Th,
     Td,
     Thead,
     Tr,
     useColorModeValue
} from '@chakra-ui/react';
import Link from 'next/link';

import React from 'react';

import Dashboard from '../dashboard';
const schedule = () => {
     const bg = useColorModeValue('white', 'gray.800');
     const color = useColorModeValue('teal', 'gray.700');

     return (
          <Dashboard>
               <ScheduleHeader siteLink="" />

               <Table
                    variant="simple"
                    bg={bg}
                    rounded="lg"
                    padding={5}
                    boxShadow="base"
                    mt={3}
               >
                    <Thead>
                         <Tr>
                              <Th>Schedule</Th>
                              <Th>Action</Th>
                         </Tr>
                    </Thead>
                    <Tbody>
                         <Tr>
                              <Td>
                                   <Text>General Schedule</Text>
                              </Td>
                              <Td>
                                   <Link href="schedule/general">
                                        <a
                                             style={{
                                                  textDecoration: 'underline'
                                             }}
                                        >
                                             Open
                                        </a>
                                   </Link>
                              </Td>
                         </Tr>
                         <Tr>
                              <Td>
                                   <Text>Shikshana Pada</Text>
                              </Td>
                              <Td>
                                   <Link href="schedule/shikshana">
                                        <a
                                             style={{
                                                  textDecoration: 'underline'
                                             }}
                                        >
                                             Open
                                        </a>
                                   </Link>
                              </Td>
                         </Tr>
                         <Tr>
                              <Td>
                                   <Text>Offerings</Text>
                              </Td>
                              <Td>
                                   <Link href="schedule/offerings">
                                        <a
                                             style={{
                                                  textDecoration: 'underline'
                                             }}
                                        >
                                             Open
                                        </a>
                                   </Link>
                              </Td>
                         </Tr>
                         <Tr>
                              <Td>
                                   <Text>Personal</Text>
                              </Td>
                              <Td>
                                   <Link href="schedule/personal">
                                        <a
                                             style={{
                                                  textDecoration: 'underline'
                                             }}
                                        >
                                             Open
                                        </a>
                                   </Link>
                              </Td>
                         </Tr>
                    </Tbody>
               </Table>
          </Dashboard>
     );
};

export default schedule;
