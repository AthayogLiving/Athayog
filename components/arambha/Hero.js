import {
     Box,
     Button,
     chakra,
     Divider,
     Flex,
     Heading,
     Link,
     Stack,
     Text
} from '@chakra-ui/react';
import Image from 'next/image';
import RetreatHero from 'public/sadhana.jpg';
import React from 'react';
import NavbarHelper from '../shared/NavbarHelper';
import Register from './Register';
function Hero() {
     return (
          <>
               <NavbarHelper />
               <Flex
                    height={{ base: '80vh', md: '80vh' }}
                    justifyContent="space-between"
                    alignItems="center"
                    bgSize="cover"
                    bgPosition="center"
                    textColor="white"
                    flexWrap="wrap"
                    width="full"
                    position="relative"
                    background="linear-gradient(to bottom,rgba(0,0,0,0.3) 10%,rgba(0,0,0,1))"
               >
                    <Box zIndex={-1}>
                         <Image
                              src={RetreatHero}
                              layout="fill"
                              objectFit="cover"
                              alt="hero"
                              placeholder="blur"
                         />
                    </Box>

                    <Box
                         width={{ base: '100%', lg: '100%' }}
                         textAlign="center"
                         p={{ base: '5', md: '10' }}
                    >
                         <Stack spacing={5} width="100%">
                              <Box>
                                   <Heading
                                        fontSize={{
                                             base: '2xl',
                                             md: '3xl',
                                             lg: '5xl'
                                        }}
                                        fontWeight="normal"
                                        textColor="white"
                                   >
                                        INTERNATIONAL DAY OF YOGA
                                   </Heading>
                                   <chakra.span
                                        fontSize={{
                                             base: '2xl',
                                             md: '3xl',
                                             lg: '5xl'
                                        }}
                                        fontWeight="bold"
                                        textColor="white"
                                        textTransform="uppercase"
                                   >
                                        YOGA ARAMBHA
                                   </chakra.span>
                              </Box>

                              <Text textColor="gray.300" fontSize="lg">
                                   “Through practice comes Yoga, through Yoga
                                   comes knowledge, through knowledge love and
                                   through love bliss.” Swami Vivekananda
                              </Text>
                         </Stack>
                    </Box>
               </Flex>
          </>
     );
}

export default Hero;
