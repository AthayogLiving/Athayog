import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

const SubEmployee = ({ name, image, info, designation }) => {
     return (
          <Flex
               justifyContent="space-around"
               alignItems="center"
               width="md"
               flexDirection="column"
               mt={20}
               mb={20}
          >
               <Box>
                    <Box
                         rounded="full"
                         height="300px"
                         width="300px"
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

export default SubEmployee;
