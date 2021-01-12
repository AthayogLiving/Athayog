import { useState } from 'react';
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
     Heading,
     Spinner
} from '@chakra-ui/react';
import { DateTime } from 'luxon';
import React from 'react';
import BrandLogo from 'public/logo.png';

function DashboardShell({ user, signout, loading }) {
     const [logout, setLogout] = useState(false);
     const signOutAdmin = (redirect) => {
          setLogout(true);
          signout(redirect);
     };
     return (
          <Flex
               justifyContent="column"
               justifyContent="space-between"
               padding="2rem"
               alignItems="center"
          >
               <Box>
                    <Skeleton isLoaded={!loading}>
                         <Text
                              fontWeight="medium"
                              fontSize="xl"
                              display="inline-block"
                         >
                              Hi
                         </Text>
                         <Text
                              display="inline-block"
                              fontSize="xl"
                              fontWeight="bold"
                              ml={2}
                         >
                              {user?.email}
                         </Text>
                    </Skeleton>
               </Box>
               <Box d="flex" alignItems="center">
                    <Text mr={5} color="gray.600" fontWeight="medium">
                         {DateTime.local().setLocale('en').toFormat('dd MMMM')}
                    </Text>
                    <Menu isLazy={true} closeOnSelect={false}>
                         <MenuButton
                              size="sm"
                              name={user?.name}
                              bg="blue.800"
                              as={Avatar}
                         ></MenuButton>
                         <MenuList size="sm">
                              <MenuItem>Account</MenuItem>
                              <MenuItem onClick={() => signOutAdmin('/admin')}>
                                   {logout ? (
                                        <Spinner
                                             color="red.500"
                                             mr={2}
                                             size="sm"
                                        >
                                             Logging Out
                                        </Spinner>
                                   ) : (
                                        'Logout'
                                   )}
                              </MenuItem>
                         </MenuList>
                    </Menu>
               </Box>
          </Flex>
     );
}

export default DashboardShell;
