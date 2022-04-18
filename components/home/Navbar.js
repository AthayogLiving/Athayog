import { useAuth } from '@/lib/auth';
import {
     Avatar,
     Box,
     Button,
     Center,
     chakra,
     CloseButton,
     Drawer,
     DrawerBody,
     DrawerCloseButton,
     DrawerContent,
     DrawerFooter,
     DrawerHeader,
     DrawerOverlay,
     Flex,
     HStack,
     Menu,
     MenuButton,
     MenuItem,
     MenuList,
     Text,
     useDisclosure,
     VStack
} from '@chakra-ui/react';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from 'public/Logo_Filled.png';
import React, { useEffect, useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { useMediaQuery } from 'react-responsive';
import { MotionButton } from '../shared/MotionElements';

const Navbar = () => {
     const { user, signout, loading } = useAuth();
     const router = useRouter();
     const { isOpen, onOpen, onClose } = useDisclosure();
     const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

     const [offer, showOffer] = useState(true);
     const signOut = (redirect) => {
          onClose();
          signout(redirect);
     };

     return (
          <Box zIndex={3} position="fixed" width="100%">
               {offer && router.asPath !== '/kids-yoga-camp' && (
                    <Box
                         textAlign="center"
                         bg="black"
                         textColor="white"
                         width="100%"
                    >
                         <Text
                              fontWeight="medium"
                              fontSize={{
                                   base: 'sm',
                                   md: 'normal'
                              }}
                              padding="2"
                         >
                              Kids Yoga Camp Registration is LIVE!{' '}
                              <chakra.span
                                   borderBottom="1px"
                                   textColor="green.500"
                              >
                                   <Link href="/kids-yoga-camp">Check Now</Link>
                              </chakra.span>
                         </Text>
                         <CloseButton
                              position="absolute"
                              display={{ base: 'none', md: 'block' }}
                              top="0.5"
                              right="2"
                              onClick={() => showOffer(false)}
                         />
                    </Box>
               )}

               <Center
                    boxShadow="sm"
                    bg="primaryWhite"
                    shadow="base"
                    transition="linear"
                    transform="initial"
                    style={{ backdropFilter: 'blur(5px)' }}
                    width="100%"
                    height={{ base: '4rem', md: '4rem', lg: '4rem' }}
               >
                    <Flex
                         alignItems="center"
                         justifyContent="space-between"
                         minWidth="80%"
                    >
                         <Flex
                              display={{
                                   base: 'flex',
                                   md: 'flex',
                                   lg: 'none'
                              }}
                         >
                              <HiMenu fontSize="1.2rem" onClick={onOpen} />
                         </Flex>
                         <Flex alignItems="center">
                              <Link passHref href="/">
                                   <Flex alignItems="center" cursor="pointer">
                                        <Box>
                                             <Image
                                                  src={Logo}
                                                  alt="logo"
                                                  height={
                                                       isTabletOrMobile
                                                            ? 25
                                                            : 35
                                                  }
                                                  width={
                                                       isTabletOrMobile
                                                            ? 25
                                                            : 35
                                                  }
                                             />
                                        </Box>

                                        <Text
                                             color="#46563E"
                                             fontSize={{
                                                  base: 'xl',
                                                  md: '2xl',
                                                  lg: '3xl'
                                             }}
                                             ml={2}
                                             fontWeight="normal"
                                             cursor="pointer"
                                             letterSpacing="-2.5px"
                                        >
                                             Atha Yog
                                        </Text>
                                   </Flex>
                              </Link>

                              <HStack
                                   ml="5rem"
                                   ml={{ base: '3rem', md: '3rem', lg: '5rem' }}
                                   variant="ghost"
                                   spacing="6"
                                   size="sm"
                                   color="primaryBlack"
                                   display={{
                                        base: 'none',
                                        md: 'none',
                                        lg: 'block'
                                   }}
                                   mr="1rem"
                              >
                                   <Link href="/">
                                        <MotionButton
                                             fontWeight="normal"
                                             fontSize="md"
                                             bg="transparent"
                                             variant="ghost"
                                             _hover={{
                                                  bg: 'aygreen.100'
                                             }}
                                             _active={{
                                                  bg: 'aygreen.100',

                                                  borderColor: '#bec3c9'
                                             }}
                                             whileHover={{
                                                  transition: { duration: 1 }
                                             }}
                                             whileTap={{ scale: 0.9 }}
                                             isActive={
                                                  router.pathname == '/'
                                                       ? true
                                                       : ''
                                             }
                                        >
                                             Home
                                        </MotionButton>
                                   </Link>

                                   <Link href="/about" as="about">
                                        <Button
                                             fontWeight="normal"
                                             fontSize="md"
                                             variant="ghost"
                                             bg="transparent"
                                             _hover={{
                                                  bg: 'aygreen.100'
                                             }}
                                             _active={{
                                                  bg: 'aygreen.100',
                                                  transform: 'scale(0.98)',
                                                  borderColor: '#bec3c9'
                                             }}
                                             isActive={
                                                  router.pathname == '/about'
                                                       ? true
                                                       : ''
                                             }
                                        >
                                             About
                                        </Button>
                                   </Link>
                                   <Link href="/classes">
                                        <Button
                                             fontWeight="normal"
                                             fontSize="md"
                                             variant="ghost"
                                             bg="transparent"
                                             _hover={{
                                                  bg: 'aygreen.100'
                                             }}
                                             _active={{
                                                  bg: 'aygreen.100',
                                                  transform: 'scale(0.98)',
                                                  borderColor: '#bec3c9'
                                             }}
                                             isActive={
                                                  router.pathname == '/classes'
                                                       ? true
                                                       : ''
                                             }
                                        >
                                             Classes
                                        </Button>
                                   </Link>
                                   <Link href="/courses">
                                        <Button
                                             fontWeight="normal"
                                             fontSize="md"
                                             variant="ghost"
                                             bg="transparent"
                                             _hover={{
                                                  bg: 'aygreen.100'
                                             }}
                                             _active={{
                                                  bg: 'aygreen.100',
                                                  transform: 'scale(0.98)',
                                                  borderColor: '#bec3c9'
                                             }}
                                             isActive={
                                                  router.pathname == '/courses'
                                                       ? true
                                                       : ''
                                             }
                                        >
                                             Courses
                                        </Button>
                                   </Link>

                                   {/* <SMenu
                                        menuButton={
                                             <SMenuButton>
                                                  Offerings <ChevronDownIcon />
                                             </SMenuButton>
                                        }
                                        transition
                                   >
                                        <SMenuItem
                                             onClick={() =>
                                                  router.push(
                                                       '/offerings/space'
                                                  )
                                             }
                                        >
                                             AthaYog Space
                                        </SMenuItem>

                                        <SMenuItem
                                             onClick={() =>
                                                  router.push(
                                                       '/offerings/online'
                                                  )
                                             }
                                        >
                                             AthaYog Online
                                        </SMenuItem>
                                        <SMenuItem
                                             onClick={() =>
                                                  router.push(
                                                       '/offerings/personal'
                                                  )
                                             }
                                        >
                                             AthaYog Personal
                                        </SMenuItem>
                                        <SMenuItem
                                             onClick={() =>
                                                  router.push(
                                                       '/offerings/workshops'
                                                  )
                                             }
                                        >
                                             AthaYog Workshops
                                        </SMenuItem>
                                        <SMenuItem
                                             onClick={() =>
                                                  router.push(
                                                       '/offerings/chikitsa'
                                                  )
                                             }
                                        >
                                             AthaYog Chikitsa
                                        </SMenuItem>
                                        <SMenuItem
                                             onClick={() =>
                                                  router.push(
                                                       '/offerings/onsite'
                                                  )
                                             }
                                        >
                                             AthaYog Onsite
                                        </SMenuItem>
                                        <SSubMenu label="AthaYog Shikshana Pada">
                                             <SMenuItem
                                                  onClick={() =>
                                                       router.push(
                                                            '/offerings/shikshana'
                                                       )
                                                  }
                                             >
                                                  Shikshana Pada
                                             </SMenuItem>
                                            
                                             <SMenuItem
                                                  onClick={() =>
                                                       router.push(
                                                            '/offerings/shikshana/yic-yoga-instructor-course'
                                                       )
                                                  }
                                             >
                                                  YIC - Yoga Instructor course
                                             </SMenuItem>
                                             <SMenuItem
                                                  onClick={() =>
                                                       router.push(
                                                            '/offerings/shikshana/ryt-200-course'
                                                       )
                                                  }
                                             >
                                                  RYT - 200 courses
                                             </SMenuItem>
                                             <SMenuItem
                                                  onClick={() =>
                                                       router.push(
                                                            '/offerings/shikshana/short-course'
                                                       )
                                                  }
                                             >
                                                  Short courses
                                             </SMenuItem>
                                             <SMenuItem
                                                  onClick={() =>
                                                       router.push(
                                                            '/offerings/shikshana/special-events'
                                                       )
                                                  }
                                             >
                                                  Special Events
                                             </SMenuItem>
                                             <SMenuItem
                                                  onClick={() =>
                                                       router.push(
                                                            '/offerings/shikshana/athayog-sadhana'
                                                       )
                                                  }
                                             >
                                                  Athayog Sadhana
                                             </SMenuItem>
                                             <SMenuItem
                                                  onClick={() =>
                                                       router.push(
                                                            '/offerings/shikshana/graduates'
                                                       )
                                                  }
                                             >
                                                  RYT 200 Graduates
                                             </SMenuItem>
                                        </SSubMenu>
                                   </SMenu> */}
                              </HStack>

                              <HStack
                                   variant="ghost"
                                   spacing="6"
                                   size="sm"
                                   ml={2}
                                   color="primaryBlack"
                                   mr="1rem"
                              ></HStack>
                         </Flex>

                         <Flex
                              display={{ base: 'none', md: 'none', lg: 'flex' }}
                         >
                              <Link href="/register/trial">
                                   <Button
                                        bg="aygreen.100"
                                        _hover={{
                                             bg: 'aygreen.200'
                                        }}
                                        variant="solid"
                                        size="sm"
                                        fontSize="md"
                                        color="gray.700"
                                        mr={10}
                                        rounded="md"
                                        px={8}
                                        py={4}
                                   >
                                        Free Trial
                                   </Button>
                              </Link>

                              {user ? (
                                   <Menu>
                                        <MenuButton size="sm">
                                             <Avatar
                                                  name={user?.name}
                                                  size="sm"
                                             />
                                        </MenuButton>
                                        <MenuList
                                             fontSize="md"
                                             bg="aygreen.100"
                                        >
                                             <Link passHref href="/account">
                                                  <MenuItem>
                                                       My Account
                                                  </MenuItem>
                                             </Link>

                                             <MenuItem
                                                  onClick={() => signOut('/')}
                                             >
                                                  Logout
                                             </MenuItem>
                                        </MenuList>
                                   </Menu>
                              ) : (
                                   <Link
                                        passHref
                                        href="/account/[signup]"
                                        as="/account/signup"
                                   >
                                        <Button
                                             bg="aygray.100"
                                             color="primaryDarkGray"
                                             variant="solid"
                                             size="sm"
                                             fontSize="md"
                                             rounded="md"
                                             px={8}
                                             py={4}
                                        >
                                             Join Us
                                        </Button>
                                   </Link>
                              )}
                         </Flex>
                    </Flex>
               </Center>

               <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                    <DrawerOverlay zIndex="12000">
                         <DrawerContent>
                              <DrawerCloseButton />
                              <DrawerHeader>Navigation</DrawerHeader>

                              <DrawerBody>
                                   <VStack spacing={5} align="stretch">
                                        <Link passHref href="/">
                                             <Button
                                                  isActive={
                                                       router.pathname == '/'
                                                            ? true
                                                            : ''
                                                  }
                                                  onClick={onClose}
                                                  rounded="md"
                                                  variant="ghost"
                                                  colorScheme="aygreen"
                                                  justifyContent="left"
                                             >
                                                  Home
                                             </Button>
                                        </Link>
                                        <Link passHref href="/about">
                                             <Button
                                                  onClick={onClose}
                                                  isActive={
                                                       router.pathname ==
                                                       '/about'
                                                            ? true
                                                            : ''
                                                  }
                                                  rounded="md"
                                                  variant="ghost"
                                                  colorScheme="aygreen"
                                                  justifyContent="left"
                                             >
                                                  About Us
                                             </Button>
                                        </Link>

                                        <Link passHref href="/classes">
                                             <Button
                                                  onClick={onClose}
                                                  isActive={
                                                       router.pathname ==
                                                       '/classes'
                                                            ? true
                                                            : ''
                                                  }
                                                  rounded="md"
                                                  variant="ghost"
                                                  colorScheme="aygreen"
                                                  justifyContent="left"
                                             >
                                                  Athayog Classes
                                             </Button>
                                        </Link>
                                        <Link passHref href="/courses">
                                             <Button
                                                  onClick={onClose}
                                                  isActive={
                                                       router.pathname ==
                                                       '/courses'
                                                            ? true
                                                            : ''
                                                  }
                                                  rounded="md"
                                                  variant="ghost"
                                                  colorScheme="aygreen"
                                                  justifyContent="left"
                                             >
                                                  Athayog Courses
                                             </Button>
                                        </Link>
                                   </VStack>
                              </DrawerBody>

                              <DrawerFooter>
                                   {user ? (
                                        <Menu>
                                             <MenuButton size="sm">
                                                  <Avatar
                                                       name={user?.name}
                                                       size="sm"
                                                  />
                                             </MenuButton>
                                             <MenuList
                                                  fontSize="md"
                                                  bg="aygreen.100"
                                             >
                                                  <Link
                                                       passHref
                                                       href="/account"
                                                  >
                                                       <MenuItem
                                                            onClick={onClose}
                                                       >
                                                            Account
                                                       </MenuItem>
                                                  </Link>

                                                  <MenuItem
                                                       onClick={() =>
                                                            signOut('/')
                                                       }
                                                  >
                                                       Logout
                                                  </MenuItem>
                                             </MenuList>
                                        </Menu>
                                   ) : (
                                        <Link
                                             passHref
                                             href="/account/[signup]"
                                             as="/account/signup"
                                        >
                                             <Button
                                                  colorScheme="aygreen"
                                                  fontSize="md"
                                                  rounded="md"
                                                  onClick={onClose}
                                             >
                                                  Join Us
                                             </Button>
                                        </Link>
                                   )}
                              </DrawerFooter>
                         </DrawerContent>
                    </DrawerOverlay>
               </Drawer>
          </Box>
     );
};

export default Navbar;
