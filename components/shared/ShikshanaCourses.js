import { Box, Flex, Grid, Heading, Text } from '@chakra-ui/layout';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { MotionBox } from './MotionElements';
import { Button } from '@chakra-ui/button';
const ShikshanaCourses = () => {
     let easing = [0.175, 0.85, 0.42, 0.96];

     const textVariants = {
          exit: {
               y: -100,
               opacity: 0,
               transition: { duration: 0.5, ease: easing }
          },
          enter: {
               y: 0,
               opacity: 1,
               transition: { duration: 0.5, ease: easing }
          }
     };

     const courses = [
          {
               id: '1ATH',
               name: 'YIC - Yoga Instructor course',
               slug: 'yic-yoga-instructor-course',
               image: 'https://images.unsplash.com/photo-1624651208388-f8726eace8f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
          },
          {
               id: '2ATH',
               name: 'RYT - 200 courses',
               slug: 'ryt-200-course',
               image: 'https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80'
          },
          {
               id: '3ATH',
               name: 'Short courses',
               slug: 'short-course',
               image: 'https://images.unsplash.com/flagged/photo-1573556291531-a5d957d7e4e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          },
          {
               id: '4ATH',
               name: 'Special Events',
               slug: 'special-events',
               image: 'https://images.unsplash.com/photo-1597361767895-4c85305e54d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1182&q=80'
          },
          {
               id: '5ATH',
               name: 'Athayog Sadhana',
               slug: 'athayog-sadhana',
               image: 'https://images.unsplash.com/photo-1593810451410-8fbb422cc15e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80'
          }
     ];
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
               height="100%"
               bg="primaryWhite"
          >
               <Box
                    justifyContent="center"
                    direction="column"
                    alignItems="center"
               >
                    <Heading
                         fontWeight="normal"
                         textAlign="center"
                         fontSize={{
                              base: '1.5rem',
                              md: '2rem',
                              lg: '2rem'
                         }}
                    >
                         Shikshana Courses
                    </Heading>
                    <Grid
                         gridTemplateColumns="repeat(5,1fr)"
                         gridGap="5"
                         mt={10}
                    >
                         {courses.map(({ id, name, slug, desc, image }) => {
                              return (
                                   <Box
                                        maxW="sm"
                                        borderWidth="1px"
                                        borderRadius="lg"
                                        overflow="hidden"
                                        bg="white"
                                        boxShadow="sm"
                                   >
                                        <Box
                                             position="relative"
                                             height={{
                                                  base: '40vh',
                                                  md: '8rem',
                                                  lg: '10rem'
                                             }}
                                             cursor="pointer"
                                             width="18rem"
                                             min-height="200px"
                                             borderTopLeftRadius="lg"
                                             borderTopRadius="lg"
                                             overflow="hidden"
                                        >
                                             <Image
                                                  layout="fill"
                                                  objectFit="cover"
                                                  priority={true}
                                                  style={{
                                                       overflow: 'hidden'
                                                  }}
                                                  key="1"
                                                  className="object-center object-cover pointer-events-none"
                                                  src={image}
                                                  alt="space"
                                             />
                                        </Box>
                                        <Box padding={6}>
                                             <Text
                                                  fontWeight="medium"
                                                  as="h3"
                                                  fontSize="lg"
                                                  lineHeight="tight"
                                                  textAlign="center"
                                             >
                                                  {name}
                                             </Text>
                                             <Link
                                                  href={'shikshana/' + slug}
                                                  passHref
                                                  style={{ cursor: 'pointer' }}
                                             >
                                                  <a>
                                                       <Button
                                                            width="full"
                                                            size="sm"
                                                            mt="5"
                                                            colorScheme="aygreen"
                                                       >
                                                            Checkout
                                                       </Button>
                                                  </a>
                                             </Link>
                                        </Box>
                                   </Box>
                              );
                         })}
                    </Grid>
               </Box>
          </Flex>
     );
};

export default ShikshanaCourses;
