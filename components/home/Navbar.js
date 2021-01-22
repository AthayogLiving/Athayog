import React, { useEffect, useState } from 'react';
import {
    Avatar,
    Box,
    Button,
    Center,
    Flex,
    Heading,
    HStack,
    Menu,
    MenuButton,
    MenuItem,
    MenuList
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import Link from 'next/link';

const Navbar = () => {
    const [scrollY, setScrollY] = useState(0);
    const [scrollBg, setScrollBg] = useState('primaryWhite');
    //  useEffect(function onFirstMount() {
    //       function onScroll() {
    //            setScrollY(window.scrollY);
    //            if (window.scrollY > 100) {
    //                 setScrollBg('rgba(243, 243, 245, 0.9)');
    //            }
    //       }

    //       window.addEventListener('scroll', onScroll);
    //  }, []);
    return (
        <>
            <Center
                boxShadow="md"
                bg={scrollY > 100 ? 'rgba(243, 243, 245, 0.9)' : 'primaryWhite'}
                position="fixed"
                transition="ease-in-out"
                zIndex={3}
                width="100%"
                height="4.5rem"
            >
                <Flex
                    width="80vw"
                    alignItems="center"
                    justifyContent="space-between"
                    // py={4}
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
                            ml="5rem"
                            variant="ghost"
                            spacing="6"
                            size="sm"
                            color="primaryBlack"
                            mr="1rem"
                        >
                            <Link href="/">
                                <Button
                                    fontWeight="normal"
                                    fontSize="md"
                                    bg={scrollBg}
                                >
                                    Home
                                </Button>
                            </Link>

                            <Link href="chikitsa">
                                <Button
                                    fontWeight="normal"
                                    fontSize="md"
                                    bg={scrollBg}
                                >
                                    Lorem
                                </Button>
                            </Link>

                            <Button
                                fontWeight="normal"
                                fontSize="md"
                                bg={scrollBg}
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
                                <MenuItem _hover={{ bg: 'aygreen.50' }}>
                                    Download
                                </MenuItem>
                                <MenuItem _hover={{ bg: 'aygreen.50' }}>
                                    Create a Copy
                                </MenuItem>
                                <MenuItem _hover={{ bg: 'aygreen.50' }}>
                                    Mark as Draft
                                </MenuItem>
                                <MenuItem _hover={{ bg: 'aygreen.50' }}>
                                    Delete
                                </MenuItem>
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
        </>
    );
};

export default Navbar;
