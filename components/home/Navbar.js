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
import { useAuth } from '@/lib/auth';

const Navbar = () => {
    const { user, signout, loading } = useAuth();
    const router = useRouter();

    const signOut = (redirect) => {
        signout(redirect);
    };
    return (
        <>
            <Center
                boxShadow="md"
                // bg={scrollY > 100 ? 'rgb(216 ,216, 216 ,0.8)' : 'primaryWhite'}
                bg="primaryWhite"
                transition="linear"
                transform="initial"
                style={{ backdropFilter: 'blur(5px)' }}
                position="fixed"
                transition="ease-in-out"
                zIndex={3}
                width="100%"
                height={{ base: '4rem', md: '4rem', lg: '4rem' }}
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

                            <Link href="/courses/chikitsa" as="chikitsa">
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
                            <Link href="/space">
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
                                <Link href="/courses/shikshana" as="shikshana">
                                    <MenuItem _hover={{ bg: 'aygreen.50' }}>
                                        Shikshana
                                    </MenuItem>
                                </Link>

                                <Link href="/courses/online" as="online">
                                    <MenuItem _hover={{ bg: 'aygreen.50' }}>
                                        Online
                                    </MenuItem>
                                </Link>
                                <Link href="/courses/personal" as="personal">
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
                        {user ? (
                            <Menu>
                                <MenuButton
                                    as={Avatar}
                                    size="sm"
                                    fontSize="md"
                                ></MenuButton>
                                <MenuList fontSize="md" bg="aygreen.100">
                                    <MenuItem>Account</MenuItem>
                                    <MenuItem onClick={() => signOut('/')}>
                                        Logout
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        ) : (
                            <Button
                                bg="aygray.100"
                                color="primaryDarkGray"
                                variant="solid"
                                size="sm"
                                fontSize="md"
                                mr={5}
                                rounded="md"
                                px={8}
                                py={4}
                            >
                                Sign In
                            </Button>
                        )}
                    </Flex>
                </Flex>
            </Center>
        </>
    );
};

export default Navbar;
