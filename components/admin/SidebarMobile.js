import { useAuth } from '@/lib/auth';
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
     Button,
     Drawer,
     DrawerBody,
     DrawerFooter,
     DrawerHeader,
     DrawerOverlay,
     useDisclosure,
     DrawerContent,
     DrawerCloseButton,
     Flex,
     Text,
     useColorModeValue,
     Menu,
     MenuButton,
     MenuItem,
     MenuList,
     Avatar
} from '@chakra-ui/react';
import Link from 'next/link';
import { Router, useRouter } from 'next/router';
import React, { useRef } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import Sidebar from './Sidebar';

const SidebarMobile = () => {
     const { user, signout, loading } = useAuth();
     const { isOpen, onOpen, onClose } = useDisclosure();
     const btnRef = useRef();
     const bg = useColorModeValue('white', 'gray.700');
     const color = useColorModeValue('gray.100', 'gray.700');
     Router.events.on('routeChangeStart', () => onClose());
     const router = useRouter();
     return (
          <>
               <Flex
                    width="100% "
                    bg={bg}
                    boxShadow="base"
                    height="100%"
                    justifyContent="space-between"
                    alignItems="center"
                    padding={5}
               >
                    <HamburgerIcon
                         ref={btnRef}
                         colorScheme="teal"
                         onClick={onOpen}
                    />

                    <Menu isLazy={true} closeOnSelect={false}>
                         <MenuButton size="sm">
                              <Avatar name={user?.name} size="sm" />
                         </MenuButton>
                         <MenuList size="sm">
                              <Link href="/admin/account">
                                   <MenuItem>Account</MenuItem>
                              </Link>

                              <MenuItem onClick={() => signOutAdmin('/admin')}>
                                   Logout
                              </MenuItem>
                         </MenuList>
                    </Menu>
               </Flex>
               <Drawer
                    isOpen={isOpen}
                    placement="left"
                    onClose={onClose}
                    finalFocusRef={btnRef}
               >
                    <DrawerOverlay>
                         <DrawerContent>
                              <DrawerCloseButton />
                              <Sidebar />
                         </DrawerContent>
                    </DrawerOverlay>
               </Drawer>
          </>
     );
};

export default SidebarMobile;
