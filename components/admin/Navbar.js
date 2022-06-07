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
import { ChevronDownIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { useAuth } from '@/lib/auth';

function Navbar({ isTabletOrMobile }) {
     const { user, signout, loading } = useAuth();
     const [logout, setLogout] = useState(false);
     const { colorMode, toggleColorMode } = useColorMode();
     const bg = useColorModeValue('white', 'gray.800');
     const color = useColorModeValue('white', 'gray.800');

     if (!user) {
          return (
               <Flex
                    justifyContent="space-between"
                    padding="1rem"
                    alignItems="center"
                    margin="2rem"
                    bg={bg}
                    boxShadow="base"
                    height="4rem"
                    rounded="lg"
               >
                    <Flex
                         direction="column"
                         justifyContent="flex-end"
                         width="fit-content"
                         lineHeight={1.2}
                    >
                         <Skeleton></Skeleton>

                         <Skeleton></Skeleton>
                    </Flex>
               </Flex>
          );
     }

     const signOutAdmin = (redirect) => {
          setLogout(true);
          signout(redirect);
     };
     return (
          <Flex
               justifyContent="space-between"
               padding="1rem"
               alignItems="center"
               margin={isTabletOrMobile ? '0 2rem 2rem 2rem' : '2rem'}
               bg={bg}
               boxShadow="base"
               rounded="lg"
          >
               <Flex
                    direction="column"
                    justifyContent="flex-end"
                    width="fit-content"
                    lineHeight={1.2}
               >
                    <Text fontWeight="400" fontSize="sm" display="inline-block">
                         Hi {user?.name}
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

               <Box d="flex" alignItems="center" bg={bg}>
                    <Button
                         onClick={toggleColorMode}
                         mr={{ base: '0', md: 5, lg: 5 }}
                         size="sm"
                    >
                         {colorMode === 'light' ? <FiMoon /> : <FiSun />}
                    </Button>
                    {isTabletOrMobile ? null : (
                         <Menu isLazy={true} closeOnSelect={false}>
                              <MenuButton size="sm">
                                   <Avatar name={user?.name} size="sm" />
                              </MenuButton>
                              <MenuList size="sm">
                                   <Link href="/admin/account" passHref>
                                        <MenuItem>Account</MenuItem>
                                   </Link>

                                   <MenuItem
                                        onClick={() => signOutAdmin('/admin')}
                                   >
                                        Logout
                                   </MenuItem>
                              </MenuList>
                         </Menu>
                    )}
               </Box>
          </Flex>
     );
}

export default Navbar;
