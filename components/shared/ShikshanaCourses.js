import { Box, Flex, Grid, Heading, Text } from '@chakra-ui/layout';
import Link from 'next/link';
import { Image } from '@chakra-ui/image';
import React from 'react';
import { Button } from '@chakra-ui/button';
import sy1 from 'public/sy1.jpg';
import sy2 from 'public/sy2.jpg';
import mandala from 'public/mandala.svg';
import imageOne from 'public/athayog_2021_6.jpg';
import imageTwo from 'public/athayog_2021_2.jpg';
import imageThree from 'public/athayog_2021_3.jpg';
import imageFour from 'public/athayog_2021_4.jpg';
import imageFive from 'public/athayog_2021_5.jpg';
import imageSix from 'public/athayog_2021_6.jpg';
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
               image: imageOne
          },
          {
               id: '2ATH',
               name: 'RYT - 200 courses',
               slug: 'ryt-200-course',
               image: imageTwo
          },
          {
               id: '3ATH',
               name: 'Short courses',
               slug: 'short-course',
               image: imageThree
          },
          {
               id: '4ATH',
               name: 'Special Events',
               slug: 'special-events',
               image: imageFour
          },
          {
               id: '5ATH',
               name: 'Athayog Sadhana',
               slug: 'athayog-sadhana',
               image: imageFive
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
                                        rounded="lg"
                                        overflow="hidden"
                                        bg="white"
                                        boxShadow="sm"
                                        height="100%"
                                        width="100%"
                                   >
                                        <Box position="relative">
                                             <Image
                                                  layout="fill"
                                                  objectFit="contain"
                                                  priority={true}
                                                  width="100%"
                                                  style={{
                                                       overflow: 'hidden'
                                                  }}
                                                  key="1"
                                                  className="object-center object-cover pointer-events-none"
                                                  src={image}
                                                  alt="space"
                                             />
                                             <Heading
                                                  textAlign="center"
                                                  fontSize="1.2rem"
                                                  fontWeight="bold"
                                                  position="absolute"
                                             >
                                                  {name}
                                             </Heading>
                                        </Box>

                                        <Flex
                                             p={6}
                                             justifyContent="space-between"
                                             alignItems="stretch"
                                        >
                                             <Link
                                                  href={'shikshana/' + slug}
                                                  passHref
                                                  style={{ cursor: 'pointer' }}
                                             >
                                                  <a>
                                                       <Button
                                                            width="full"
                                                            variant="solid"
                                                            colorScheme="aygreen"
                                                       >
                                                            Checkout
                                                       </Button>
                                                  </a>
                                             </Link>
                                        </Flex>
                                   </Box>
                              );
                         })}
                    </Grid>
               </Box>
          </Flex>
     );
};

export default ShikshanaCourses;
