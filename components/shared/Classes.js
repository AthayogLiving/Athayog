import { Box, Flex, Grid, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import { capitalizeFirstLetter } from '@/components/helper/Capitalize';
import { motion } from 'framer-motion';

const Classes = ({ classes }) => {
     return (
          <Flex
               margin="auto"
               padding="5rem 0"
               justifyContent="center"
               alignItems="center"
               width="100vw"
               bg="white"
          >
               <Flex
                    justifyContent="center"
                    direction="column"
                    alignItems="center"
                    width="80vw"
               >
                    <motion.h1
                         initial={{ scale: 0.8, opacity: 0 }}
                         animate={{ scale: 1, opacity: 1 }}
                         layoutId="title"
                    >
                         <Heading fontWeight="normal">Classes</Heading>
                    </motion.h1>

                    <SimpleGrid
                         minChildWidth="400px"
                         spacing="20px"
                         width="100%"
                         mt={10}
                    >
                         {classes.map((data, index) => {
                              return (
                                   <Box
                                        bg={
                                             index % 2 == 0
                                                  ? 'aygreen.100'
                                                  : 'aygreen.200'
                                        }
                                        height="auto"
                                        rounded="lg"
                                        padding={10}
                                        textAlign="center"
                                        key={index}
                                   >
                                        <Heading
                                             fontSize="3xl"
                                             fontWeight="normal"
                                        >
                                             {capitalizeFirstLetter(
                                                  data.className
                                             )}
                                        </Heading>

                                        {data.classInfo.split('\n').map((i) => {
                                             return (
                                                  <Text
                                                       mt={5}
                                                       fontWeight="light"
                                                       textAlign="justify"
                                                       whiteSpace="pre-wrap"
                                                  >
                                                       {i}{' '}
                                                  </Text>
                                             );
                                        })}
                                   </Box>
                              );
                         })}
                    </SimpleGrid>
               </Flex>
          </Flex>
     );
};

export default Classes;
