import { Box, Flex, Heading, Text, chakra, Button } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import kids6 from 'public/kids-yoga-6.jpg';

function Hero() {
     return (
          <Flex
               height={{ base: '100vh', md: '100vh' }}
               justifyContent="center"
               alignItems="center"
               bgSize="cover"
               bgPosition="center"
               direction="column"
               position="relative"
               background="linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7))"
          >
               <Box zIndex={-1}>
                    <Image
                         src={
                              'https://images.unsplash.com/photo-1520769945061-0a448c463865?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                         }
                         layout="fill"
                         objectFit="cover"
                         alt="hero"
                         // placeholder="blur"
                    />
               </Box>
               <Box
                    width={{ base: '100%', lg: 'container.lg' }}
                    position={{ base: 'relative' }}
                    textAlign="center"
                    p={{ base: '5', md: '10' }}
               >
                    <Heading
                         fontSize={{ base: '3xl', md: '5xl' }}
                         fontWeight="bold"
                         textColor="white"
                    >
                         Free your mind, body and spirit at the <br />
                    </Heading>
                    <chakra.span
                         fontSize={{ base: '3xl', md: '5xl' }}
                         fontWeight="bold"
                         textColor="white"
                         mt={2}
                    >
                         Mindful Nature Retreat
                    </chakra.span>
               </Box>
               <Button colorScheme="green" rounded="full">
                    {' '}
                    Register Now
               </Button>
          </Flex>
     );
}

export default Hero;
