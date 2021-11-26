import { Box, Flex, Grid, Heading, Text } from '@chakra-ui/layout';
import Link from 'next/link';
import { Image } from '@chakra-ui/image';
import React from 'react';
import { MotionBox } from './MotionElements';
import { Button } from '@chakra-ui/button';
import sy1 from 'public/sy1.jpg';
import sy2 from 'public/sy2.jpg';
import mandala from 'public/mandala.svg';
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
               image: sy1
          },
          {
               id: '2ATH',
               name: 'RYT - 200 courses',
               slug: 'ryt-200-course',
               image: sy2
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
                    lg: '3rem '
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
                    width={['100%', '80vw']}
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
                         gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
                         gridGap="5"
                         width="100%"
                         mt={10}
                         alignItems="center"
                         justifyContent="strech"
                    >
                         {courses.map(({ id, name, slug, desc, image }) => {
                              return (
                                   <Box
                                        borderWidth="1px"
                                        borderRadius="lg"
                                        overflow="hidden"
                                        bg="white"
                                        boxShadow="sm"
                                        padding={6}
                                        height="100%"
                                        width="100%"
                                   >
                                        <Heading
                                             textAlign="center"
                                             fontSize="1.3rem"
                                        >
                                             {name}
                                        </Heading>
                                        <Image
                                             mt={6}
                                             layout="fill"
                                             objectFit="contain"
                                             priority={true}
                                             height="8rem"
                                             width="100%"
                                             style={{
                                                  overflow: 'hidden'
                                             }}
                                             key="1"
                                             className="object-center object-cover pointer-events-none"
                                             src={mandala}
                                             alt="space"
                                        />

                                        <Box mt={3}>
                                             <Link
                                                  href={'shikshana/' + slug}
                                                  passHref
                                                  style={{ cursor: 'pointer' }}
                                             >
                                                  <a>
                                                       <Button
                                                            width="full"
                                                            mt="5"
                                                            variant="solid"
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
