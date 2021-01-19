import { Box, Flex, forwardRef, Text, HStack, Spinner } from '@chakra-ui/react';
import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { motion, isValidMotionProp, AnimatePresence } from 'framer-motion';
import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import defaultCarousel from '../../public/defaultCarousel.png';

const Hero = () => {
     const { data, error } = useSWR(`/api/images/carousel`, fetcher);
     const [current, setCurrent] = useState(0);

     if (error)
          return (
               <Box
                    bgImage={`linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,0.5)),url(${defaultCarousel})`}
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                    height="100vh"
                    width="100%"
               ></Box>
          );

     if (!data) {
          return (
               <Box
                    bgImage={`linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,0.5)),url(${defaultCarousel})`}
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                    height="100vh"
                    width="100%"
               ></Box>
          );
     }

     if (data.images.length <= 0) {
          return (
               <Box
                    bgImage={`linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,0.5)),url(${defaultCarousel})`}
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                    height="100vh"
                    width="100%"
               ></Box>
          );
     }

     const length = data.images.length;

     if (!Array.isArray(data.images) || data.images.length <= 0) {
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
                    onClick={() => previousSlide()}
                    position="absolute"
                    top="50%"
                    bg="primaryWhite"
                    left="50px"
                    color="black"
                    rounded="full"
                    padding={1}
                    zIndex={2}
               >
                    <IoIosArrowBack size="1.2rem" cursor="pointer" />
               </Box>

               {data.images.map((slide, index) => {
                    return (
                         <>
                              {index === current && (
                                   <AnimatePresence key={slide.id}>
                                        <MotionBox
                                             initial={{ opacity: 0 }}
                                             animate={{ opacity: 1 }}
                                             exit={{ opacity: 0 }}
                                             bgImage={`linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,0.5)),url(${slide.imageUrl})`}
                                             backgroundPosition="center"
                                             backgroundRepeat="no-repeat"
                                             backgroundSize="cover"
                                             height="100vh"
                                             width="100%"
                                        ></MotionBox>
                                   </AnimatePresence>
                              )}
                         </>
                    );
               })}
               <HStack position="absolute" bottom={5} zIndex={2}>
                    {data.images.map((slide, index) => {
                         return (
                              <Box
                                   height={4}
                                   width={4}
                                   key={index}
                                   background={
                                        index === current
                                             ? 'white'
                                             : 'primaryGray'
                                   }
                                   onClick={() => setCurrent(index)}
                                   rounded="full"
                                   cursor="pointer"
                              ></Box>
                         );
                    })}
               </HStack>

               <Box
                    onClick={() => nextSlide()}
                    position="absolute"
                    top="50%"
                    right="50px"
                    background="rgba(255,255,255,0.5)"
                    rounded="full"
                    color="black"
                    padding={1}
                    zIndex={2}
               >
                    <IoIosArrowForward size="1.5rem" cursor="pointer" />
               </Box>
          </Flex>
     );
};

export default Hero;
