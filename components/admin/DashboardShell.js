import { ChevronDownIcon } from '@chakra-ui/icons';
import {
     Box,
     Flex,
     Button,
     Avatar,
     Menu,
     MenuButton,
     MenuList,
     MenuItem
} from '@chakra-ui/react';
import React from 'react';

function DashboardShell({ user, signout }) {
     return (
          <Flex
               alignItems="center"
               bg="gray.100"
               px={5}
               py={3}
               justifyContent="space-between"
          >
               <Box d="flex" alignItems="center">
                    <Avatar size="sm" name={user?.name} bg="blue.800" />
               </Box>
               <Box d="flex" alignItems="center">
                    <Menu isLazy={true}>
                         <MenuButton
                              size="sm"
                              name={user?.name}
                              bg="blue.800"
                              as={Avatar}
                         ></MenuButton>
                         <MenuList size="sm">
                              <MenuItem>Account</MenuItem>
                              <MenuItem
                                   onClick={() => signout('/admin/dashboard')}
                              >
                                   Logout
                              </MenuItem>
                         </MenuList>
                    </Menu>
               </Box>
          </Flex>
     );
}

export default DashboardShell;
