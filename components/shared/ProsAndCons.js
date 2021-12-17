import {
     Box,
     Divider,
     Flex,
     Heading,
     StackDivider,
     Text,
     VStack
} from '@chakra-ui/layout';
import { chakra } from '@chakra-ui/system';
import React from 'react';

const ProsAndCons = ({ data, name }) => {
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
                         Pros & Cons
                    </Heading>
                    <Box
                         mt={10}
                         boxShadow="base"
                         bg="white"
                         borderWidth="1px"
                         rounded="base"
                         width="100%"
                    >
                         <Flex
                              padding={3}
                              justifyContent="space-around"
                              fontWeight="bold"
                              textTransform="uppercase"
                         >
                              <Text textColor="aygreen.400">Pros</Text>
                              <Text textColor="red.400">Cons</Text>
                         </Flex>
                         <Divider />
                         <Flex justifyContent="space-around">
                              <VStack
                                   divider={
                                        <StackDivider borderColor="gray.200" />
                                   }
                                   spacing={3}
                                   align="stretch"
                                   width="100%"
                                   bg="aygreen.50"
                                   py={3}
                              >
                                   {data[0].map((listItems, idx) => {
                                        return (
                                             <Box
                                                  ml={5}
                                                  minH={{
                                                       base: '6rem',
                                                       md: '1rem',
                                                       lg: '1rem'
                                                  }}
                                             >
                                                  {' '}
                                                  <chakra.span mr={1}>
                                                       {idx + 1}.{' '}
                                                  </chakra.span>
                                                  {listItems}
                                             </Box>
                                        );
                                   })}
                              </VStack>
                              <VStack
                                   divider={
                                        <StackDivider borderColor="gray.200" />
                                   }
                                   spacing={3}
                                   align="stretch"
                                   width="100%"
                                   bg="red.50"
                                   py={3}
                              >
                                   {data[1].map((listItems, idx) => {
                                        return (
                                             <Box
                                                  ml={5}
                                                  minH={{
                                                       base: '6rem',
                                                       md: '1rem',
                                                       lg: '1rem'
                                                  }}
                                             >
                                                  <chakra.span mr={1}>
                                                       {idx + 1}.{' '}
                                                  </chakra.span>
                                                  {listItems}
                                             </Box>
                                        );
                                   })}
                              </VStack>
                         </Flex>
                    </Box>
               </Flex>
          </Flex>
     );
};

export default ProsAndCons;
