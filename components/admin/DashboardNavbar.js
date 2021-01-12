import {
     Box,
     Flex,
     Button,
     Avatar,
     Menu,
     MenuButton,
     MenuList,
     MenuItem,
     Text,
     HStack,
     Spacer,
     Skeleton,
     Heading
} from '@chakra-ui/react';
import { DateTime } from 'luxon';
import React from 'react';
import BrandLogo from 'public/logo.png';

function DashboardShell({ user, signout, loading }) {
     return (
          <Flex
               justifyContent="column"
               justifyContent="space-between"
               padding="2rem"
               alignItems="center"
          >
               <Box>
                    <Skeleton isLoaded={!loading}>
                         <Text fontWeight="medium" fontSize="xl">
                              Hi
                              <Text
                                   display="inline-block"
                                   fontWeight="bold"
                                   ml={2}
                              >
                                   {user?.email}
                              </Text>
                         </Text>
                    </Skeleton>
               </Box>
               <Box d="flex" alignItems="center">
                    <Text mr={5} color="gray.600" fontWeight="medium">
                         {DateTime.local().setLocale('en').toFormat('dd MMMM')}
                    </Text>
                    <Menu isLazy={true}>
                         <MenuButton
                              size="sm"
                              name={user?.name}
                              bg="blue.800"
                              as={Avatar}
                         ></MenuButton>
                         <MenuList size="sm">
                              <MenuItem>Account</MenuItem>
                              <MenuItem onClick={() => signout('/admin')}>
                                   Logout
                              </MenuItem>
                         </MenuList>
                    </Menu>
               </Box>
          </Flex>
     );
}

export default DashboardShell;
