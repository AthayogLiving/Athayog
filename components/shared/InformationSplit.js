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
               padding="5rem 0"
               justifyContent="space-evenly"
               alignItems="start"
               width="100vw"
               bg="primaryWhite"
               direction="row"
          >
               <Flex
                    justifyContent="center"
                    direction="column"
                    alignItems="center"
                    width="40%"
               >
                    <>
                         <Heading fontWeight="normal">
                              What is AthaYog {name}
                         </Heading>
                         <Flex padding="2rem 0" justifyContent="space-between">
                              <Box>
                                   <Text fontWeight="light" textAlign="left">
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
                    width="40%"
               >
                    <>
                         <Heading fontWeight="normal">{secondBlock}</Heading>
                         <Flex padding="2rem 0" justifyContent="space-between">
                              <Box>
                                   <Text fontWeight="light" textAlign="left">
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
