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
import React, { useState } from 'react';
import axios from 'axios';

function AddAdminUser() {
    const toast = useToast();
    // const { createAdminUserWithEmail } = useAuth();
    const [loading, setLoading] = useState(false);
    const { handleSubmit, register, errors } = useForm();

    const onUserCreation = ({ email, password, name }) => {
        setLoading(true);

        axios
            .post('http://localhost:3000/api/admin/user', {
                email,
                password,
                name
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
                mutate('/api/users');
            })
            .catch(function (error) {
                console.log(error);
                setLoading(false);
                toast({
                    title: 'An error occurred.',
                    description: error.message,
                    status: 'error',
                    duration: 5000,
                    isClosable: true
                });
            });
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
                        name="name"
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
                <FormControl>
                    <FormLabel>Access Level</FormLabel>
                    <CheckboxGroup
                        colorScheme="green"
                        defaultValue={['naruto', 'kakashi']}
                    >
                        <HStack>
                            <Checkbox value="read">Read</Checkbox>
                            <Checkbox value="write">Write</Checkbox>
                        </HStack>
                    </CheckboxGroup>
                </FormControl>
                <Button type="submit" colorScheme="teal" isLoading={loading}>
                    Create
                </Button>
            </Stack>
        </Box>
    );
}

export default AddAdminUser;
