import React from 'react';

import {
     Box,
     Center,
     chakra,
     Flex,
     Heading,
     HStack,
     List,
     ListIcon,
     ListItem,
     OrderedList,
     Stack,
     Text,
     UnorderedList
} from '@chakra-ui/react';
const OnlineCourses = () => {
     return (
          <Flex
               margin="auto"
               padding={{
                    base: '2rem 0',
                    md: '3rem 0',
                    lg: '3rem 0'
               }}
               justifyContent="center"
               alignItems="center"
               width="100vw"
               bg="primaryWhite"
          >
               <Flex
                    justifyContent="center"
                    direction="column"
                    alignItems="flex-start"
                    width="80vw"
               >
                    <Heading
                         fontWeight="normal"
                         fontSize={{
                              base: '1.5rem',
                              md: '2rem',
                              lg: '2rem'
                         }}
                    >
                         Courses
                    </Heading>
                    <Flex
                         padding={{
                              base: '1rem 0',
                              md: '1rem 0',
                              lg: '2rem 0'
                         }}
                         justifyContent="space-between"
                         direction="column"
                    >
                         <Stack spacing={2}>
                              <Text
                                   fontWeight="light"
                                   textAlign="left"
                                   fontSize={{
                                        base: '1rem',
                                        md: '1rem',
                                        lg: '1.2rem'
                                   }}
                              >
                                   <chakra.span fontWeight="medium">
                                        1. Children's Yoga Course
                                   </chakra.span>{' '}
                              </Text>
                              <Text textColor="gray.600">
                                   Yoga helps children in numerous ways. It is
                                   known to strengthen bodies, improve
                                   flexibility and even reduce injury. Children
                                   tend to have a more disciplined lifestyle
                                   with reduced impulsivity. Yoga improves
                                   focus, memory, self-esteem, performance and
                                   classroom behaviour in the lives of young
                                   ones and assists them in having a calmer
                                   approach to their everyday life. Athayog
                                   offers an online Children’s Yoga Course for
                                   the age group of 6-14 years. The course is
                                   exhilarating and interactive with convenient
                                   language to understand. It will include
                                   asanas, pranayama, yoga games and a few
                                   sessions of dance as well.
                              </Text>
                         </Stack>
                    </Flex>
               </Flex>
          </Flex>
     );
};

export default OnlineCourses;
