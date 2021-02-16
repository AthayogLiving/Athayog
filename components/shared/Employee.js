import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

const Employee = ({ name, image, info, designation }) => {
     return (
          <Flex
               justifyContent="center"
               alignItems={{ base: 'center', md: 'start', lg: 'start' }}
               width="100%"
               padding={5}
               flexDirection={{ base: 'column', md: 'row', lg: 'row' }}
               mt={{ base: 2, md: 10, lg: 10 }}
               mt={{ base: 2, md: 10, lg: 10 }}
          >
               <Box>
                    <Box
                         rounded="full"
                         height={{ base: '250px', md: '300px', lg: '300px' }}
                         width={{ base: '250px', md: '300px', lg: '300px' }}
                         overflow="hidden"
                         mr={{ base: '0', md: '10', lg: '10' }}
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

               <Box
                    maxW={{ base: '100%', md: '50%', lg: '50%' }}
                    mt={{ base: '10', md: '0', lg: '0' }}
               >
                    <Text
                         color="aygreen.600"
                         fontWeight="bold"
                         fontSize="3xl"
                         textAlign={{ base: 'center', md: 'left', lg: 'left' }}
                    >
                         {name}
                    </Text>
                    <Text
                         textAlign={{ base: 'center', md: 'left', lg: 'left' }}
                         color="aygreen.500"
                    >
                         {designation}
                    </Text>
                    <br />
                    {info.split('\n').map((i) => {
                         return (
                              <Text whiteSpace="pre-wrap" fontWeight="normal">
                                   {i}
                              </Text>
                         );
                    })}
               </Box>
          </Flex>
     );
};

export default Employee;
