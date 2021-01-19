import { Box, Flex, Image } from '@chakra-ui/react';
import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

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
     console.log(current);
     const previousSlide = () => {
          setCurrent(current === 0 ? length - 1 : current - 1);
     };

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
               >
                    <IoIosArrowBack size="3rem" cursor="pointer" />
               </Box>

               {sliderImages.map((slide, index) => {
                    return (
                         index === current && (
                              <Box
                                   bgImage={`url(${slide.image})`}
                                   backgroundPosition="center"
                                   backgroundRepeat="no-repeat"
                                   height="100vh"
                                   width="100%"
                                   key={index}
                              ></Box>
                         )
                    );
               })}
               <Box
                    onClick={nextSlide}
                    size={10}
                    position="absolute"
                    top="50%"
                    right="10px"
                    color="black"
               >
                    <IoIosArrowForward size="3rem" cursor="pointer" />
               </Box>
          </Flex>
     );
}

export default Hero;
