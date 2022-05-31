import { Box, Flex, useBreakpointValue } from '@chakra-ui/react';
import Image from 'next/image';
import HeroDesktop from 'public/arambha_desktop.png';
import HeroMobile from 'public/arambha_mobile.png';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

function Hero() {
     const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

     return (
          <>
               <Flex
                    height={{ base: '100vh', md: '100vh' }}
                    justifyContent="space-between"
                    alignItems="center"
                    bgSize="cover"
                    bgPosition="center"
                    textColor="white"
                    flexWrap="wrap"
                    width="full"
                    position="relative"
               >
                    <Box zIndex={-1}>
                         <Image
                              src={isTabletOrMobile ? HeroMobile : HeroDesktop}
                              layout="fill"
                              objectFit="cover"
                              alt="hero"
                              placeholder="blur"
                         />
                    </Box>
               </Flex>
          </>
     );
}

export default Hero;
