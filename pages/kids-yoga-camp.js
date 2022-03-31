import React from 'react';
import HomeLayout from '@/components/layout/HomeLayout';
import {
     AspectRatio,
     Box,
     Button,
     Flex,
     Heading,
     HStack,
     List,
     ListIcon,
     ListItem,
     OrderedList,
     Stack,
     StackDivider,
     Text,
     UnorderedList,
     chakra,
     VStack
} from '@chakra-ui/react';
import NavbarHelper from '@/components/shared/NavbarHelper';
import { MdCheckCircle } from 'react-icons/md';
import { FaDotCircle } from 'react-icons/fa';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import KidsYogaForm from '@/components/shared/KidsYogaForm';
import summerOne from 'public/summer_1.jpg';
import Image from 'next/image';

function KidsYogaCamp() {
     return (
          <Box>
               <NavbarHelper />
               <Flex
                    height="60vh"
                    justifyContent="center"
                    alignItems="center"
                    bgImage="linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('https://images.unsplash.com/photo-1543858828-7cf1a9beb95c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')"
                    bgSize="cover"
                    bgPosition="center"
                    direction="column"
                    position="relative"
               >
                    <Heading
                         fontSize="5xl"
                         fontWeight="normal"
                         textColor="white"
                         textAlign="center"
                    >
                         Unlock Your Little Ones Potential <br />
                         At AYL&#39;S{' '}
                         <chakra.span
                              textColor="aygreen.300"
                              borderBottom="3px solid"
                              fontWeight="bold"
                              cursor="pointer"
                         >
                              Kids Yoga Camp
                         </chakra.span>
                    </Heading>
                    <Stack
                         border="1.5px solid"
                         borderColor="gray.100"
                         py="3"
                         boxShadow="base"
                         bg="white"
                         px="5"
                         rounded="xl"
                         spacing={{ base: '5', md: '8' }}
                         width="container.lg"
                         position="absolute"
                         bottom="-20px"
                         divider={<StackDivider borderColor="gray.300" />}
                         mt="8"
                         align={{ base: 'baseline', md: 'center' }}
                         justifyContent={{
                              base: 'space-between',
                              md: 'space-evenly'
                         }}
                         direction={{ base: 'column', md: 'row' }}
                    >
                         <Flex direction="column" alignItems="center">
                              <Button colorScheme="orange">Register Now</Button>
                         </Flex>
                         <Flex direction="column">
                              <Box textColor="gray.600">Age</Box>{' '}
                              <Box textColor="gray.900" fontWeight="medium">
                                   6 - 11yr
                              </Box>
                         </Flex>
                         <Flex direction="column">
                              <Box textColor="gray.600">Date</Box>{' '}
                              <Box textColor="gray.900" fontWeight="medium">
                                   2nd May - 13th May
                              </Box>
                         </Flex>
                         <Flex direction="column">
                              <Box textColor="gray.600">Time</Box>{' '}
                              <Box textColor="gray.900" fontWeight="medium">
                                   11am - 1pm{' '}
                              </Box>
                         </Flex>
                         <Flex direction="column">
                              <Box textColor="gray.600">Location</Box>
                              <Box textColor="gray.900" fontWeight="medium">
                                   Indiranagar / KR Puram / Online
                              </Box>
                         </Flex>
                    </Stack>{' '}
               </Flex>

               <Box
                    maxW="80vw"
                    margin="0 auto"
                    py={{ base: '5', md: '10' }}
                    px="5"
                    mt={8}
               >
                    <Text margin="0 auto" fontSize="xl">
                         It’s that time of the year when the days are long and
                         hot! AthaYog’s Summer Kid’s Camp to give you and your
                         kids’ a break!
                    </Text>

                    <Text margin="0 auto" fontSize="xl" mt={8}>
                         This summer, let your kids chill out in their own zone
                         engaged in fun activities and learning.
                    </Text>
                    <List spacing={3} mt={5} fontSize="xl">
                         <ListItem>
                              <ListIcon
                                   as={BsArrowRightCircleFill}
                                   color="aygreen.500"
                              />
                              Move, Pose & Breathe in the Yoga Asana Class
                         </ListItem>
                         <ListItem>
                              <ListIcon
                                   as={BsArrowRightCircleFill}
                                   color="aygreen.500"
                              />
                              Chant your Hearts out at Satsang
                         </ListItem>
                         <ListItem>
                              <ListIcon
                                   as={BsArrowRightCircleFill}
                                   color="aygreen.500"
                              />
                              Learn through Play with Yoga games & more
                         </ListItem>
                         <ListItem>
                              <ListIcon
                                   as={BsArrowRightCircleFill}
                                   color="aygreen.500"
                              />
                              Group activities to Nurture the Social skills
                         </ListItem>
                         <ListItem>
                              <ListIcon
                                   as={BsArrowRightCircleFill}
                                   color="aygreen.500"
                              />
                              Sattvic snacks to Build Healthy Eating Habits
                         </ListItem>
                    </List>

                    <Box mt={16}>
                         <Heading textTransform="uppercase" fontSize="2xl">
                              Classes includes{' '}
                         </Heading>
                         <List mt={3} spacing={2} fontSize="xl">
                              <ListItem>
                                   {' '}
                                   <ListIcon
                                        as={BsArrowRightCircleFill}
                                        color="aygreen.500"
                                   />
                                   Yoga class
                              </ListItem>
                              <ListItem>
                                   {' '}
                                   <ListIcon
                                        as={BsArrowRightCircleFill}
                                        color="aygreen.500"
                                   />
                                   Chanting / Satsang{' '}
                              </ListItem>
                              <ListItem>
                                   {' '}
                                   <ListIcon
                                        as={BsArrowRightCircleFill}
                                        color="aygreen.500"
                                   />
                                   Yoga game
                              </ListItem>
                              <ListItem>
                                   {' '}
                                   <ListIcon
                                        as={BsArrowRightCircleFill}
                                        color="aygreen.500"
                                   />
                                   Group activity / Art & Craft
                              </ListItem>
                              <ListItem>
                                   {' '}
                                   <ListIcon
                                        as={BsArrowRightCircleFill}
                                        color="aygreen.500"
                                   />
                                   Sattvik snack / Healthy snack
                              </ListItem>
                         </List>
                    </Box>
               </Box>
               <Box maxW="80vw" margin="0 auto" py={{ base: '5', md: '10' }}>
                    <Heading>
                         WHY SHOULD I ENROLL MY KIDS FOR THE SUMMER KID’S CAMP?
                    </Heading>
               </Box>
               <Box bg="gray.50">
                    <Box
                         maxW="container.lg"
                         margin="0 auto"
                         py={{ base: '5', md: '10' }}
                         px="5"
                    >
                         <Box>
                              <Heading
                                   textTransform="uppercase"
                                   fontSize="2xl"
                                   mb={3}
                              >
                                   Register Now
                              </Heading>
                              <KidsYogaForm />
                         </Box>
                    </Box>
               </Box>
          </Box>
     );
}

export default KidsYogaCamp;
KidsYogaCamp.Layout = HomeLayout;
