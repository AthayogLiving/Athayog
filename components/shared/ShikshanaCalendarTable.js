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

function ShikshanaCalendarTable({ calendar }) {
     return (
          <Box mt={10}>
               {calendar.map(({ name, data }) => {
                    return (
                         <Flex
                              margin="auto"
                              justifyContent="start"
                              mb={10}
                              alignItems="center"
                              bg="white"
                         >
                              <Flex
                                   justifyContent="flex-start"
                                   direction="column"
                                   alignItems="center"
                              >
                                   <Stack spacing={5}>
                                        <Heading
                                             fontWeight="medium"
                                             fontSize="1.3rem"
                                             textTransform="uppercase"
                                             textDecoration="underline"
                                        >
                                             {name} Calendar 2022
                                        </Heading>
                                        {data.map(
                                             ({
                                                  time,
                                                  months,
                                                  courseName,
                                                  details
                                             }) => {
                                                  return (
                                                       <Box
                                                            overflowX="auto"
                                                            boxShadow="sm"
                                                            rounded="sm"
                                                       >
                                                            <Table
                                                                 bg="white"
                                                                 borderWidth="1px"
                                                            >
                                                                 <Thead>
                                                                      <Tr bg="gray.200">
                                                                           {time && (
                                                                                <Th>
                                                                                     Time
                                                                                </Th>
                                                                           )}
                                                                           {courseName && (
                                                                                <Th>
                                                                                     Course
                                                                                     Name
                                                                                </Th>
                                                                           )}
                                                                           {months.map(
                                                                                (
                                                                                     month
                                                                                ) => {
                                                                                     return (
                                                                                          <Th>
                                                                                               {
                                                                                                    month
                                                                                               }
                                                                                          </Th>
                                                                                     );
                                                                                }
                                                                           )}
                                                                      </Tr>
                                                                 </Thead>
                                                                 <Tbody>
                                                                      <Tr>
                                                                           {time && (
                                                                                <Th>
                                                                                     <Text
                                                                                          textColor="black"
                                                                                          fontSize="1rem"
                                                                                          fontWeight="normal"
                                                                                     >
                                                                                          {
                                                                                               time
                                                                                          }
                                                                                     </Text>
                                                                                </Th>
                                                                           )}
                                                                           {courseName && (
                                                                                <Th>
                                                                                     <Text
                                                                                          textColor="black"
                                                                                          fontSize="1rem"
                                                                                          fontWeight="normal"
                                                                                          textTransform="capitalize"
                                                                                     >
                                                                                          {
                                                                                               courseName
                                                                                          }
                                                                                     </Text>
                                                                                </Th>
                                                                           )}
                                                                           {details.map(
                                                                                ({
                                                                                     name,
                                                                                     date
                                                                                }) => {
                                                                                     return (
                                                                                          <Td>
                                                                                               <Box>
                                                                                                    {name && (
                                                                                                         <Text fontWeight="bold">
                                                                                                              {
                                                                                                                   name
                                                                                                              }
                                                                                                         </Text>
                                                                                                    )}
                                                                                                    <Text
                                                                                                         fontWeight="normal"
                                                                                                         textColor="gray.600"
                                                                                                    >
                                                                                                         {
                                                                                                              date
                                                                                                         }
                                                                                                    </Text>
                                                                                               </Box>
                                                                                          </Td>
                                                                                     );
                                                                                }
                                                                           )}
                                                                      </Tr>
                                                                 </Tbody>
                                                            </Table>
                                                       </Box>
                                                  );
                                             }
                                        )}
                                   </Stack>
                              </Flex>
                         </Flex>
                    );
               })}
          </Box>
     );
}

export default ShikshanaCalendarTable;
