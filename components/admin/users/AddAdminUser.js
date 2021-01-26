import {
    Box,
    Checkbox,
    CheckboxGroup,
    FormControl,
    FormLabel,
    Heading,
    Button,
    HStack,
    Input,
    Stack,
    useToast,
    FormErrorMessage,
    useColorModeValue,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Select
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { mutate } from 'swr';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { createAdminUser } from '@/lib/db';
import { useAuth } from '@/lib/auth';

function AddAdminUser() {
    const toast = useToast();
    const { user } = useAuth();
    const [loading, setLoading] = useState(false);
    const { handleSubmit, register, errors, reset } = useForm();
    const bg = useColorModeValue('white', 'gray.800');
    const color = useColorModeValue('white', 'gray.800');
    const { isOpen, onOpen, onClose } = useDisclosure();

    const onUserCreation = ({ email, password, displayName }) => {
        setLoading(true);

        axios
            .post('http://localhost:3000/api/admin/users', {
                email,
                password,
                displayName
            })
            .then(function (response) {
                setLoading(false);
                onClose();
                toast({
                    title: 'Account created.',
                    description: "We've created your account for you.",
                    status: 'success',
                    duration: 9000,
                    isClosable: true
                });
                reset();
                const { uid, email, displayName } = response.data;

                updateAdmin({ uid, email, displayName, access: false });
                mutate([`/api/admin/users`, user.token]);
            })
            .catch(function (error) {
                setLoading(false);

                toast({
                    title: 'An error occurred.',
                    description: error.message,
                    status: 'error',
                    duration: 5000,
                    isClosable: true
                });
                reset();
            });
    };

    const updateAdmin = async (data) => {
        await createAdminUser(data);
    };

    return (
        <>
            <Button
                onClick={onOpen}
                colorScheme="teal"
                size="sm"
                width="min-content"
            >
                Add New Admin
            </Button>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                motionPreset="slideInBottom"
            >
                <ModalOverlay />
                <ModalContent
                    as="form"
                    onSubmit={handleSubmit((data) => onUserCreation(data))}
                >
                    <ModalHeader>Create Admin User</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Stack spacing={8} mt={5} width="sm">
                            <FormControl
                                isRequired
                                isRequired={true}
                                isInvalid={errors.name && errors.name.message}
                            >
                                <FormLabel>Name</FormLabel>
                                <Input
                                    type="text"
                                    aria-label="name"
                                    name="displayName"
                                    id="name"
                                    placeholder="Your name"
                                    ref={register({
                                        required: 'Please enter your name.'
                                    })}
                                />
                                <FormErrorMessage>
                                    {errors.name && errors.name.message}
                                </FormErrorMessage>
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Email address</FormLabel>
                                <Input
                                    type="email"
                                    aria-label="email"
                                    name="email"
                                    id="email"
                                    placeholder="something@athayog.com"
                                    ref={register({
                                        required: 'Please enter a password.'
                                    })}
                                />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Password</FormLabel>
                                <Input
                                    type="password"
                                    aria-label="password"
                                    name="password"
                                    id="password"
                                    ref={register({
                                        required: 'Please enter a password.'
                                    })}
                                />
                            </FormControl>
                        </Stack>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            type="submit"
                            colorScheme="teal"
                            isLoading={loading}
                        >
                            Create
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default AddAdminUser;
