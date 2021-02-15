import React, { useEffect, useState } from 'react';
import {
     Avatar,
     Box,
     Button,
     Center,
     Flex,
     Heading,
     HStack,
     Icon,
     IconButton,
     Menu,
     MenuButton,
     MenuItem,
     MenuList
} from '@chakra-ui/react';
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '@/lib/auth';
import { FiFacebook } from 'react-icons/fi';
import { AiOutlineUser } from 'react-icons/ai';
import { MotionButton } from '../shared/MotionElements';
import { GiHamburgerMenu } from 'react-icons/gi';
import NavbarMobile from './NavabarMobile/NavbarMobile';

const Navbar = () => {
     const { user, signout, loading } = useAuth();
     const router = useRouter();

     const signOut = (redirect) => {
          signout(redirect);
     };
     return (
          <>
               <Center
                    boxShadow="md"
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
                                        color="primaryGreen"
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
                                        <Link
                                             href="/offerings/space"
                                             as="space"
                                        >
                                             <MenuItem
                                                  _hover={{ bg: 'aygreen.50' }}
                                             >
                                                  AthaYog Space
                                             </MenuItem>
                                        </Link>

                                        <Link
                                             href="/offerings/shikshana"
                                             as="shikshana"
                                        >
                                             <MenuItem
                                                  _hover={{ bg: 'aygreen.50' }}
                                             >
                                                  AthaYog Shikshana Pada
                                             </MenuItem>
                                        </Link>
                                        <Link
                                             href="/offerings/online"
                                             as="online"
                                        >
                                             <MenuItem
                                                  _hover={{ bg: 'aygreen.50' }}
                                             >
                                                  AthaYog Online
                                             </MenuItem>
                                        </Link>
                                        <Link
                                             href="/offerings/personal"
                                             as="personal"
                                        >
                                             <MenuItem
                                                  _hover={{ bg: 'aygreen.50' }}
                                             >
                                                  AthaYog Personal
                                             </MenuItem>
                                        </Link>
                                        <Link
                                             href="/offerings/workshops"
                                             as="workshops"
                                        >
                                             <MenuItem
                                                  _hover={{ bg: 'aygreen.50' }}
                                             >
                                                  AthaYog Workshops
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
                              <NavbarMobile />
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
                                        <MenuButton
                                             as={Avatar}
                                             bg="aygreen.500"
                                             size="sm"
                                             fontSize="md"
                                             icon={<AiOutlineUser />}
                                             style={{ paddingLeft: '0.5rem' }}
                                        ></MenuButton>
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
          </>
     );
};

export default Navbar;
