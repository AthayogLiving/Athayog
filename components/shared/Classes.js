import {
     Box,
     Flex,
     Grid,
     Heading,
     List,
     ListItem,
     OrderedList,
     SimpleGrid,
     Text,
     UnorderedList
} from '@chakra-ui/react';
import React from 'react';
import { capitalizeFirstLetter } from '@/components/helper/Capitalize';
import { motion } from 'framer-motion';
import { MotionBox, MotionText } from '@/components/shared/MotionElements';

const Classes = ({ classes }) => {
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
               width="100%"
               bg="white"
          >
               <Flex
                    justifyContent="center"
                    direction="column"
                    alignItems="center"
                    width={{ base: '90%', md: '85%', lg: '80%' }}
               >
                    <motion.h1
                         initial={{ scale: 0.8, opacity: 0 }}
                         animate={{ scale: 1, opacity: 1 }}
                         layoutId="title"
                    >
                         <MotionText
                              cursor="pointer"
                              fontWeight="normal"
                              fontSize={{
                                   base: '3xl',
                                   md: '4xl',
                                   lg: '4xl'
                              }}
                         >
                              Classes
                         </MotionText>
                    </motion.h1>

                    <SimpleGrid
                         minChildWidth={{
                              base: '250px',
                              md: '400px',
                              lg: '400px'
                         }}
                         spacing="20px"
                         width="100%"
                         mt={10}
                    >
                         {classes.map((data, index) => {
                              return (
                                   <Flex
                                        direction="column"
                                        justifyContent="flex-start"
                                        bg={
                                             index % 2 == 0
                                                  ? 'aygreen.100'
                                                  : 'aygreen.200'
                                        }
                                        height="auto"
                                        rounded="lg"
                                        padding={{
                                             base: '6',
                                             md: '8',
                                             lg: '10'
                                        }}
                                        cursor="pointer"
                                        boxShadow="base"
                                        textAlign="center"
                                        key={index}
                                   >
                                        <Box>
                                             {' '}
                                             <Text
                                                  fontSize={{
                                                       base: 'xl',
                                                       md: '2xl',
                                                       lg: '2xl'
                                                  }}
                                                  fontWeight="normal"
                                             >
                                                  {capitalizeFirstLetter(
                                                       data.className
                                                  )}
                                             </Text>
                                             {data.classInfo
                                                  .split('\n')
                                                  .map((i, index) => {
                                                       return (
                                                            <Text
                                                                 mt={5}
                                                                 fontWeight="light"
                                                                 textAlign="justify"
                                                                 whiteSpace="pre-wrap"
                                                                 key={index}
                                                                 fontSize={{
                                                                      base: 'base',
                                                                      md: 'md',
                                                                      lg: 'lg'
                                                                 }}
                                                            >
                                                                 {i}{' '}
                                                            </Text>
                                                       );
                                                  })}
                                        </Box>

                                        {data.structure && (
                                             <Box>
                                                  <Text
                                                       textAlign=" left"
                                                       mt={5}
                                                       textTransform="uppercase"
                                                  >
                                                       Class structure
                                                  </Text>
                                                  <UnorderedList
                                                       textAlign="left"
                                                       mt={2}
                                                  >
                                                       {data.structure?.map(
                                                            (i, idx) => {
                                                                 return (
                                                                      <ListItem
                                                                           fontWeight="light"
                                                                           key={
                                                                                idx
                                                                           }
                                                                      >
                                                                           {i}
                                                                      </ListItem>
                                                                 );
                                                            }
                                                       )}
                                                  </UnorderedList>
                                             </Box>
                                        )}
                                   </Flex>
                              );
                         })}
                    </SimpleGrid>
               </Flex>
          </Flex>
     );
};

export default Classes;
