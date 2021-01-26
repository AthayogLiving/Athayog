import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    Stack,
    Select,
    FormErrorMessage
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { createFaq } from '@/lib/db';

const AddFaq = ({ category }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { handleSubmit, register, errors } = useForm();

    const onCreateFaq = async ({ question, answer, category }) => {
        const faqData = {
            category,
            isAvailaible: true,
            questions: [
                {
                    question,
                    answer,
                    isAvailaible: true
                }
            ]
        };
        await createFaq(faqData);
    };

    return (
        <>
            <Button mt={5} onClick={onOpen} size="sm" colorScheme="teal">
                Add Faq
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent
                    onSubmit={handleSubmit((data) => onCreateFaq(data))}
                    as="form"
                >
                    <ModalHeader>Add your Faq</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Stack spacing={5}>
                            <FormControl>
                                <FormLabel>Select Category</FormLabel>
                                <Select
                                    name="category"
                                    ref={register({
                                        required: 'Please select a category.'
                                    })}
                                >
                                    {category.map((data, index) => {
                                        return (
                                            <option key={index}>{data}</option>
                                        );
                                    })}
                                </Select>
                            </FormControl>
                            <FormControl id="question">
                                <FormLabel>Question</FormLabel>
                                <Input
                                    type="text"
                                    aria-label="question"
                                    name="question"
                                    ref={register({
                                        required: 'Please enter a question.'
                                    })}
                                />
                                <FormHelperText>
                                    Add your question
                                </FormHelperText>
                                <FormErrorMessage>
                                    {errors.question && errors.question.message}
                                </FormErrorMessage>
                            </FormControl>
                            <FormControl id="answer">
                                <FormLabel>Answer</FormLabel>
                                <Input
                                    type="text"
                                    aria-label="answer"
                                    name="answer"
                                    ref={register({
                                        required: 'Please enter a answer.'
                                    })}
                                />
                                <FormHelperText>Add your answer</FormHelperText>
                            </FormControl>
                        </Stack>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button
                            variant="solid"
                            colorScheme="teal"
                            type="submit"
                        >
                            Create
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default AddFaq;
