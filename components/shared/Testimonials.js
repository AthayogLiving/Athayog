import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const Testimonials = () => {
     return (
          <Flex
               height="sm"
               bg="aygreen.400"
               justifyContent="center"
               alignItems="center"
          >
               <Box maxW="6xl">
                    {' '}
                    <Heading
                         textAlign="center"
                         color="white"
                         fontWeight="normal"
                    >
                         Testimonials
                         <Flex
                              mt={5}
                              direction="column"
                              alignItems="center"
                              justifyContent="center"
                         >
                              <AiFillStar fontSize="1.2rem" />
                              <Text fontSize="md" mt={5}>
                                   Lorem ipsum dolor sit amet consectetur
                                   adipisicing elit. Soluta tempora maxime
                                   sapiente facilis consectetur, esse voluptatum
                                   unde eius, aliquam iste a? Facere non illo
                                   accusantium omnis enim laboriosam amet
                                   quibusdam culpa, alias eveniet nihil tenetur
                                   voluptatem recusandae veniam sunt!
                                   Recusandae.
                              </Text>
                              <Text fontSize="2xl" fontWeight="medium" mt={5}>
                                   John Doe
                              </Text>
                         </Flex>
                    </Heading>
               </Box>
          </Flex>
     );
};

export default Testimonials;
