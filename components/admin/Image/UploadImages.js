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
     Input,
     Text,
     FormLabel
} from '@chakra-ui/react';
import { mutate } from 'swr';

import { uploadImageToStorage } from '@/lib/db/images';
import { useForm } from 'react-hook-form';
import { FiImage } from 'react-icons/fi';
import { useAuth } from '@/lib/auth';
import { capitalizeFirstLetter } from '@/components/helper/Capitalize';

const UploadImages = ({ imageType, isMobile, isDisabled }) => {
     const toast = useToast();
     const { user } = useAuth();
     const { register, handleSubmit } = useForm();
     const { isOpen, onOpen, onClose } = useDisclosure();
     const [uploading, setUploading] = useState(false);
     const [image, setImage] = useState();

     const onSubmit = async (data, e) => {
          setUploading(true);
          const file = data.image[0];
          await uploadImageToStorage(
               imageType,
               data.alt,
               file,
               true,
               isMobile === 'desktop' ? false : true
          )
               .then((response) => {
                    toast({
                         title: 'Image uploaded.',
                         description:
                              "We've have uploaded the image to storage.",
                         status: 'success',
                         duration: 9000,
                         isClosable: true
                    });
               })
               .catch((error) => {
                    toast({
                         title: 'Error',
                         description: error.message,
                         status: 'error',
                         duration: 5000,
                         isClosable: true
                    });
               });
          setUploading(false);
          onClose();
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
               <Button size="sm" onClick={onOpen} disabled={isDisabled}>
                    Upload Image
               </Button>
               <Text mt={3} textColor="#555" fontSize="0.8rem">
                    *Note You can only upload upto 8 Images at a time
               </Text>
               <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent as="form" onSubmit={handleSubmit(onSubmit)}>
                         <ModalHeader fontSize="md" fontWeight="bold">
                              Upload Image To{' '}
                              {capitalizeFirstLetter(
                                   imageType.replace('_', ' ')
                              )}
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
                                   <FormLabel>Alt Tag</FormLabel>
                                   <Input
                                        ref={register}
                                        required
                                        name="alt"
                                        type="text"
                                   />
                              </FormControl>
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
