import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import arise from 'public/arise.png';
import React from 'react';

function Banner() {
     return (
          <>
               <Flex
                    height={{ base: '30vh', md: '50vh', lg: '70vh' }}
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
                              src={arise}
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

export default Banner;
