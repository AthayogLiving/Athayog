import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

const SubEmployee = ({ name, image, info, designation }) => {
     return (
          <Flex
               justifyContent="space-around"
               alignItems="center"
               width="100%"
               flexDirection="column"
          >
               <Box>
                    <Box
                         rounded="full"
                         height={{ base: '250px', md: '300px', lg: '300px' }}
                         width={{ base: '250px', md: '300px', lg: '300px' }}
                         overflow="hidden"
                    >
                         <Image
                              src={image}
                              height="300px"
                              width="300px"
                              objectFit="cover"
                              layout="responsive"
                         />
                    </Box>
               </Box>

               <Box>
                    <Text
                         color="aygreen.600"
                         fontWeight="bold"
                         fontSize="3xl"
                         textAlign="center"
                         mt={5}
                    >
                         {name}
                    </Text>
                    <Text textAlign="center" color="aygreen.500">
                         {designation}
                    </Text>
                    <br />

                    {info.split('\n').map((i, index) => {
                         return (
                              <Text
                                   whiteSpace="pre-wrap"
                                   fontWeight="normal"
                                   key={index}
                              >
                                   {i}
                              </Text>
                         );
                    })}
               </Box>
          </Flex>
     );
};

export default SubEmployee;
