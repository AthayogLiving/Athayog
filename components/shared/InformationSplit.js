import {
     Box,
     Center,
     Flex,
     Heading,
     List,
     ListIcon,
     ListItem,
     OrderedList,
     Text,
     UnorderedList
} from '@chakra-ui/react';
import React from 'react';
import { IoMdCheckmarkCircle } from 'react-icons/io';

const InformationSplit = (props) => {
     const { name, whatis, secondBlock, description } = props.pageData;
     return (
          <Flex
               margin="auto"
               padding={{
                    base: '2rem',
                    md: '3rem 0',
                    lg: '5rem 0'
               }}
               justifyContent="space-evenly"
               alignItems="start"
               width="100vw"
               bg="primaryWhite"
               direction={{ base: 'column', md: 'row', lg: 'row' }}
          >
               <Flex
                    justifyContent="center"
                    alignItems="center"
                    width={{ base: '100%', md: '40%', lg: '40%' }}
                    direction="column"
               >
                    <>
                         <Heading
                              fontWeight="normal"
                              textAlign="center"
                              fontSize={{
                                   base: '1.5rem',
                                   md: '2rem',
                                   lg: '2rem'
                              }}
                         >
                              What is AthaYog {name}
                         </Heading>
                         <Flex padding="2rem 0" justifyContent="space-between">
                              <Box>
                                   <Text
                                        fontWeight="light"
                                        fontSize={{
                                             base: '1rem',
                                             md: '1rem',
                                             lg: '1rem'
                                        }}
                                        textAlign={{
                                             base: 'center',
                                             md: 'left'
                                        }}
                                   >
                                        {whatis}
                                   </Text>
                              </Box>
                         </Flex>
                    </>
               </Flex>
               <Flex
                    justifyContent="center"
                    direction="column"
                    alignItems="center"
                    width={{ base: '100%', md: '40%', lg: '40%' }}
               >
                    <>
                         <Heading
                              fontWeight="normal"
                              textAlign="center"
                              fontSize={{
                                   base: '1.5rem',
                                   md: '2rem',
                                   lg: '2rem'
                              }}
                         >
                              {secondBlock}
                         </Heading>
                         <Flex padding="2rem 0" justifyContent="space-between">
                              <Box>
                                   <Text
                                        fontWeight="light"
                                        fontSize={{
                                             base: '1rem',
                                             md: '1rem',
                                             lg: '1rem'
                                        }}
                                        textAlign={{
                                             base: 'center',
                                             md: 'left'
                                        }}
                                   >
                                        {description}
                                   </Text>
                              </Box>
                         </Flex>
                    </>
               </Flex>
          </Flex>
     );
};

export default InformationSplit;
