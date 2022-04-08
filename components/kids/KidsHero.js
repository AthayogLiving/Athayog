import { Box, Flex, Heading, Text, chakra } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import RegisterNow from './RegisterNow';
import kids6 from 'public/kids-yoga-6.jpg';

function KidsHero() {
     return (
          <Flex
               height={{ base: '50vh', md: '80vh' }}
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
                         src={kids6}
                         layout="fill"
                         objectFit="cover"
                         alt="hero"
                         placeholder="blur"
                    />
               </Box>
               <Box
                    width={{ base: '100%', lg: 'container.lg' }}
                    position={{ base: 'relative', md: 'absolute' }}
                    textAlign="center"
                    p={{ base: '5', md: '10' }}
               >
                    <Heading
                         fontSize={{ base: '3xl', md: '5xl' }}
                         fontWeight="light"
                         textColor="white"
                    >
                         Let your children discover themselves at
                         <br />
                         <chakra.span
                              textColor="aygreen.300"
                              cursor="pointer"
                              borderBottom="1px solid"
                              fontWeight="medium"
                         >
                              AYL&#39;S Kids Yoga Camp
                         </chakra.span>
                    </Heading>
                    <Text
                         margin="0 auto"
                         fontSize={{ base: 'lg', md: 'xl' }}
                         textColor="aygreen.50"
                         mt="16"
                    >
                         Break the stressful summer holidays with a great
                         physical outlet for your children that will also help
                         them for life{' '}
                         <chakra.span fontWeight="medium">
                              AthaYog’s Summer Kid’s Camp{' '}
                         </chakra.span>
                         to give you and your kids’ a break!
                    </Text>
               </Box>
               <RegisterNow pageType="hero" />
          </Flex>
     );
}

export default KidsHero;
