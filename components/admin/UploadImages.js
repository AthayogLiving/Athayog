import { useState } from 'react';
import {
     Box,
     Button,
     FormControl,
     Heading,
     Modal,
     ModalOverlay,
     ModalContent,
     ModalHeader,
     ModalFooter,
     ModalBody,
     ModalCloseButton,
     useDisclosure,
     useToast,
     Text,
     Image,
     Flex
} from '@chakra-ui/react';

import { uploadImageToStorage } from '@/lib/db';
import { useForm } from 'react-hook-form';
import { FiImage } from 'react-icons/fi';

const UploadImages = () => {
     const toast = useToast();
     const { register, handleSubmit } = useForm();
     const { isOpen, onOpen, onClose } = useDisclosure();
     const [uploading, setUploading] = useState(false);
     const [image, setImage] = useState();

     const onSubmit = async (data, e) => {
          setUploading(true);
          const file = data.image[0];
          await uploadImageToStorage('hero', file);
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
     };

     const selectedImage = (e) => {
          const file = URL.createObjectURL(e.target.files[0]);
          setImage(file);
     };

     return (
          <Box padding={6} bg="white" rounded="lg" boxShadow="sm">
               <Heading size="md">Images</Heading>
               <Button onClick={onOpen}>Upload Image</Button>
               <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent as="form" onSubmit={handleSubmit(onSubmit)}>
                         <ModalHeader>Upload Image</ModalHeader>
                         <ModalCloseButton />
                         <ModalBody>
                              Select an image to upload.
                              {image ? (
                                   <Image
                                        src={image}
                                        height="400px"
                                        width="400px"
                                        mt={5}
                                        rounded="lg"
                                   />
                              ) : (
                                   <Box
                                        height="400px"
                                        width="100%"
                                        border="1px"
                                        borderColor="gray.200"
                                        rounded="lg"
                                        mt={5}
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
                              >
                                   Close
                              </Button>
                              <Button
                                   isLoading={uploading}
                                   loadingText="Uploading"
                                   type="submit"
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
