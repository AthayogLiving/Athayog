import { useState } from 'react';
import {
    Box,
    Button,
    FormControl,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    useToast,
    Image,
    Flex,
    Select
} from '@chakra-ui/react';
import { mutate } from 'swr';

import { uploadImageToStorage } from '@/lib/db';
import { useForm } from 'react-hook-form';
import { FiImage } from 'react-icons/fi';
import { useAuth } from '@/lib/auth';

const UploadImages = ({ imageType }) => {
    const toast = useToast();
    const { user } = useAuth();
    const { register, handleSubmit } = useForm();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [uploading, setUploading] = useState(false);
    const [image, setImage] = useState();

    const Capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const onSubmit = async (data, e) => {
        setUploading(true);
        const file = data.image[0];
        await uploadImageToStorage(imageType, file, true);
        setUploading(false);

        toast({
            title: 'Image uploaded.',
            description: "We've have uploaded the image to storage.",
            status: 'success',
            duration: 9000,
            isClosable: true
        });

        e.target.reset();
        setImage('');
        mutate([`/api/images`, user.token]);
    };

    const selectedImage = (e) => {
        const file = URL.createObjectURL(e.target.files[0]);
        setImage(file);
    };

    return (
        <Box mt={5}>
            <Button size="sm" onClick={onOpen}>
                Upload Image
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent as="form" onSubmit={handleSubmit(onSubmit)}>
                    <ModalHeader fontSize="md" fontWeight="bold">
                        Upload Image To{' '}
                        {Capitalize(imageType.replace('_', ' '))}
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {image ? (
                            <Image
                                src={image}
                                height="400px"
                                width="400px"
                                mt={2}
                                rounded="lg"
                            />
                        ) : (
                            <Box
                                height="400px"
                                width="100%"
                                border="1px"
                                borderColor="gray.200"
                                rounded="lg"
                                mt={2}
                            >
                                <Flex
                                    justifyContent="center"
                                    alignItems="center"
                                    height="100%"
                                >
                                    <FiImage size="3rem" />
                                </Flex>
                            </Box>
                        )}
                        <FormControl mt={5}>
                            <input
                                ref={register}
                                required
                                name="image"
                                type="file"
                                onChange={(e) => selectedImage(e)}
                            />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            colorScheme="teal"
                            mr={3}
                            onClick={onClose}
                            size="sm"
                        >
                            Close
                        </Button>
                        <Button
                            isLoading={uploading}
                            loadingText="Uploading"
                            type="submit"
                            size="sm"
                        >
                            Upload
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default UploadImages;
