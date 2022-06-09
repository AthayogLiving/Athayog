import {
     Box,
     Button,
     Container,
     Flex,
     Text,
     useBreakpointValue,
     useToast
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

function RegisterButton() {
     const buttonSize = useBreakpointValue(['sm', 'md']);
     const toast = new useToast();

     function shareNative() {
          return new Promise(async (resolve) => {
               const shareUrl = `${window.location.protocol}//${window.location.host}`;

               await navigator.share({
                    text: 'Athayog Yoga Day - Arambha',
                    url: shareUrl
               });

               resolve();
          });
     }

     function shareFallback() {
          return new Promise(async (resolve) => {
               const shareUrl = `${window.location.protocol}//${window.location.host}`;
               navigator.clipboard.writeText(shareUrl);
               toast({
                    title: 'Copied',
                    description: 'URL has been copied to url',
                    status: 'success',
                    duration: 9000,
                    isClosable: true
               });
               resolve();
          });
     }

     const onWebShare = async () => {
          if (navigator && navigator.share) {
               await shareNative();
          } else {
               await shareFallback();
          }
     };
     return (
          <Box bg="gray.50" width="full" py={5}>
               <Flex
                    alignItems="center"
                    gap={5}
                    direction={['column', 'column']}
                    justifyContent="center"
               >
                    <Link href="/yoga-day/register" passHref>
                         <Button
                              size={buttonSize}
                              colorScheme="aygreen"
                              rounded="none"
                              maxW="max-content"
                         >
                              REGISTER NOW! - FREE AND OPEN TO ALL
                         </Button>
                    </Link>
                    <Flex
                         alignItems="center"
                         borderColor="gray.200"
                         maxW="md"
                         direction="column"
                         gap={3}
                    >
                         <Text>Celebrate with your Friends and Family</Text>
                         <Button
                              colorScheme="red"
                              size={buttonSize}
                              variant="outline"
                              onClick={() => onWebShare()}
                              rounded="none"
                         >
                              SHARE
                         </Button>
                    </Flex>
               </Flex>
          </Box>
     );
}

export default RegisterButton;
