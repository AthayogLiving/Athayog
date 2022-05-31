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
                    width={1818}
                    height={979}
                    alt="arise"
                    placeholder="blur"
               />
          </>
     );
}

export default Banner;
