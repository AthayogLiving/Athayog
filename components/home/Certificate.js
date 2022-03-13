import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import RYT_Logo from 'public/Rys_200_Logo.png';
import Svyasa_Logo from 'public/svyasa.png';

export default function Certificate() {
     return (
          <Flex
               padding="2rem"
               justifyContent="center"
               alignItems="center"
               direction={['column', 'row']}
               bg="gray.100"
          >
               <Flex justifySelf="center" mb={['1rem', '0', '0', '0']}>
                    <Image
                         height="100"
                         width="230"
                         src={Svyasa_Logo}
                         layout="intrinsic"
                    />
                    <Image
                         height="100"
                         width="100"
                         src={RYT_Logo}
                         layout="intrinsic"
                    />
               </Flex>

               <Text
                    ml={['0', 'sm', 'sm', 'sm']}
                    w={['full', 'sm']}
                    textAlign="center"
               >
                    Our academy and teachers are certified with{' '}
                    <strong>Yoga Alliance</strong>. It is a Global Certification
                    and is recognized all over the World.
               </Text>
          </Flex>
     );
}
