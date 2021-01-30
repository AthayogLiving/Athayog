import Image from 'next/image';
import React from 'react';

import {
     Box,
     Divider,
     Flex,
     Heading,
     Skeleton,
     Text,
     forwardRef
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { motion, isValidMotionProp } from 'framer-motion';
import { MotionBox } from './MotionElements';

let easing = [0.175, 0.85, 0.42, 0.96];

const textVariants = {
     exit: { y: -100, opacity: 0, transition: { duration: 0.5, ease: easing } },
     enter: {
          y: 0,
          opacity: 1,
          transition: { delay: 0.1, duration: 0.5, ease: easing }
     }
};

const Hero = (props) => {
     const { name, heroImage } = props.pageData;

     if (!heroImage) {
          return <Skeleton height="100vh"></Skeleton>;
     }

     return (
          <Flex
               position="relative"
               height="100vh"
               justifyContent="center"
               alignItems="center"
          >
               <Box
                    height="100%"
                    bg="linear-gradient(to bottom, rgba(0,0,0,0) 50%,rgba(0,0,0,0.5) 100%)"
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
                    <Heading fontSize="5xl" color="white" fontWeight="medium">
                         <Text d="inline-block" mr={4} fontWeight="light">
                              ATHAYOG
                         </Text>
                         {name.toUpperCase()}
                    </Heading>
                    <Divider
                         width="80%"
                         m="auto"
                         height="2px"
                         mt={3}
                         bg="#fff"
                         border="none"
                    />
                    <ChevronDownIcon
                         color="white"
                         fontSize="3rem"
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
     );
};

export default Hero;
