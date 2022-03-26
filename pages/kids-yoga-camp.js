import React from 'react';
import HomeLayout from '@/components/layout/HomeLayout';
import {
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
     UnorderedList
} from '@chakra-ui/react';
import NavbarHelper from '@/components/shared/NavbarHelper';
import { MdCheckCircle } from 'react-icons/md';
import { FaDotCircle } from 'react-icons/fa';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import KidsYogaForm from '@/components/shared/KidsYogaForm';

function KidsYogaCamp() {
     return (
          <Box>
               <NavbarHelper />
               <Flex
                    height="60vh"
                    justifyContent="center"
                    alignItems="center"
                    bgImage="linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url('https://images.unsplash.com/photo-1543858828-7cf1a9beb95c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')"
                    bgSize="cover"
                    bgPosition="center"
                    direction="column"
               >
                    <Heading fontWeight="bold" fontSize="4xl" textColor="white">
                         Kids Yoga Camp
                    </Heading>
                    <Button mt="3" colorScheme="green">
                         Register Now
                    </Button>
               </Flex>

               <Box
                    maxW="container.lg"
                    margin="0 auto"
                    py={{ base: '5', md: '10' }}
                    px="5"
               >
                    <Text maxW="container.lg" margin="0 auto">
                         Lorem ipsum dolor sit amet consectetur adipisicing
                         elit. Vel eos dicta ullam obcaecati. Ut provident
                         doloribus dolorem sint corrupti quas esse quae, id
                         iure, architecto sequi laudantium necessitatibus saepe
                         accusantium eum unde quisquam est. Unde similique, et,
                         labore, excepturi dignissimos quas necessitatibus
                         voluptatibus aliquam repudiandae provident error magnam
                         aperiam adipisci?
                    </Text>
                    <Stack
                         border="1.5px solid"
                         borderColor="gray.100"
                         py="3"
                         boxShadow="base"
                         px="5"
                         rounded="xl"
                         spacing={{ base: '5', md: '8' }}
                         width="100%"
                         divider={<StackDivider borderColor="gray.300" />}
                         mt="8"
                         align={{ base: 'baseline', md: 'center' }}
                         justifyContent={{
                              base: 'space-between',
                              md: 'space-evenly'
                         }}
                         direction={{ base: 'column', md: 'row' }}
                    >
                         <Flex direction="column">
                              <Box fontWeight="bold">Age</Box>{' '}
                              <Box textColor="gray.600">6 - 11yr</Box>
                         </Flex>
                         <Flex direction="column">
                              <Box fontWeight="bold">Date</Box>{' '}
                              <Box textColor="gray.600">2nd May - 13th May</Box>
                         </Flex>
                         <Flex direction="column">
                              <Box fontWeight="bold">Time</Box>{' '}
                              <Box textColor="gray.600">11am - 1pm </Box>
                         </Flex>
                         <Flex direction="column">
                              <Box fontWeight="bold">Location</Box>
                              <Box textColor="gray.600">
                                   Indiranagar / KR Puram / Online
                              </Box>
                         </Flex>
                    </Stack>

                    <Box mt={16}>
                         <Heading textTransform="uppercase" fontSize="2xl">
                              Classes includes{' '}
                         </Heading>
                         <List mt={3} spacing={2}>
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
