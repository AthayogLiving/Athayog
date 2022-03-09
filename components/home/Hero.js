import {
     Box,
     Button,
     chakra,
     Flex,
     FormControl,
     Grid,
     Heading,
     Input,
     Stack,
     Text
} from '@chakra-ui/react';
import Image from 'next/image';
import HeroBg from 'public/hero.jpeg';
import RYT_Logo from 'public/Rys_200_Logo.png';
import Svyasa_Logo from 'public/svyasa.png';
import React from 'react';

function Hero() {
     return (
          <Box height="90vh">
               <Box position="relative">
                    <Box
                         height="100%"
                         width="100%"
                         overflow="hidden"
                         position="fixed"
                         zIndex="-1"
                    >
                         <Image
                              src={HeroBg}
                              layout="fill"
                              alt="hero background"
                              objectFit="cover"

                              // placeholder="blur"
                         />
                    </Box>
                    <Box
                         background="linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))"
                         position="fixed"
                         height="100%"
                         width="100%"
                         zIndex="-1"
                    ></Box>
               </Box>
               <Flex
                    alignItems="center"
                    height="100%"
                    color="white"
                    justifyContent="space-around"
               >
                    <Box maxW="lg">
                         <Heading
                              as="h1"
                              fontSize={{ base: '3xl', md: '4xl' }}
                              fontWeight="bold"
                              lineHeight="shorter"
                         >
                              <chakra.span textColor="aygreen.200">
                                   Athayog
                              </chakra.span>{' '}
                              Living
                         </Heading>
                         <Text
                              as="h3"
                              mb={5}
                              color="gray.200"
                              fontSize={{ md: 'lg' }}
                         >
                              Our academy and teachers are certified with{' '}
                              <strong>Yoga Alliance</strong>. It is a Global
                              Certification and is recognized all over the
                              World.
                         </Text>
                         <Flex
                              justifySelf="center"
                              mb={['1rem', '0', '0', '0']}
                              bg="whiteAlpha.700"
                              p={2}
                              width="max-content"
                              rounded="sm"
                         >
                              <Image
                                   height="60"
                                   width="130"
                                   src={Svyasa_Logo}
                                   layout="intrinsic"
                                   alt="svyasa logo"
                              />
                              <Image
                                   height="50"
                                   width="60"
                                   src={RYT_Logo}
                                   layout="intrinsic"
                                   alt="ryt logo"
                              />
                         </Flex>
                    </Box>
                    <Box>
                         <Box
                              bg="white"
                              boxShadow="md"
                              rounded="md"
                              color="black"
                              py={{ base: '0', sm: '8' }}
                              px={{ base: '4', sm: '10' }}
                              maxW="md"
                         >
                              <Text fontWeight="bold" fontSize="2xl" mb={2}>
                                   Signup For A Free Class
                              </Text>
                              <Text
                                   color="muted"
                                   fontWeight="normal"
                                   letterSpacing="wide"
                              >
                                   Learn from the Best with Unlimited Class,
                                   Initiate with Registering for 2 Free Trial
                                   Class.
                              </Text>
                              <Grid
                                   templateColumns="repeat(1, 1fr)"
                                   gap={6}
                                   mt={6}
                              >
                                   <Stack spacing="5">
                                        <FormControl id="name">
                                             <Input
                                                  type="text"
                                                  placeholder="First Name *"
                                                  color="#000"
                                                  isRequired={true}
                                                  name="name"
                                                  // ref={register({
                                                  //      required:
                                                  //           'Please enter your first name.'
                                                  // })}
                                             />
                                        </FormControl>

                                        <FormControl id="email">
                                             <Input
                                                  type="email"
                                                  placeholder="Email *"
                                                  name="email"
                                                  // ref={register({
                                                  //      required:
                                                  //           'Please enter your email.'
                                                  // })}
                                             />
                                        </FormControl>
                                        <FormControl>
                                             <Input
                                                  type="tel"
                                                  placeholder="Phone Number *"
                                                  name="phone"
                                                  // ref={register({
                                                  //      required:
                                                  //           'Please enter your phone.'
                                                  // })}
                                             />
                                        </FormControl>
                                   </Stack>
                                   <Button
                                        type="submit"
                                        colorScheme="aygreen"
                                        // isLoading={loading}
                                        loadingText="Submitting"
                                   >
                                        Register
                                   </Button>
                              </Grid>
                         </Box>
                    </Box>
               </Flex>
          </Box>
     );
}

export default Hero;
