import React from 'react';
import {
     Avatar,
     Button,
     Center,
     Flex,
     Heading,
     HStack,
     Menu,
     MenuButton,
     MenuItem,
     MenuList,
     Drawer,
     DrawerBody,
     DrawerFooter,
     DrawerHeader,
     DrawerOverlay,
     DrawerContent,
     DrawerCloseButton,
     useDisclosure,
     VStack,
     Box,
     Text,
     Accordion,
     AccordionItem,
     AccordionButton,
     AccordionPanel,
     AccordionIcon
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '@/lib/auth';
import { MotionButton } from '../shared/MotionElements';
import { HiMenu } from 'react-icons/hi';
import Logo from 'public/Logo_Filled.png';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import {
     Menu as SMenu,
     MenuItem as SMenuItem,
     MenuButton as SMenuButton,
     SubMenu as SSubMenu
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

const Navbar = () => {
     const { user, signout, loading } = useAuth();
     const router = useRouter();
     const { isOpen, onOpen, onClose } = useDisclosure();
     const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

     const signOut = (redirect) => {
          onClose();
          signout(redirect);
     };

     return (
          <>
               <Center
                    boxShadow="sm"
                    bg="primaryWhite"
                    transition="linear"
                    transform="initial"
                    style={{ backdropFilter: 'blur(5px)' }}
                    position="fixed"
                    zIndex={3}
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
                              <Link href="/">
                                   <Flex alignItems="center" cursor="pointer">
                                        <Image
                                             src={Logo}
                                             style={{ marginTop: '-1rem' }}
                                             height={isTabletOrMobile ? 25 : 35}
                                             width={isTabletOrMobile ? 25 : 35}
                                        />
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
                                             <Link href="/account">
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
                                        <Link href="/">
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
                                        <Link href="/about">
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

                                        <Link href="/classes">
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
                                        <Link href="/courses">
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
                                                  <Link href="/account">
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
          </>
     );
};

export default Navbar;
