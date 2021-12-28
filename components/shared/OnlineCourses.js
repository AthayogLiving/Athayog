import { chakra, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';

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
                                        Children&apos;s Yoga Course
                                   </chakra.span>{' '}
                              </Text>
                         </Stack>
                    </Flex>
               </Flex>
          </Flex>
     );
};

export default OnlineCourses;
