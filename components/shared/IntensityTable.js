import {
     Box,
     Table,
     Thead,
     Tbody,
     Tfoot,
     Tr,
     Th,
     Td,
     TableCaption,
     Flex,
     Heading,
     chakra
} from '@chakra-ui/react';
import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';

const Star = ({ starNumber }) => {
     const remaingStart = 5 - starNumber;
     return (
          <Flex>
               {[...Array(starNumber)].map((e, i) => {
                    return (
                         <chakra.span mr={2}>
                              <IconContext.Provider
                                   value={{
                                        color: '#FFD700'
                                   }}
                              >
                                   {' '}
                                   <AiFillStar />
                              </IconContext.Provider>
                         </chakra.span>
                    );
               })}
               {[...Array(remaingStart)].map((e, i) => {
                    return (
                         <chakra.span mr={2}>
                              <IconContext.Provider
                                   value={{
                                        color: '#CCC'
                                   }}
                              >
                                   <AiFillStar />
                              </IconContext.Provider>
                         </chakra.span>
                    );
               })}
          </Flex>
     );
};

const IntensityTable = () => {
     return (
          <Flex
               margin="auto"
               padding={{ base: '2rem 0', md: '3rem 0', lg: '5rem 0' }}
               justifyContent="center"
               alignItems="center"
               width="100vw"
               bg="primaryWhite"
          >
               <Flex
                    justifyContent="center"
                    direction="column"
                    alignItems="center"
                    width={{ base: '95%', md: '90%', lg: '80%' }}
               >
                    <Heading
                         fontWeight="normal"
                         fontSize={{ base: '2xl', md: '3xl' }}
                    >
                         Schedule
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
                              <Thead>
                                   <Tr>
                                        <Th bg="aygreen.200">Class Name</Th>
                                        <Th bg="aygreen.200">
                                             Body Engagement
                                        </Th>
                                        <Th bg="aygreen.200">
                                             Mind Engagement
                                        </Th>
                                        <Th bg="aygreen.200">
                                             Breath Engagement
                                        </Th>
                                   </Tr>
                              </Thead>
                              <Tbody>
                                   <Tr>
                                        <Td bg="aygreen.100">
                                             Universal Harmony
                                        </Td>
                                        <Td>
                                             <Star starNumber={5} />
                                        </Td>
                                        <Td>
                                             <Star starNumber={5} />
                                        </Td>
                                        <Td>
                                             <Star starNumber={5} />
                                        </Td>
                                   </Tr>
                                   <Tr>
                                        <Td bg="aygreen.100">
                                             Transcending Transitions
                                        </Td>
                                        <Td>
                                             <Star starNumber={5} />
                                        </Td>
                                        <Td>
                                             <Star starNumber={2} />
                                        </Td>
                                        <Td>
                                             <Star starNumber={5} />
                                        </Td>
                                   </Tr>
                                   <Tr>
                                        <Td bg="aygreen.100">
                                             Rhythm of Being
                                        </Td>
                                        <Td>
                                             <Star starNumber={5} />
                                        </Td>
                                        <Td>
                                             <Star starNumber={2} />
                                        </Td>
                                        <Td>
                                             <Star starNumber={5} />
                                        </Td>
                                   </Tr>
                                   <Tr>
                                        <Td bg="aygreen.100">Deep Space </Td>
                                        <Td>
                                             <Star starNumber={2} />
                                        </Td>
                                        <Td>
                                             <Star starNumber={5} />
                                        </Td>
                                        <Td>
                                             <Star starNumber={5} />
                                        </Td>
                                   </Tr>
                                   <Tr>
                                        <Td bg="aygreen.100">Little Star</Td>
                                        <Td>
                                             <Star starNumber={3} />
                                        </Td>
                                        <Td>
                                             <Star starNumber={5} />
                                        </Td>
                                        <Td>
                                             <Star starNumber={3} />
                                        </Td>
                                   </Tr>
                                   <Tr>
                                        <Td bg="aygreen.100">Inner World</Td>
                                        <Td>
                                             <Star starNumber={2} />
                                        </Td>
                                        <Td>
                                             <Star starNumber={5} />
                                        </Td>
                                        <Td>
                                             <Star starNumber={4} />
                                        </Td>
                                   </Tr>
                              </Tbody>
                         </Table>
                    </Box>
               </Flex>
          </Flex>
     );
};

export default IntensityTable;
