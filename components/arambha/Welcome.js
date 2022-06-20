import {
     Box,
     Button,
     Container,
     Flex,
     Grid,
     Heading,
     Stack,
     Text,
     useBreakpointValue,
     chakra,
     useToast,
     HStack
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import idy from 'public/idy.png';
import azadi from 'public/amrit.png';
import modi from 'public/modi.png';
import tejasvi from 'public/tejasvi.jpg';
import React from 'react';

function Welcome() {
     const buttonSize = useBreakpointValue(['sm', 'md']);

     const toast = new useToast();

     function shareNative() {
          return new Promise(async (resolve) => {
               const shareUrl = `${window.location.href}`;

               await navigator.share({
                    text: 'Athayog Yoga Day - Arambha',
                    url: shareUrl
               });

               resolve();
          });
     }

     function shareFallback() {
          return new Promise(async (resolve) => {
               const shareUrl = `${window.location.href}`;
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
          <Container maxW="container.xl">
               <Stack
                    spacing={10}
                    bottom="0"
                    width="100%"
                    textAlign="center"
                    py={20}
                    justifyContent="center"
                    alignItems="center"
                    position="relative"
               >
                    <Flex
                         gap={5}
                         spacing={10}
                         position="absolute"
                         top="5"
                         left="10"
                    >
                         <Box
                              overflow="hidden"
                              height="4rem"
                              width="4rem"
                              position="relative"
                         >
                              <Image
                                   src={idy}
                                   alt="azadi logo"
                                   objectFit="contain"
                                   layout="fill"
                              />
                         </Box>
                         <Box
                              overflow="hidden"
                              height="5rem"
                              width="5rem"
                              position="relative"
                         >
                              <Image
                                   src={azadi}
                                   alt="azadi logo"
                                   objectFit="contain"
                                   layout="fill"
                              />
                         </Box>
                         <Box
                              overflow="hidden"
                              height="4rem"
                              width="4rem"
                              position="relative"
                         >
                              <Image
                                   src={modi}
                                   alt="azadi logo"
                                   objectFit="contain"
                                   layout="fill"
                              />
                         </Box>
                    </Flex>
                    <Heading
                         textAlign="center"
                         fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                         display={{ base: 'none', md: 'block' }}
                         fontWeight="normal"
                    >
                         <chakra.span>Namaskara Bengaluru, </chakra.span>
                         <chakra.span> Arise & Awake.</chakra.span>
                         <br />
                         Join us this International Day of Yoga!
                    </Heading>
                    <Flex
                         fontSize={{ base: 'xl', md: 'xl', lg: '2xl' }}
                         gap={3}
                         display={{ base: 'none', md: 'flex' }}
                    >
                         <Box
                              rounded="full"
                              overflow="hidden"
                              height="4rem"
                              width="4rem"
                              position="relative"
                         >
                              <Image
                                   src={tejasvi}
                                   alt="azadi logo"
                                   objectFit="cover"
                                   layout="fill"
                              />
                         </Box>
                         <Box>
                              <Text
                                   textColor="gray.600"
                                   fontWeight="normal"
                                   fontSize="xl"
                              >
                                   In association with Office of
                              </Text>

                              <Text
                                   textTransform="uppercase"
                                   fontWeight="bold"
                                   fontSize="2xl"
                              >
                                   TEJASVI SURYA
                              </Text>
                         </Box>
                    </Flex>
                    <Box
                         textAlign="center"
                         fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                         fontWeight="normal"
                         display={{ base: 'block', md: 'none' }}
                    >
                         <Text>Namaskara Bengaluru, </Text>
                         <Text> Arise & Awake.</Text>
                         <br />
                         Join us this International Day of Yoga!
                    </Box>
                    <Flex
                         fontSize={{ base: 'xl', md: 'xl', lg: '2xl' }}
                         gap={3}
                         display={{ base: 'flex', md: 'none' }}
                    >
                         <Box
                              rounded="full"
                              overflow="hidden"
                              height="3.5rem"
                              width="3.5rem"
                              position="relative"
                         >
                              <Image
                                   src={tejasvi}
                                   alt="azadi logo"
                                   objectFit="cover"
                                   layout="fill"
                              />
                         </Box>
                         <Box>
                              <Text
                                   textColor="gray.600"
                                   fontWeight="normal"
                                   fontSize="lg"
                              >
                                   In association with Office of
                              </Text>

                              <Text
                                   textTransform="uppercase"
                                   fontWeight="bold"
                                   fontSize="xl"
                              >
                                   TEJASVI SURYA
                              </Text>
                         </Box>
                    </Flex>
                    <Text
                         fontSize={{ base: 'xl', md: '3xl', lg: '3xl' }}
                         fontWeight="normal"
                    >
                         June 21st, 2022, 5.30 AM onwards
                         <br />
                         Kittur Rani Chennamma Stadium, Bengaluru
                    </Text>

                    <Flex
                         alignItems="center"
                         gap={5}
                         direction={['column', 'column']}
                    >
                         <Link
                              href="https://forms.gle/3nLbjhEYi2CqcxMKA"
                              passHref
                         >
                              <a target="_blank">
                                   <Button
                                        size={buttonSize}
                                        colorScheme="aygreen"
                                        rounded="none"
                                        maxW="max-content"
                                   >
                                        REGISTER NOW! - FREE AND OPEN TO ALL
                                   </Button>
                              </a>
                         </Link>
                         <Flex
                              alignItems="center"
                              borderColor="gray.200"
                              maxW="md"
                              direction="column"
                              gap={3}
                         >
                              <Text>
                                   Celebrate with your Friends and Family
                              </Text>
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
               </Stack>
               <Stack
                    spacing={10}
                    py={10}
                    fontWeight="light"
                    fontSize={{ base: 'xl', md: 'xl', lg: '2xl' }}
                    textColor="black"
               >
                    <Text textAlign="left">
                         We at AthaYog Living are celebrating Yoga with a grand
                         festival and we cordially invite each and every one of
                         you to celebrate the Yogic way of life.
                    </Text>
                    <Grid
                         templateColumns={{
                              base: 'repeat(1,1fr)',
                              md: 'repeat(2,1fr)',
                              lg: 'repeat(2,1fr)'
                         }}
                         gap={10}
                    >
                         <Stack spacing={10}>
                              <Text>
                                   Last year, we celebrated International Day of
                                   Yoga with a 12-hour Yogathon celebration and
                                   our members joined the asana, pranayama,
                                   meditation, lecture, chanting and satsang
                                   session with great joy.
                              </Text>
                              <Text>
                                   This year we are taking it forward with a
                                   grand initiative beyond our studio to an
                                   outdoor space open to everyone in Bengaluru.
                              </Text>
                              <Text>
                                   {' '}
                                   Meet people from all walks of life united
                                   through Yoga.
                              </Text>
                         </Stack>
                         <Stack
                              spacing={10}
                              padding={{ base: '3', md: '6', lg: '10' }}
                              bg="aygray.100"
                         >
                              <Text fontWeight="medium">Who Can Join?</Text>
                              <Text>
                                   We value the importance of community and Yoga
                                   helps rebuild this sense of community by
                                   allowing people of different backgrounds,
                                   ages, and interests to share the experience.
                              </Text>
                              <Text>
                                   Please note that it is open to all above 6
                                   years.
                              </Text>
                         </Stack>
                    </Grid>
                    <Flex
                         borderTop="4px solid"
                         borderBottom="4px solid"
                         borderColor="orange.300"
                         py={5}
                         gap={5}
                         px={3}
                    >
                         <Text
                              textColor="teal.500"
                              fontWeight="bold"
                              fontSize="2xl"
                              width="max-content"
                         >
                              Special Day
                         </Text>
                         <Text textColor="green.900" fontWeight="normal">
                              Get absorbed in{' '}
                              <chakra.strong>
                                   transcendental music
                              </chakra.strong>{' '}
                              and Immersive{' '}
                              <chakra.strong>AR experience</chakra.strong> at
                              the venue!{' '}
                              <chakra.strong>
                                   Gratitude Goodie Bags{' '}
                              </chakra.strong>
                              for everyone attending the event.
                         </Text>
                    </Flex>
               </Stack>
          </Container>
     );
}

export default Welcome;
