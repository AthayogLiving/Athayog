import {
    Box,
    Flex,
    Heading,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    SimpleGrid,
    Input,
    Textarea,
    Divider,
    Select,
    Stack,
    RadioGroup,
    Radio,
    Button
} from '@chakra-ui/react';
import React from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import NavbarHelper from '@/components/shared/NavbarHelper';
import { capitalizeFirstLetter } from '@/components/helper/Capitalize';

const Register = () => {
    const router = useRouter();
    const { form } = router.query;

    return (
        <motion.div
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <NavbarHelper />
            <Flex
                justifyContent="center"
                alignItems="center"
                height="100%"
                bg="primaryWhite"
                padding="5rem 0"
                flexDirection="column"
            >
                <Heading fontWeight="normal" fontSize="4xl">
                    Register For {form ? capitalizeFirstLetter(form) : ''}
                </Heading>
                <Box
                    bg="white"
                    rounded="lg"
                    textAlign="center"
                    mt={10}
                    padding={8}
                    width="50vw"
                    boxShadow="sm"
                >
                    <Stack spacing={5}>
                        <SimpleGrid
                            minChildWidth="400px"
                            spacing="20px"
                            width="100%"
                        >
                            <FormControl id="email">
                                <FormLabel>First Name</FormLabel>
                                <Input type="email" />
                            </FormControl>
                            <FormControl id="email">
                                <FormLabel>Last Name</FormLabel>
                                <Input type="email" />
                            </FormControl>
                            <FormControl id="email">
                                <FormLabel>Age</FormLabel>
                                <Input type="email" />
                            </FormControl>
                            <FormControl id="email">
                                <FormLabel>Gender</FormLabel>
                                <Select placeholder="Select option">
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </Select>
                            </FormControl>
                            <FormControl id="email">
                                <FormLabel>Phone Number</FormLabel>
                                <Input type="email" />
                            </FormControl>
                            <FormControl id="email">
                                <FormLabel>Email</FormLabel>
                                <Input type="email" />
                            </FormControl>
                        </SimpleGrid>
                        <FormControl id="email">
                            <FormLabel>Addresss</FormLabel>
                            <Textarea />
                        </FormControl>
                        <Divider
                            variant="dashed"
                            colorScheme="blue"
                            width="100%"
                        />
                        <FormControl id="email">
                            <FormLabel>Coursce</FormLabel>
                            <Select placeholder="Select option">
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </Select>
                        </FormControl>
                        <SimpleGrid
                            minChildWidth="400px"
                            spacing="20px"
                            width="100%"
                        >
                            <FormControl id="email">
                                <FormLabel>Duration</FormLabel>
                                <Input type="email" />
                            </FormControl>
                            <FormControl id="email">
                                <FormLabel>Payment</FormLabel>
                                <RadioGroup>
                                    <Stack direction="row">
                                        <Radio value="1">First</Radio>
                                        <Radio value="2">Second</Radio>
                                        <Radio value="3">Third</Radio>
                                    </Stack>
                                </RadioGroup>
                            </FormControl>
                        </SimpleGrid>
                    </Stack>
                    <Button
                        colorScheme="aygreen"
                        width="10rem"
                        mt={10}
                        d="block"
                        ml="auto"
                    >
                        Regiser
                    </Button>
                </Box>
            </Flex>
        </motion.div>
    );
};

export default Register;
