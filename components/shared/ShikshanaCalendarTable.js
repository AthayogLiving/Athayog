import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/table';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

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
                              key={uuidv4()}
                         >
                              <Box width="100%">
                                   <Heading
                                        fontWeight="medium"
                                        fontSize="1.3rem"
                                        textTransform="uppercase"
                                        textDecoration="underline"
                                        textAlign="left"
                                        mb={5}
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
                                                       mb={5}
                                                       minWidth="min-content"
                                                       key={uuidv4()}
                                                  >
                                                       <Table
                                                            bg="white"
                                                            borderWidth="1px"
                                                            width="min-content"
                                                            boxShadow="sm"
                                                            rounded="sm"
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
                                                                                     <Th
                                                                                          key={uuidv4()}
                                                                                     >
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
                                                                                     width="max-content"
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
                                                                                     width="200px"
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
                                                                                     <Td
                                                                                          key={uuidv4()}
                                                                                     >
                                                                                          <Box width="max-content">
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
                              </Box>
                         </Flex>
                    );
               })}
          </Box>
     );
}

export default ShikshanaCalendarTable;
