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

const Information = (props) => {
     const { name, whatis, secondBlock, description } = props.pageData;
     return (
          <Flex
               margin="auto"
               padding={{
                    base: '2rem 0',
                    md: '3rem 0',
                    lg: '5rem 0'
               }}
               justifyContent="center"
               alignItems="center"
               width="100vw"
               bg="primaryWhite"
          >
               <Flex
                    justifyContent="center"
                    direction="column"
                    alignItems="center"
                    width="80vw"
               >
                    <>
                         <Heading
                              fontWeight="normal"
                              fontSize={{
                                   base: '1.5rem',
                                   md: '2rem',
                                   lg: '2.5rem'
                              }}
                         >
                              What is AthaYog {name}
                         </Heading>
                         <Flex
                              padding={{
                                   base: '1rem 0',
                                   md: '1rem 0',
                                   lg: '2rem 0'
                              }}
                              justifyContent="space-between"
                         >
                              <Box>
                                   <Text
                                        fontWeight="light"
                                        textAlign="left"
                                        fontSize={{
                                             base: '1rem',
                                             md: '1rem',
                                             lg: '1.2rem'
                                        }}
                                   >
                                        {whatis}
                                   </Text>
                              </Box>
                         </Flex>
                    </>
               </Flex>
          </Flex>
     );
};

export default Information;
