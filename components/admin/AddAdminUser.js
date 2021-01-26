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
    FormErrorMessage
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { mutate } from 'swr';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { createAdminUser } from '@/lib/db';

function AddAdminUser() {
    const toast = useToast();
    const [loading, setLoading] = useState(false);
    const { handleSubmit, register, errors, reset } = useForm();

    const onUserCreation = ({ email, password, displayName }) => {
        setLoading(true);

        axios
            .post('http://localhost:3000/api/admin/user', {
                email,
                password,
                displayName
            })
            .then(function (response) {
                setLoading(false);
                toast({
                    title: 'Account created.',
                    description: "We've created your account for you.",
                    status: 'success',
                    duration: 9000,
                    isClosable: true
                });
                reset();
                const { uid, email, displayName } = response.data;
                const { lastSignInTime } = response.data.metadata;
                updateAdmin({ uid, email, displayName, lastSignInTime });
                mutate('/api/users');
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
        <Box
            bg="white"
            padding={6}
            boxShadow="base"
            rounded="lg"
            width="fit-content"
        >
            <Heading size="md">Create a new admin user</Heading>
            <Stack
                spacing={8}
                mt={5}
                width="sm"
                as="form"
                onSubmit={handleSubmit((data) => onUserCreation(data))}
            >
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
                        bg="white"
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
                <Button type="submit" colorScheme="teal" isLoading={loading}>
                    Create
                </Button>
            </Stack>
        </Box>
    );
}

export default AddAdminUser;
