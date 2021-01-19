import React from 'react';
import {
     Avatar,
     Button,
     ButtonGroup,
     Center,
     Flex,
     Heading,
     HStack,
     Menu,
     MenuButton,
     MenuDivider,
     MenuItem,
     MenuList,
     Text
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const Navbar = () => {
     return (
          <Center boxShadow="md" bg="primaryWhite">
               <Flex
                    width="80vw"
                    alignItems="center"
                    justifyContent="space-between"
                    py={4}
               >
                    <Flex alignItems="center">
                         <Heading
                              color="primaryGreen"
                              fontSize="2xl"
                              fontWeight="normal"
                         >
                              Atha Yog
                         </Heading>

                         <HStack
                              ml="6rem"
                              variant="ghost"
                              spacing="6"
                              size="sm"
                              color="primaryBlack"
                              mr="1rem"
                         >
                              <Button
                                   fontWeight="normal"
                                   fontSize="md"
                                   bg="primaryWhite"
                              >
                                   Home
                              </Button>
                              <Button
                                   fontWeight="normal"
                                   fontSize="md"
                                   bg="primaryWhite"
                              >
                                   Lorem
                              </Button>
                              <Button
                                   fontWeight="normal"
                                   fontSize="md"
                                   bg="primaryWhite"
                              >
                                   Lorem
                              </Button>
                         </HStack>
                         <Menu matchWidth={true}>
                              <MenuButton
                                   as={Button}
                                   fontWeight="normal"
                                   variat="ghost"
                                   fontSize="md"
                                   bg="primaryWhite"
                                   rightIcon={<ChevronDownIcon />}
                              >
                                   Actions
                              </MenuButton>
                              <MenuList bg="aygreen.100">
                                   <MenuItem>Download</MenuItem>
                                   <MenuItem>Create a Copy</MenuItem>
                                   <MenuItem>Mark as Draft</MenuItem>
                                   <MenuItem>Delete</MenuItem>
                              </MenuList>
                         </Menu>
                    </Flex>
                    <Flex>
                         <Button
                              bg="aygreen.100"
                              color="primaryDarkGray"
                              variant="solid"
                              size="sm"
                              fontSize="md"
                              mr={5}
                              rounded="md"
                              px={8}
                              py={4}
                         >
                              Free Trial
                         </Button>

                         <Menu>
                              <MenuButton
                                   as={Avatar}
                                   size="sm"
                                   fontSize="md"
                              ></MenuButton>
                              <MenuList fontSize="md" bg="aygreen.100">
                                   <MenuItem>Account</MenuItem>
                                   <MenuItem>Log out</MenuItem>
                              </MenuList>
                         </Menu>
                    </Flex>
               </Flex>
          </Center>
     );
};

export default Navbar;
