import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import { Box, Flex, HStack, Stack, Text } from '@chakra-ui/react';
import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai';
import React from 'react';

const Footer = () => {
     return (
          <Flex
               bg="primaryGreen"
               height="sm"
               justifyContent="center"
               alignItems="center"
          >
               <Flex
                    color="primaryWhite"
                    justifyContent="space-between"
                    alignItems="baseline"
                    fontWeight="light"
               >
                    <HStack
                         spacing="10rem"
                         alignItems="flex-start"
                         fontSize="lg"
                    >
                         <Stack spacing={4}>
                              <Text>Lorem ipsum </Text>
                              <Text>Lorem ipsum </Text>
                              <Text>Lorem ipsum </Text>
                              <Text>Lorem ipsum </Text>
                         </Stack>
                         <Stack spacing={4}>
                              <Text>Lorem ipsum </Text>
                              <Text>Lorem ipsum </Text>
                              <Text>Lorem ipsum </Text>
                              <Text>Lorem ipsum </Text>
                         </Stack>
                         <Stack spacing={4}>
                              <Text>Lorem ipsum </Text>
                              <Text>Lorem ipsum </Text>
                              <Text>Lorem ipsum </Text>
                              <Text>Lorem ipsum </Text>
                         </Stack>
                         <Stack spacing={4}>
                              <Text>
                                   <PhoneIcon mr={3} size="1.5rem" /> Lorem
                                   ipsum
                              </Text>
                              <Text>
                                   <EmailIcon mr={3} size="1.5rem" />
                                   abasdac@xyssd.com
                              </Text>
                              <HStack spacing="1rem">
                                   <AiOutlineInstagram size="1.5rem" />
                                   <AiOutlineFacebook size="1.5rem" />
                              </HStack>
                         </Stack>
                    </HStack>
               </Flex>
          </Flex>
     );
};

export default Footer;
