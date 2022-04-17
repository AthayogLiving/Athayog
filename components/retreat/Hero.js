import {
     Box,
     Button,
     chakra,
     Divider,
     Flex,
     Heading,
     Stack,
     Text
} from '@chakra-ui/react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

function Hero() {
     return (
          <Flex
               height={{ base: '100vh', md: '10   0vh' }}
               justifyContent="center"
               alignItems="center"
               bgSize="cover"
               bgPosition="center"
               direction="column"
               textColor="white"
               position="relative"
               background="linear-gradient(to bottom,rgba(0,0,0,0.3) 10%,rgba(0,0,0,0.9))"
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
                    textAlign="left"
                    p={{ base: '5', md: '10' }}
                    as={motion.div}
                    initial={{ y: -100 }}
                    whileInView="visible"
                    viewport={{ once: true }}
                    animate={{ y: 0 }}
                    transition={{ ease: 'easeIn', duration: 5 }}
               >
                    <Stack spacing={5}>
                         <Heading
                              fontSize={{ base: '3xl', md: '5xl' }}
                              fontWeight="normal"
                              textColor="white"
                         >
                              Free your mind, body and spirit at the <br />
                              <chakra.span
                                   fontSize={{ base: '3xl', md: '5xl' }}
                                   fontWeight="bold"
                                   textColor="white"
                                   textTransform="uppercase"
                              >
                                   Mindful Nature Retreat
                              </chakra.span>
                         </Heading>

                         <Text textColor="gray.300" fontSize="lg">
                              Only limited spots available
                         </Text>
                         <Button
                              colorScheme="yellow"
                              variant="outline"
                              rounded="none"
                              maxW="max-content"
                         >
                              Register Now
                         </Button>
                    </Stack>

                    <Divider mt={10} mb={5} />
                    <Flex
                         justifyContent="flex-start"
                         gap={10}
                         alignItems="center"
                         fontSize="lg"
                    >
                         <Box textAlign="left">
                              <Text textColor="gray.400">Dates</Text>
                              <Box>May 14th, 6 am - May 15th 7 pm</Box>
                         </Box>
                         <Box textAlign="left">
                              <Text textColor="gray.400">Location</Text>
                              <Text>Fig & Lily, Kanakapura, Bangalore</Text>
                         </Box>
                    </Flex>
               </Box>
          </Flex>
     );
}

export default Hero;
