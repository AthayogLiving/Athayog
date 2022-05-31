import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import arise from 'public/arise.png';
import React from 'react';

function Banner() {
     return (
          <>
               <Image
                    src={arise}
                    layout="responsive"
                    width={700}
                    height={475}
                    alt="arise"
                    placeholder="blur"
               />
          </>
     );
}

export default Banner;
