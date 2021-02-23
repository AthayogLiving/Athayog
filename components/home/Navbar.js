import React, { useState } from 'react';
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
     VStack,
     useDisclosure
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '@/lib/auth';

import { AiOutlineUser } from 'react-icons/ai';
import { MotionBox, MotionButton } from '../shared/MotionElements';
import { HiMenu, HiOutlineX } from 'react-icons/hi';
import useScrollBlock from '@/components/helper/scrollBlock';
import { motion, useCycle } from 'framer-motion';
import { isMobile } from 'react-device-detect';

const Navbar = () => {
     const { user, signout, loading } = useAuth();
     const router = useRouter();

     const [blockScroll, allowScroll] = useScrollBlock();

     const [open, onOpen] = useCycle(false, true);

     const onHamburgerOpen = () => {
          onOpen(!open);
          !open ? blockScroll() : allowScroll();
     };

     const signOut = (redirect) => {
          signout(redirect);
     };

     const navStyle = {
          open: {
               display: 'block',
               opacity: 1,
               visibility: 'visible',
               transition: {
                    staggerChildren: 0.17,
                    delayChildren: 0.2
               }
          },
          closed: {
               display: 'none',
               opacity: 0,
               transition: {
                    staggerChildren: 0.05,
                    staggerDirection: -1,
                    when: 'afterChildren'
               }
          }
     };

     return (
          <>
               <Center
                    boxShadow={open ? 'none' : 'md'}
                    bg="primaryWhite"
                    transition="linear"
                    transform="initial"
                    style={{ backdropFilter: 'blur(5px)' }}
                    position="fixed"
                    transition="ease-in-out"
                    zIndex={3}
                    width="100%"
                    height={{ base: '4rem', md: '4rem', lg: '4rem' }}
               >
                    <Flex
                         alignItems="center"
                         justifyContent="space-between"
                         minWidth="80%"
                    >
                         <Flex alignItems="center">
                              <Link href="/">
                                   <Heading
                                        color={open ? 'white' : 'primaryGreen'}
                                        fontSize="2xl"
                                        fontWeight="normal"
                                        cursor="pointer"
                                   >
                                        Atha Yog
                                   </Heading>
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
                              </HStack>
                              <Menu matchWidth={true}>
                                   <MenuButton
                                        as={Button}
                                        fontWeight="normal"
                                        variat="ghost"
                                        fontSize="md"
                                        bg="primaryWhite"
                                        display={{
                                             base: 'none',
                                             md: 'none',
                                             lg: 'block'
                                        }}
                                        rightIcon={<ChevronDownIcon />}
                                   >
                                        Offerings
                                   </MenuButton>
                                   <MenuList bg="aygreen.100">
                                        <Link href="/offerings/space">
                                             <MenuItem
                                                  _hover={{ bg: 'aygreen.50' }}
                                             >
                                                  AthaYog Space
                                             </MenuItem>
                                        </Link>

                                        <Link href="/offerings/shikshana">
                                             <MenuItem
                                                  _hover={{ bg: 'aygreen.50' }}
                                             >
                                                  AthaYog Shikshana Pada
                                             </MenuItem>
                                        </Link>
                                        <Link href="/offerings/online">
                                             <MenuItem
                                                  _hover={{ bg: 'aygreen.50' }}
                                             >
                                                  AthaYog Online
                                             </MenuItem>
                                        </Link>
                                        <Link href="/offerings/personal">
                                             <MenuItem
                                                  _hover={{ bg: 'aygreen.50' }}
                                             >
                                                  AthaYog Personal
                                             </MenuItem>
                                        </Link>
                                        <Link href="/offerings/workshops">
                                             <MenuItem
                                                  _hover={{ bg: 'aygreen.50' }}
                                             >
                                                  AthaYog Workshops
                                             </MenuItem>
                                        </Link>
                                        <Link href="/offerings/chikitsa">
                                             <MenuItem
                                                  _hover={{ bg: 'aygreen.50' }}
                                             >
                                                  AthaYog Chikitsa
                                             </MenuItem>
                                        </Link>
                                        <Link href="/offerings/onsite">
                                             <MenuItem
                                                  _hover={{ bg: 'aygreen.50' }}
                                             >
                                                  AthaYog Onsite
                                             </MenuItem>
                                        </Link>
                                   </MenuList>
                              </Menu>

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
                              display={{
                                   base: 'flex',
                                   md: 'flex',
                                   lg: 'none'
                              }}
                         >
                              <HiMenu onClick={() => onHamburgerOpen()} />
                         </Flex>

                         <Flex
                              display={{ base: 'none', md: 'none', lg: 'flex' }}
                         >
                              <Button
                                   bg="aygreen.100"
                                   color="primaryDarkGray"
                                   variant="solid"
                                   size="sm"
                                   fontSize="md"
                                   mr={10}
                                   rounded="md"
                                   px={8}
                                   py={4}
                              >
                                   Free Trial
                              </Button>
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
                                                  <MenuItem>Account</MenuItem>
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
                                             Sign In
                                        </Button>
                                   </Link>
                              )}
                         </Flex>
                    </Flex>
               </Center>

               <MotionBox
                    height="100vh"
                    bg="#8AB08D"
                    width="100vw"
                    padding="3rem 3rem"
                    zIndex={10000}
                    position="fixed"
                    variants={navStyle}
                    className="navbarMobile"
                    display="none"
                    animate={open ? 'open' : 'closed'}
               >
                    <Flex justifyContent="right">
                         <HiOutlineX onClick={() => onHamburgerOpen()} />
                    </Flex>

                    <Flex
                         justifyContent="space-between"
                         direction="column"
                         height="100%"
                    >
                         <Flex alignItems="center" direction="column">
                              <VStack
                                   variant="ghost"
                                   spacing="6"
                                   size="sm"
                                   w="100%"
                                   mt={10}
                                   alignItems="center"
                                   color="white"
                              >
                                   <Link href="/">
                                        <MotionButton
                                             fontWeight="normal"
                                             fontSize="md"
                                             width="100%"
                                             variant="ghost"
                                             color="white"
                                             colorScheme="aygreen"
                                             onClick={() => onHamburgerOpen()}
                                             whileHover={{
                                                  transition: {
                                                       duration: 1
                                                  }
                                             }}
                                             _active={{
                                                  color: 'black',
                                                  bg: 'aygreen.100'
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
                                             color="white"
                                             onClick={() => onHamburgerOpen()}
                                             width="100%"
                                             variant="ghost"
                                             _active={{
                                                  color: 'black',
                                                  bg: 'aygreen.100'
                                             }}
                                             colorScheme="aygreen"
                                             isActive={
                                                  router.pathname == '/about'
                                                       ? true
                                                       : ''
                                             }
                                        >
                                             About
                                        </Button>
                                   </Link>
                              </VStack>

                              <Menu matchWidth={true} fixed={true}>
                                   <MenuButton
                                        as={Button}
                                        fontWeight="normal"
                                        width="100%"
                                        color="white"
                                        variant="ghost"
                                        colorScheme="aygreen"
                                        fontSize="md"
                                        boxShadow="none"
                                        iconSpacing={-5}
                                        _active={{
                                             color: 'black',
                                             bg: 'aygreen.100'
                                        }}
                                        mt={6}
                                        rightIcon={<ChevronDownIcon />}
                                   >
                                        Offerings
                                   </MenuButton>
                                   <MenuList
                                        bg="#8AB08D"
                                        borderColor="transparent"
                                        textAlign="center"
                                        boxShadow="none"
                                   >
                                        <Link href="/offerings/space">
                                             <MenuItem
                                                  display="block"
                                                  textAlign="center"
                                                  rounded="lg"
                                                  onClick={() =>
                                                       onHamburgerOpen()
                                                  }
                                             >
                                                  AthaYog Space
                                             </MenuItem>
                                        </Link>

                                        <Link href="/offerings/shikshana">
                                             <MenuItem
                                                  display="block"
                                                  textAlign="center"
                                                  onClick={() =>
                                                       onHamburgerOpen()
                                                  }
                                             >
                                                  AthaYog Shikshana Pada
                                             </MenuItem>
                                        </Link>
                                        <Link href="/offerings/online">
                                             <MenuItem
                                                  display="block"
                                                  textAlign="center"
                                                  onClick={() =>
                                                       onHamburgerOpen()
                                                  }
                                             >
                                                  AthaYog Online
                                             </MenuItem>
                                        </Link>
                                        <Link href="/offerings/personal">
                                             <MenuItem
                                                  display="block"
                                                  textAlign="center"
                                                  onClick={() =>
                                                       onHamburgerOpen()
                                                  }
                                             >
                                                  AthaYog Personal
                                             </MenuItem>
                                        </Link>
                                        <Link href="/offerings/workshops">
                                             <MenuItem
                                                  display="block"
                                                  onClick={() =>
                                                       onHamburgerOpen()
                                                  }
                                                  textAlign="center"
                                             >
                                                  AthaYog Workshops
                                             </MenuItem>
                                        </Link>
                                        <Link href="/offerings/chikitsa">
                                             <MenuItem
                                                  display="block"
                                                  textAlign="center"
                                                  onClick={() =>
                                                       onHamburgerOpen()
                                                  }
                                             >
                                                  AthaYog Chikitsa
                                             </MenuItem>
                                        </Link>
                                        <Link href="/offerings/onsite">
                                             <MenuItem
                                                  onClick={() =>
                                                       onHamburgerOpen()
                                                  }
                                                  display="block"
                                                  textAlign="center"
                                             >
                                                  AthaYog Onsite
                                             </MenuItem>
                                        </Link>
                                   </MenuList>
                              </Menu>

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
                              direction="row"
                              justifyContent="center"
                              alignItems="center"
                         >
                              {' '}
                              {user ? (
                                   <Menu matchWidth={true} fixed={true}>
                                        <MenuButton
                                             as={Button}
                                             fontWeight="normal"
                                             width="100%"
                                             color="white"
                                             variant="ghost"
                                             colorScheme="aygreen"
                                             fontSize="md"
                                             boxShadow="none"
                                             _active={{
                                                  bg: 'transparent'
                                             }}
                                             style={{
                                                  paddingLeft: '0.5rem'
                                             }}
                                        >
                                             {user?.name}
                                        </MenuButton>
                                        <MenuList
                                             borderColor="transparent"
                                             textAlign="center"
                                             boxShadow="none"
                                             fontSize="md"
                                             bg="aygreen.100"
                                             width="100%"
                                        >
                                             <Link href="/account">
                                                  <MenuItem
                                                       display="block"
                                                       textAlign="center"
                                                  >
                                                       Account
                                                  </MenuItem>
                                             </Link>

                                             <MenuItem
                                                  display="block"
                                                  textAlign="center"
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
                                             Sign In
                                        </Button>
                                   </Link>
                              )}
                         </Flex>
                    </Flex>
               </MotionBox>
          </>
     );
};

export default Navbar;
