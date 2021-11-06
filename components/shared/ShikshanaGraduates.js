import { Box, Flex, Grid, Heading } from '@chakra-ui/layout';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/table';
import React from 'react';

const ShikshanaGraduates = () => {
     const graduates = [
          { id: 1, reg_no: 'AY-YIC-003', name: 'Prabhu Anjali Satish' },
          { id: 2, reg_no: 'AY-YIC-004', name: 'Deepak M' },
          { id: 3, reg_no: 'AY-YIC-005', name: 'Sowmya S' },
          { id: 4, reg_no: 'AY-YIC-007', name: 'Spandhana Motupalli' },
          { id: 5, reg_no: 'AY-YIC-008', name: 'Kamaljeet Mehla' },
          { id: 6, reg_no: 'AY-YIC-009', name: 'Parshant Chahal' },
          { id: 7, reg_no: 'AY-YIC-010', name: 'Akhil S Nair' }
     ];
     return (
          <Grid placeItems="center">
               <Flex
                    margin="auto"
                    padding={{
                         base: '2rem',
                         md: '3rem 0',
                         lg: '3rem 0'
                    }}
                    justifyContent="space-evenly"
                    alignItems="start"
                    width="100vw"
                    direction={{ base: 'column', md: 'row', lg: 'row' }}
               >
                    <Flex
                         justifyContent="center"
                         direction="column"
                         alignItems="center"
                         width={{ base: '100%', md: '80%', lg: '80%' }}
                    >
                         <Heading
                              fontWeight="normal"
                              fontSize={{
                                   base: '1.5rem',
                                   md: '2rem',
                                   lg: '2rem'
                              }}
                              mb={10}
                         >
                              Graduates of RYT 200
                         </Heading>
                         <Box
                              overflowX="auto"
                              width="100%"
                              boxShadow="base"
                              rounded="lg"
                         >
                              <Table
                                   variant="simple"
                                   size="md"
                                   bg="white"
                                   colorScheme="aygreen"
                                   className="scheduleTable"
                              >
                                   <Thead bg="white">
                                        <Tr>
                                             <Th
                                                  width="5rem"
                                                  bg="secondaryGreen"
                                             >
                                                  SL No
                                             </Th>
                                             <Th width="md" bg="secondaryGreen">
                                                  Registration number
                                             </Th>
                                             <Th bg="secondaryGreen">Name</Th>
                                        </Tr>
                                   </Thead>
                                   <Tbody bg="white">
                                        {graduates.map((grads) => {
                                             return (
                                                  <Tr>
                                                       <Td bg="green.100">
                                                            {grads.id}
                                                       </Td>
                                                       <Td> {grads.reg_no}</Td>
                                                       <Td>{grads.name}</Td>
                                                  </Tr>
                                             );
                                        })}
                                   </Tbody>
                              </Table>
                         </Box>
                    </Flex>
               </Flex>
          </Grid>
     );
};

export default ShikshanaGraduates;
