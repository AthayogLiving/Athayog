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
     const { name, whatis } = props.pageData;
     return (
          <Flex
               margin="auto"
               padding="5rem 0"
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
               </Flex>
          </Flex>
     );
};

export default Information;
