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
import RetreatHero from 'public/retreat-hero.jpg';
import React from 'react';
import NavbarHelper from '../shared/NavbarHelper';
function Hero() {
     return (
          <>
               <NavbarHelper />
               <Flex
                    height={{ base: '100vh', md: '10   0vh' }}
                    justifyContent="center"
                    alignItems="center"
                    bgSize="cover"
                    bgPosition="center"
                    direction="column"
                    textColor="white"
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
                         width={{ base: '100%', lg: 'container.lg' }}
                         position={{ base: 'relative' }}
                         textAlign="left"
                         p={{ base: '5', md: '10' }}
                    >
                         <Stack spacing={5}>
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
                              <Link
                                   passHref
                                   // href="https://rzp.io/l/tDvi8Ww9z"
                                   target="_blank"
                              >
                                   {' '}
                                   <Button
                                        colorScheme="yellow"
                                        variant="outline"
                                        rounded="none"
                                        maxW={{
                                             base: 'full',
                                             md: 'max-content'
                                        }}
                                   >
                                        REGISTER NOW
                                   </Button>
                              </Link>
                         </Stack>

                         <Divider mt={10} mb={5} />
                         <Flex
                              justifyContent="flex-start"
                              gap={{ base: 5, md: 10 }}
                              alignItems="center"
                              fontSize={{ base: 'md', md: 'lg' }}
                         >
                              <Box textAlign="left">
                                   <Text textColor="gray.400">Dates</Text>
                                   <Box>To Be Announced</Box>
                              </Box>
                              <Box textAlign="left">
                                   <Text textColor="gray.400">Location</Text>
                                   <Text>
                                        Fig & Lily, Karenahalli, off Kanakpura
                                        Road, Bangalore
                                   </Text>
                              </Box>
                         </Flex>
                    </Box>
               </Flex>
          </>
     );
}

export default Hero;
