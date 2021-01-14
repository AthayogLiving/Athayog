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

function DashboardNavbar({ user, signout, loading }) {
     const [logout, setLogout] = useState(false);
     const signOutAdmin = (redirect) => {
          setLogout(true);
          signout(redirect);
     };
     return (
          <Flex
               justifyContent="column"
               justifyContent="space-between"
               padding="1rem"
               alignItems="center"
               margin="2rem"
               boxShadow="sm"
               rounded="md"
               bg="white"
          >
               <Skeleton isLoaded={!loading} w="100%" lineHeight={1.2}>
                    <Flex
                         direction="column"
                         justifyContent="flex-end"
                         width="100%"
                    >
                         <Text
                              fontWeight="400"
                              fontSize="md"
                              display="inline-block"
                         >
                              Hi Harsimran
                         </Text>

                         <Text
                              display="inline-block"
                              fontSize="md"
                              fontWeight="400"
                              color="gray.500"
                         >
                              {user?.email}
                         </Text>
                    </Flex>
               </Skeleton>
               <Box d="flex" alignItems="center">
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
                                   Logout
                              </MenuItem>
                         </MenuList>
                    </Menu>
               </Box>
          </Flex>
     );
}

export default DashboardNavbar;
