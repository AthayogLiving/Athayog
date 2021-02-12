import {
     FormControl,
     FormLabel,
     Button,
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
     Select,
     Textarea,
     RadioGroup,
     Radio,
     toast
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { mutate } from 'swr';
import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '@/lib/auth';
const AddTestimonials = () => {
     const { user } = useAuth();
     const toast = useToast();
     const [loading, setLoading] = useState(false);
     const { handleSubmit, register, errors, reset } = useForm();
     const bg = useColorModeValue('white', 'gray.800');
     const color = useColorModeValue('white', 'gray.800');
     const { isOpen, onOpen, onClose } = useDisclosure();
     const onCreation = ({ name, review, rating, active }) => {
          setLoading(true);

          axios.post('/api/testimonials', {
               name,
               review,
               rating,
               active
          })
               .then(function (response) {
                    setLoading(false);
                    onClose();
                    toast({
                         title: 'Teastimonial created.',
                         description: "We've added the testimonial.",
                         status: 'success',
                         duration: 9000,
                         isClosable: true
                    });
                    reset();

                    mutate([`/api/testimonials`, user.token]);
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

     return (
          <>
               <Button
                    onClick={onOpen}
                    colorScheme="teal"
                    size="sm"
                    width="min-content"
               >
                    Create Testimonial
               </Button>
               <Modal
                    isOpen={isOpen}
                    onClose={onClose}
                    motionPreset="slideInBottom"
               >
                    <ModalOverlay />
                    <ModalContent
                         as="form"
                         onSubmit={handleSubmit((data) => onCreation(data))}
                    >
                         <ModalHeader>Add Testimonial</ModalHeader>
                         <ModalCloseButton />
                         <ModalBody>
                              <Stack spacing={8} mt={5} width="sm">
                                   <FormControl
                                        isRequired
                                        isRequired={true}
                                        isInvalid={
                                             errors.name && errors.name.message
                                        }
                                   >
                                        <FormLabel>Name</FormLabel>
                                        <Input
                                             type="text"
                                             aria-label="name"
                                             name="name"
                                             id="name"
                                             placeholder="John Doe"
                                             ref={register({
                                                  required:
                                                       'Please enter the name.'
                                             })}
                                        />
                                        <FormErrorMessage>
                                             {errors.name &&
                                                  errors.name.message}
                                        </FormErrorMessage>
                                   </FormControl>
                                   <FormControl isRequired>
                                        <FormLabel>Review</FormLabel>
                                        <Textarea
                                             type="text"
                                             aria-label="review"
                                             name="review"
                                             id="review"
                                             ref={register({
                                                  required:
                                                       'Please enter the review.'
                                             })}
                                        />
                                   </FormControl>
                                   <FormControl isRequired>
                                        <FormLabel>Rating</FormLabel>
                                        <Select
                                             name="rating"
                                             ref={register({
                                                  required:
                                                       'Please select a rating.'
                                             })}
                                        >
                                             <option value="0">0</option>
                                             <option value="1">1</option>
                                             <option value="2">2</option>
                                             <option value="3">3</option>
                                             <option value="4">4</option>
                                             <option value="5">5</option>
                                        </Select>
                                   </FormControl>
                                   <FormControl isRequired>
                                        <FormLabel>Publish?</FormLabel>
                                        <RadioGroup>
                                             <Stack direction="row">
                                                  <Radio
                                                       value={true}
                                                       name="active"
                                                       ref={register}
                                                  >
                                                       Yes
                                                  </Radio>
                                                  <Radio
                                                       value={false}
                                                       name="active"
                                                       ref={register}
                                                  >
                                                       No
                                                  </Radio>
                                             </Stack>
                                        </RadioGroup>
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
};

export default AddTestimonials;
