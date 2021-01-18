import { useState } from 'react';
import {
     Box,
     Flex,
     Avatar,
     Menu,
     MenuButton,
     MenuList,
     MenuItem,
     Text,
     Skeleton,
     useColorMode,
     Button,
     useColorModeValue
} from '@chakra-ui/react';
import { FiMoon, FiSun } from 'react-icons/fi';

function Navbar({ user, signout, loading }) {
     const [logout, setLogout] = useState(false);
     const { colorMode, toggleColorMode } = useColorMode();
     const bg = useColorModeValue('white', 'gray.800');
     const color = useColorModeValue('white', 'gray.800');

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
               bg={bg}
               boxShadow="sm"
               rounded="lg"
          >
               <Skeleton isLoaded={!loading} w="100%" lineHeight={1.2}>
                    <Flex
                         direction="column"
                         justifyContent="flex-end"
                         width="fit-content"
                    >
                         <Text
                              fontWeight="400"
                              fontSize="sm"
                              display="inline-block"
                         >
                              Hi Harsimran
                         </Text>

                         <Text
                              display="inline-block"
                              fontSize="sm"
                              fontWeight="400"
                              color="teal.500"
                         >
                              {user?.email}
                         </Text>
                    </Flex>
               </Skeleton>
               <Box d="flex" alignItems="center" bg={bg}>
                    <Button onClick={toggleColorMode} mr={5} size="sm">
                         {colorMode === 'light' ? <FiMoon /> : <FiSun />}
                    </Button>
                    <Menu isLazy={true} closeOnSelect={false}>
                         <MenuButton
                              size="sm"
                              name={user?.name}
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

export default Navbar;
