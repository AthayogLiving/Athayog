import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import {
     Box,
     Flex,
     HStack,
     Stack,
     Text,
     Link as ChakraLink
} from '@chakra-ui/react';
import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai';
import React from 'react';
import Link from 'next/link';

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
                    fontWeight="normal"
               >
                    <HStack
                         spacing="10rem"
                         alignItems="flex-start"
                         fontSize="md"
                    >
                         <Stack spacing={4} color="aygreen.100">
                              <Text color="white">Site Links</Text>
                              <Text cursor="pointer">About</Text>
                              <Text cursor="pointer">Enquire</Text>
                              <Text cursor="pointer">Register </Text>
                         </Stack>
                         <Stack spacing={4} color="aygreen.100">
                              <Text color="white">Offerings</Text>
                              <Text cursor="pointer">AthaYog Workshops</Text>
                              <Text cursor="pointer">
                                   AthaYog Shikshana Pada
                              </Text>
                              <Text cursor="pointer">AthaYog Space </Text>
                              <Text cursor="pointer">AthaYog Online </Text>
                              <Text cursor="pointer">AthaYog Personal</Text>
                         </Stack>

                         <Stack spacing={4} color="aygreen.100">
                              <Text color="white">Reach Us</Text>
                              <a href="tel:+919611771434">
                                   <PhoneIcon mr={3} size="1.5rem" />
                                   +91 9611771434
                              </a>
                              <a href="mailto:info@athayogliving.com">
                                   <EmailIcon mr={3} size="1.5rem" />
                                   info@athayogliving.com
                              </a>
                              <HStack spacing="1rem">
                                   <ChakraLink
                                        href="https://www.instagram.com/athayogliving/"
                                        isExternal
                                   >
                                        <AiOutlineInstagram size="1.5rem" />
                                   </ChakraLink>
                                   <ChakraLink
                                        href="https://www.facebook.com/athayogliving/"
                                        isExternal
                                   >
                                        <AiOutlineFacebook size="1.5rem" />
                                   </ChakraLink>
                              </HStack>
                         </Stack>
                         <Stack>
                              <iframe
                                   // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d485.9357581807971!2d77.71476799917869!3d13.00468935948864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11291dc28c27%3A0xd39ba6332f2b865c!2sAtha%20Yog!5e0!3m2!1sen!2sin!4v1594150257983!5m2!1sen!2sin"
                                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.484273852193!2d77.7135324148223!3d13.004803690834144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAwJzE3LjMiTiA3N8KwNDInNTYuNiJF!5e0!3m2!1sen!2sin!4v1601013691998!5m2!1sen!2sin"
                                   width="600"
                                   height="450"
                                   frameBorder={0}
                                   style={{
                                        border: 0,
                                        height: '100%',
                                        width: '100%',
                                        borderRadius: '5px'
                                   }}
                                   allowFullScreen={false}
                                   tabIndex={0}
                              ></iframe>
                         </Stack>
                    </HStack>
               </Flex>
          </Flex>
     );
};

export default Footer;
