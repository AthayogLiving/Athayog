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
     Text,
     useToast
} from '@chakra-ui/react';
import Image from 'next/image';
import HeroBg from 'public/hero.jpeg';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsArrowDownCircleFill } from 'react-icons/bs';

function Hero() {
     const { handleSubmit, register, errors, reset } = useForm();
     const toast = useToast();
     const [loading, setLoading] = useState(false);
     const onSubmit = async ({ name, email, phone }) => {
          setLoading(true);
          // Send Email
          await fetch('https://formsubmit.co/ajax/info@athayogliving.com', {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
               },
               body: JSON.stringify({
                    FormType: 'Leads Form',
                    fullname: name,
                    email: email,
                    phone: phone
               })
          });

          await axios
               .post(`/api/forms/lead`, {
                    name: name,
                    email,
                    phone,
                    type: 'lead'
               })
               .then(function (response) {
                    setLoading(false);
                    toast({
                         title: 'Request Submitted.',
                         description: 'We will get back to you.',
                         status: 'success',
                         duration: 9000,
                         isClosable: true
                    });
                    onClose();
                    reset();
               })
               .catch(function (error) {
                    setLoading(false);
                    toast({
                         title: 'An error occurred.',
                         description: error.message,
                         status: 'error',
                         duration: 5000,
                         isClosable: true
                    });
                    reset();
               });
     };

     return (
          <Box height={{ base: '100vh', md: '100vh', lg: '90vh' }}>
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
                    justifyContent={{
                         base: 'center',
                         md: 'center',
                         lg: 'space-around'
                    }}
                    direction={{ base: 'column', md: 'column', lg: 'row' }}
               >
                    <Box
                         maxW="lg"
                         textAlign={{
                              base: 'center',
                              md: 'center',
                              lg: 'left'
                         }}
                         m={2}
                    >
                         <Heading
                              as="h1"
                              fontSize={{ base: '4xl', md: '4xl' }}
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
                              mt={3}
                              color="gray.200"
                              fontSize={{ md: 'lg' }}
                         >
                              Our academy and teachers are certified with{' '}
                              <strong>Yoga Alliance</strong>. It is a Global
                              Certification and is recognized all over the
                              World.
                         </Text>
                    </Box>
                    <Box>
                         <Box
                              bg="white"
                              boxShadow="md"
                              rounded="md"
                              color="black"
                              py={{ base: '4', sm: '8' }}
                              px={{ base: '4', sm: '10' }}
                              maxW="md"
                              m={2}
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
                                   as="form"
                                   onSubmit={handleSubmit((data) =>
                                        onSubmit(data)
                                   )}
                              >
                                   <Stack spacing="5">
                                        <FormControl id="name">
                                             <Input
                                                  type="text"
                                                  placeholder="First Name *"
                                                  color="#000"
                                                  isRequired={true}
                                                  name="name"
                                                  ref={register({
                                                       required:
                                                            'Please enter your first name.'
                                                  })}
                                             />
                                        </FormControl>

                                        <FormControl id="email">
                                             <Input
                                                  type="email"
                                                  placeholder="Email *"
                                                  name="email"
                                                  ref={register({
                                                       required:
                                                            'Please enter your email.'
                                                  })}
                                             />
                                        </FormControl>
                                        <FormControl>
                                             <Input
                                                  type="tel"
                                                  placeholder="Phone Number *"
                                                  name="phone"
                                                  ref={register({
                                                       required:
                                                            'Please enter your phone.'
                                                  })}
                                             />
                                        </FormControl>
                                   </Stack>
                                   <Button
                                        type="submit"
                                        colorScheme="aygreen"
                                        isLoading={loading}
                                        loadingText="Submitting"
                                   >
                                        Register
                                   </Button>
                              </Grid>
                         </Box>
                    </Box>

                    <Box
                         mt={5}
                         display={{ base: 'block', md: 'block', lg: 'none' }}
                    >
                         <BsArrowDownCircleFill fontSize="2rem" />
                    </Box>
               </Flex>
          </Box>
     );
}

export default Hero;
