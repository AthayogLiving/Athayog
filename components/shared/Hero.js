import Image from 'next/image';
import React from 'react';

import { Box, Divider, Flex, Heading, Skeleton, Text } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

import { MotionBox } from './MotionElements';
import NavbarHelper from './NavbarHelper';

let easing = [0.175, 0.85, 0.42, 0.96];

const textVariants = {
     exit: { y: -100, opacity: 0, transition: { duration: 0.5, ease: easing } },
     enter: {
          y: 0,
          opacity: 1,
          transition: { duration: 0.5, ease: easing }
     }
};

const Hero = (props) => {
     const { name, heroImage, whatis } = props.pageData;

     if (!heroImage) {
          return <Skeleton height="100vh"></Skeleton>;
     }

     return (
          <>
               <NavbarHelper />
               <Flex
                    position="relative"
                    height={{ base: '40vh', md: '95vh', lg: '95vh' }}
                    min-height="300px"
                    justifyContent="center"
                    alignItems="center"
               >
                    <Box
                         height="100%"
                         bg={{
                              sm:
                                   'linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.8) 100%)',
                              base:
                                   'linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.8) 100%)',
                              md:
                                   'linear-gradient(to bottom, rgba(0,0,0,0) 50%,rgba(0,0,0,0.8) 100%)'
                         }}
                         width="100%"
                         zIndex={1}
                    ></Box>
                    <MotionBox
                         zIndex={2}
                         position="absolute"
                         bottom="5%"
                         variants={textVariants}
                         initial="exit"
                         animate="enter"
                         exit="exit"
                    >
                         <Heading
                              fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }}
                              color="white"
                              fontWeight="medium"
                              textAlign="center"
                         >
                              <Text d="inline-block" mr={4} fontWeight="light">
                                   ATHAYOG
                              </Text>
                              {name.toUpperCase()}
                         </Heading>
                         <Text
                              textColor="white"
                              maxW="5xl"
                              textAlign="center"
                              mt={3}
                         >
                              {whatis}
                         </Text>
                         <Divider
                              width="50%"
                              m="auto"
                              height="2px"
                              mt={{ base: '1', md: '2', lg: '5' }}
                              bg="#fff"
                              border="none"
                         />
                         <ChevronDownIcon
                              color="white"
                              fontSize={{
                                   base: '1.5rem',
                                   md: '2rem',
                                   lg: '3rem'
                              }}
                              margin="1rem auto 0 auto"
                              width="100%"
                         />
                    </MotionBox>

                    <Image
                         layout="fill"
                         objectFit="cover"
                         priority={true}
                         key="1"
                         className="object-center object-cover pointer-events-none"
                         src={heroImage}
                         alt="space"
                    />
               </Flex>
          </>
     );
};

export default Hero;
