import {
     Box,
     Button,
     chakra,
     Divider,
     Flex,
     Heading,
     Link,
     Stack,
     Text
} from '@chakra-ui/react';
import { isValidMotionProp, motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { MotionBox } from '../shared/MotionElements';
import NavbarHelper from '../shared/NavbarHelper';

function Hero() {
     let easing = [0.175, 0.85, 0.42, 0.96];

     const textVariantsUp = {
          exit: {
               y: 100,
               opacity: 0,
               transition: { duration: 1, ease: easing }
          },
          enter: {
               y: 0,
               opacity: 1,
               transition: { duration: 1, ease: easing }
          }
     };

     const textVariantsDown = {
          exit: {
               y: -100,
               opacity: 0,
               transition: { duration: 1, ease: easing }
          },
          enter: {
               y: 0,
               opacity: 1,
               transition: { duration: 1, ease: easing }
          }
     };
     return (
          <>
               {' '}
               <NavbarHelper />
               <Flex
                    height={{ base: '100vh', md: '10   0vh' }}
                    justifyContent="center"
                    alignItems="center"
                    bgSize="cover"
                    bgPosition="center"
                    direction="column"
                    textColor="white"
                    position="relative"
                    background="linear-gradient(to bottom,rgba(0,0,0,0.3) 10%,rgba(0,0,0,1))"
               >
                    <Box zIndex={-1}>
                         <Image
                              src={
                                   'https://images.unsplash.com/photo-1520769945061-0a448c463865?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                              }
                              layout="fill"
                              objectFit="cover"
                              alt="hero"
                              // placeholder="blur"
                         />
                    </Box>

                    <Box
                         width={{ base: '100%', lg: 'container.lg' }}
                         position={{ base: 'relative' }}
                         textAlign="left"
                         p={{ base: '5', md: '10' }}
                    >
                         <Stack
                              spacing={5}
                              as={motion.div}
                              variants={textVariantsUp}
                              initial="exit"
                              animate="enter"
                              exit="exit"
                         >
                              <Heading
                                   fontSize={{
                                        base: '2xl',
                                        md: '3xl',
                                        lg: '5xl'
                                   }}
                                   fontWeight="normal"
                                   textColor="white"
                              >
                                   Free your mind, body and spirit at the <br />
                                   <chakra.span
                                        fontSize={{
                                             base: '2xl',
                                             md: '3xl',
                                             lg: '5xl'
                                        }}
                                        fontWeight="bold"
                                        textColor="white"
                                        textTransform="uppercase"
                                   >
                                        Mindful Nature Retreat
                                   </chakra.span>
                              </Heading>

                              <Text textColor="gray.300" fontSize="lg">
                                   Only limited spots available
                              </Text>
                              <Link
                                   passHref
                                   href="https://rzp.io/l/tDvi8Ww9z"
                                   target="_blank"
                              >
                                   {' '}
                                   <Button
                                        colorScheme="yellow"
                                        variant="outline"
                                        rounded="none"
                                        maxW={{
                                             base: 'full',
                                             md: 'max-content'
                                        }}
                                   >
                                        Register Now
                                   </Button>
                              </Link>
                         </Stack>

                         <Divider mt={10} mb={5} />
                         <Flex
                              justifyContent="flex-start"
                              gap={{ base: 5, md: 10 }}
                              alignItems="center"
                              fontSize={{ base: 'md', md: 'lg' }}
                              as={motion.div}
                              variants={textVariantsDown}
                              initial="exit"
                              animate="enter"
                              exit="exit"
                         >
                              <Box textAlign="left">
                                   <Text textColor="gray.400">Dates</Text>
                                   <Box>May 14th, 6 am - May 15th 7 pm</Box>
                              </Box>
                              <Box textAlign="left">
                                   <Text textColor="gray.400">Location</Text>
                                   <Text>
                                        Fig & Lily, Kanakapura, Bangalore
                                   </Text>
                              </Box>
                         </Flex>
                    </Box>
               </Flex>
          </>
     );
}

export default Hero;
