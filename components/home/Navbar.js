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
     Text
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '@/lib/auth';
import { MotionButton } from '../shared/MotionElements';
import { HiMenu } from 'react-icons/hi';

const Navbar = () => {
     const { user, signout, loading } = useAuth();
     const router = useRouter();
     const { isOpen, onOpen, onClose } = useDisclosure();

     const signOut = (redirect) => {
          onClose();
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
                                   <Text
                                        color="primaryGreen"
                                        fontSize={{
                                             base: 'xl',
                                             md: '2xl',
                                             lg: '3xl'
                                        }}
                                        fontWeight="normal"
                                        cursor="pointer"
                                        letterSpacing="-2.5px"
                                   >
                                        Atha Yog
                                   </Text>
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
                              </HStack>
                              <Menu matchWidth={true}>
                                   <MenuButton
                                        as={Button}
                                        fontWeight="normal"
                                        variat="ghost"
                                        fontSize="md"
                                        bg="primaryWhite"
                                        _hover={{
                                             bg: 'aygreen.100'
                                        }}
                                        _active={{
                                             bg: 'aygreen.100',
                                             transform: 'scale(0.98)',
                                             borderColor: '#bec3c9'
                                        }}
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
                                             Sign In
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
                                        <Link href="/offerings/space">
                                             <Button
                                                  onClick={onClose}
                                                  isActive={
                                                       router.pathname ==
                                                       '/offerings/space'
                                                            ? true
                                                            : ''
                                                  }
                                                  rounded="md"
                                                  variant="ghost"
                                                  colorScheme="aygreen"
                                                  justifyContent="left"
                                             >
                                                  Athayog Space
                                             </Button>
                                        </Link>
                                        <Link href="/offerings/shikshana">
                                             <Button
                                                  onClick={onClose}
                                                  isActive={
                                                       router.pathname ==
                                                       '/offerings/shikshana'
                                                            ? true
                                                            : ''
                                                  }
                                                  rounded="md"
                                                  variant="ghost"
                                                  colorScheme="aygreen"
                                                  justifyContent="left"
                                             >
                                                  Athayog Shikshana Pada
                                             </Button>
                                        </Link>
                                        <Link href="/offerings/online">
                                             <Button
                                                  onClick={onClose}
                                                  isActive={
                                                       router.pathname ==
                                                       '/offerings/online'
                                                            ? true
                                                            : ''
                                                  }
                                                  rounded="md"
                                                  variant="ghost"
                                                  colorScheme="aygreen"
                                                  justifyContent="left"
                                             >
                                                  Athayog Online
                                             </Button>
                                        </Link>
                                        <Link href="/offerings/personal">
                                             <Button
                                                  onClick={onClose}
                                                  isActive={
                                                       router.pathname ==
                                                       '/offerings/personal'
                                                            ? true
                                                            : ''
                                                  }
                                                  rounded="md"
                                                  variant="ghost"
                                                  colorScheme="aygreen"
                                                  justifyContent="left"
                                             >
                                                  Athayog Personal
                                             </Button>
                                        </Link>
                                        <Link href="/offerings/workshops">
                                             <Button
                                                  onClick={onClose}
                                                  isActive={
                                                       router.pathname ==
                                                       '/offerings/workshops'
                                                            ? true
                                                            : ''
                                                  }
                                                  rounded="md"
                                                  variant="ghost"
                                                  colorScheme="aygreen"
                                                  justifyContent="left"
                                             >
                                                  Athayog Workshops
                                             </Button>
                                        </Link>
                                        <Link href="/offerings/chikitsa">
                                             <Button
                                                  onClick={onClose}
                                                  isActive={
                                                       router.pathname ==
                                                       '/offerings/chikitsa'
                                                            ? true
                                                            : ''
                                                  }
                                                  rounded="md"
                                                  variant="ghost"
                                                  colorScheme="aygreen"
                                                  justifyContent="left"
                                             >
                                                  Athayog Chikitsa
                                             </Button>
                                        </Link>
                                        <Link href="/offerings/onsite">
                                             <Button
                                                  onClick={onClose}
                                                  isActive={
                                                       router.pathname ==
                                                       '/offerings/onsite'
                                                            ? true
                                                            : ''
                                                  }
                                                  rounded="md"
                                                  variant="ghost"
                                                  colorScheme="aygreen"
                                                  justifyContent="left"
                                             >
                                                  Athayog Onsite
                                             </Button>
                                        </Link>
                                   </VStack>
                              </DrawerBody>

                              <DrawerFooter>
                                   <Button
                                        variant="outline"
                                        mr={3}
                                        onClick={onClose}
                                   >
                                        Cancel
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
                                                  Sign In
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
