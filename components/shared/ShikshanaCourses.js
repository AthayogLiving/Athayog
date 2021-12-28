import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Box, Flex, Grid, Heading } from '@chakra-ui/layout';
import Link from 'next/link';
import s2 from 'public/shi_2-min.jpg';
import s6 from 'public/shi_6-min.jpg';
import React from 'react';

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
               image: s6
          },
          {
               id: '2ATH',
               name: 'RYT - 200 courses',
               slug: 'ryt-200-course',
               image: s2
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
                         Shikshana Pada
                    </Heading>
                    <Grid
                         gridTemplateColumns="repeat(auto-fit, minmax(230px, 300px))"
                         gridGap="10"
                         width="100%"
                         mt={10}
                         alignItems="center"
                         justifyContent="center"
                         padding="0 2rem"
                    >
                         {courses.map(({ id, name, slug, desc, image }) => {
                              return (
                                   <Box
                                        borderWidth="1px"
                                        borderRadius="lg"
                                        overflow="hidden"
                                        bg="white"
                                        boxShadow="sm"
                                        key={id}
                                   >
                                        <Image
                                             layout="instrinsic"
                                             priority={true}
                                             height="100%"
                                             width="100%"
                                             style={{
                                                  overflow: 'hidden'
                                             }}
                                             key="1"
                                             src={image}
                                             alt="space"
                                        />

                                        <Box position="relative">
                                             <Heading
                                                  textAlign="center"
                                                  as="h5"
                                                  size="sm"
                                                  width="100%"
                                                  borderBottom="1px"
                                                  borderColor="gray.200"
                                                  fontWeight="medium"
                                                  bg="gray.50"
                                                  padding="3"
                                             >
                                                  {name}
                                             </Heading>
                                             <Box padding="5">
                                                  <Link
                                                       href={
                                                            'shikshana/' + slug
                                                       }
                                                       scroll={true}
                                                       passHref
                                                       style={{
                                                            cursor: 'pointer'
                                                       }}
                                                  >
                                                       <a>
                                                            <Button
                                                                 width="full"
                                                                 size="sm"
                                                                 variant="solid"
                                                                 colorScheme="aygreen"
                                                            >
                                                                 Checkout
                                                            </Button>
                                                       </a>
                                                  </Link>
                                             </Box>
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
