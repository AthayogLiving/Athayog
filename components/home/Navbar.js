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
import { useRouter } from 'next/router';

const Navbar = () => {
    const router = useRouter();
    const [scrollY, setScrollY] = useState(0);

    const [scrollBg, setScrollBg] = useState('primaryWhite');
    useEffect(function onFirstMount() {
        function onScroll() {
            setScrollY(window.scrollY);
            if (window.scrollY > 100) {
                setScrollBg('rgba(243, 243, 245, 0.9)');
            }
        }

        window.addEventListener('scroll', onScroll);
    }, []);
    return (
        <>
            <Center
                boxShadow="md"
                bg={scrollY > 100 ? 'rgb(216 ,216, 216 ,0.8)' : 'primaryWhite'}
                transition="linear"
                transform="initial"
                style={{ backdropFilter: 'blur(5px)' }}
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
                                    bg="transparent"
                                    variant="ghost"
                                    _active={{
                                        bg: 'aygreen.100',
                                        transform: 'scale(0.98)',
                                        borderColor: '#bec3c9'
                                    }}
                                    isActive={
                                        router.pathname == '/' ? true : ''
                                    }
                                >
                                    Home
                                </Button>
                            </Link>

                            <Link href="/chikitsa">
                                <Button
                                    fontWeight="normal"
                                    fontSize="md"
                                    variant="ghost"
                                    bg="transparent"
                                    _active={{
                                        bg: 'aygreen.100',
                                        transform: 'scale(0.98)',
                                        borderColor: '#bec3c9'
                                    }}
                                    isActive={
                                        router.pathname == '/chikitsa'
                                            ? true
                                            : ''
                                    }
                                >
                                    Chikitsa
                                </Button>
                            </Link>
                            <Link href="space">
                                <Button
                                    fontWeight="normal"
                                    fontSize="md"
                                    bg="transparent"
                                    _active={{
                                        bg: 'aygreen.100',
                                        transform: 'scale(0.98)',
                                        borderColor: '#bec3c9'
                                    }}
                                    variant="ghost"
                                    isActive={
                                        router.pathname == '/space' ? true : ''
                                    }
                                >
                                    Space
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
                                rightIcon={<ChevronDownIcon />}
                            >
                                Classes
                            </MenuButton>
                            <MenuList bg="aygreen.100">
                                <Link href="/shikshana">
                                    <MenuItem _hover={{ bg: 'aygreen.50' }}>
                                        Shikshana
                                    </MenuItem>
                                </Link>

                                <Link href="/classes/online" as="online">
                                    <MenuItem _hover={{ bg: 'aygreen.50' }}>
                                        Online
                                    </MenuItem>
                                </Link>
                                <Link href="/classes/personal" as="personal">
                                    <MenuItem _hover={{ bg: 'aygreen.50' }}>
                                        Personal
                                    </MenuItem>
                                </Link>
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
