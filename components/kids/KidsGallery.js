import { AspectRatio, Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import kids1 from 'public/kids-yoga-1.jpeg';
import kids2 from 'public/kids-yoga-2.jpg';
import kids3 from 'public/kids-yoga-3.jpg';
import kids5 from 'public/kids-yoga-5.jpg';
import kids6 from 'public/kids-yoga-6.jpg';
import Image from 'next/image';

function KidsGallery() {
     const imageCollection = [
          { id: 1, image: kids1, alt: 'Stand in tree pose' },
          { id: 2, image: kids2, alt: 'Bend in mountain pose' },
          { id: 3, image: kids3, alt: 'Hold in crow pose' },
          { id: 4, image: kids5, alt: 'Breathe in fish pose!' }
     ];
     return (
          <Box
               width="100%"
               bg="green.50"
               py={{ base: '5', md: '20' }}
               px={{ base: '5', md: '20' }}
          >
               <Heading
                    fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
                    fontWeight="light"
               >
                    Learn more about NATURE as you
               </Heading>
               <Flex mt={8} justifyContent="center" gap={1} overflowX="scroll">
                    {imageCollection.map(({ id, image, alt }) => {
                         return (
                              <Box key={id} flex="1 1 auto" width="100%">
                                   <AspectRatio
                                        maxW="100%"
                                        ratio={4 / 3}
                                        overflow="hidden"
                                   >
                                        <Image
                                             src={image}
                                             layout="fill"
                                             objectFit="cover"
                                             alt={alt}
                                             placeholder="blur"
                                        />
                                   </AspectRatio>
                                   <Text
                                        bg="aygreen.600"
                                        textColor="aygreen.50"
                                        py={2}
                                        px={5}
                                   >
                                        {alt}
                                   </Text>
                              </Box>
                         );
                    })}
               </Flex>
               <Text mt={8} fontWeight="light" fontSize="xl">
                    At the Kid’s Camp, we teach poses in Yoga inspired by
                    animals, plants and stories from nature and mythology.
               </Text>
          </Box>
     );
}

export default KidsGallery;
