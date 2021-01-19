import { Box, Flex, Image, forwardRef, Text, HStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { motion, isValidMotionProp, AnimatePresence } from 'framer-motion';

const sliderImages = [
     {
          image: 'https://via.placeholder.com/1920'
     },
     {
          image: 'https://via.placeholder.com/1921'
     },
     {
          image: 'https://via.placeholder.com/1922'
     },
     {
          image: 'https://via.placeholder.com/1923'
     }
];

function Hero() {
     const [current, setCurrent] = useState(0);
     const length = sliderImages.length;

     if (!Array.isArray(sliderImages) || sliderImages.length <= 0) {
          return null;
     }

     const nextSlide = () => {
          setCurrent(current === length - 1 ? 0 : current + 1);
     };

     const previousSlide = () => {
          setCurrent(current === 0 ? length - 1 : current - 1);
     };

     const MotionBox = motion.custom(
          forwardRef((props, ref) => {
               const chakraProps = Object.fromEntries(
                    // do not pass framer props to DOM element
                    Object.entries(props).filter(
                         ([key]) => !isValidMotionProp(key)
                    )
               );
               return <Box ref={ref} {...chakraProps} />;
          })
     );

     return (
          <Flex
               position="relative"
               height="100vh"
               justifyContent="center"
               alignItems="center"
          >
               <Box
                    onClick={previousSlide}
                    position="absolute"
                    top="50%"
                    left="10px"
                    color="black"
                    zIndex={2}
               >
                    <IoIosArrowBack size="3rem" cursor="pointer" />
               </Box>

               {sliderImages.map((slide, index) => {
                    return (
                         <>
                              {index === current && (
                                   <AnimatePresence key={index}>
                                        <MotionBox
                                             initial={{ opacity: 0, y: 0 }}
                                             animate={{ opacity: 1 }}
                                             exit={{ opacity: 0 }}
                                             transition={{ duration: 1 }}
                                             exit={{ opacity: 0 }}
                                             bgImage={`url(${slide.image})`}
                                             backgroundPosition="center"
                                             backgroundRepeat="no-repeat"
                                             height="100vh"
                                             width="100%"
                                        ></MotionBox>
                                   </AnimatePresence>
                              )}
                         </>
                    );
               })}
               <HStack position="absolute" bottom={5} zIndex={2}>
                    {sliderImages.map((slide, index) => {
                         return (
                              <Box
                                   height={4}
                                   width={4}
                                   background={
                                        index === current
                                             ? 'primaryGreen'
                                             : 'white'
                                   }
                                   rounded="full"
                              ></Box>
                         );
                    })}
               </HStack>

               <Box
                    onClick={nextSlide}
                    size={10}
                    position="absolute"
                    top="50%"
                    right="10px"
                    color="black"
                    zIndex={2}
               >
                    <IoIosArrowForward size="3rem" cursor="pointer" />
               </Box>
          </Flex>
     );
}

export default Hero;
