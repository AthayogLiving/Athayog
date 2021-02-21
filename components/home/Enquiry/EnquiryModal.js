import { capitalizeFirstLetter } from '@/components/helper/Capitalize';
import { MotionButton } from '@/components/shared/MotionElements';
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
     FormErrorMessage,
     FormHelperText,
     Input,
     Grid,
     Textarea,
     InputGroup,
     InputLeftAddon,
     toast,
     Select,
     useToast
} from '@chakra-ui/react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const EnquiryModal = () => {
     const { isOpen, onOpen, onClose } = useDisclosure();
     const { handleSubmit, register, errors, reset } = useForm();
     const toast = useToast();
     const router = useRouter();
     const [loading, setLoading] = useState(false);

     const onSubmit = async ({
          firstName,
          lastName,
          email,
          phone,
          details
     }) => {
          setLoading(true);
          const fullName = firstName + ' ' + lastName;
          await axios
               .post(`/api/forms/enquiry`, {
                    name: fullName,
                    email,
                    phone,
                    details,
                    type: 'enquiry'
               })
               .then(function (response) {
                    setLoading(false);
                    router.push('/');
                    toast({
                         title: 'Request Submitted.',
                         description: 'We will get back to you.',
                         status: 'success',
                         duration: 9000,
                         isClosable: true
                    });
                    reset();
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
               <MotionButton
                    bg="aygreen.100"
                    color="primaryDarkGray"
                    onClick={onOpen}
                    variant="solid"
                    fontSize={{ base: 'sm', md: 'md' }}
                    px={{ base: '3rem', md: 'md' }}
                    py={{ base: '0.5rem', md: 'md' }}
                    size={{ base: 'sm', md: 'md' }}
                    rounded="md"
                    mt={{ base: '5', md: '10' }}
                    whileHover={{
                         scale: 1.2,
                         transition: { duration: 1 }
                    }}
                    whileTap={{ scale: 0.9 }}
               >
                    Enquiry
               </MotionButton>
               <Modal
                    isOpen={isOpen}
                    onClose={onClose}
                    size="3xl"
                    bg="primaryWhite"
                    blockScrollOnMount={true}
               >
                    <ModalOverlay />
                    <ModalContent
                         padding={6}
                         as="form"
                         onSubmit={handleSubmit((data) => onSubmit(data))}
                    >
                         <ModalHeader
                              textAlign="center"
                              fontSize="3xl"
                              color="primaryBlack"
                         >
                              Enquiry
                         </ModalHeader>
                         <ModalCloseButton />
                         <ModalBody>
                              <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                                   <FormControl id="firstName">
                                        <Input
                                             variant="flushed"
                                             type="text"
                                             placeholder="First Name *"
                                             color="#000"
                                             isRequired={true}
                                             name="firstName"
                                             ref={register({
                                                  required:
                                                       'Please enter your first name.'
                                             })}
                                        />
                                   </FormControl>
                                   <FormControl id="lastName">
                                        <Input
                                             variant="flushed"
                                             type="text"
                                             placeholder="Last Name *"
                                             name="lastName"
                                             ref={register({
                                                  required:
                                                       'Please enter your last name.'
                                             })}
                                        />
                                   </FormControl>
                                   <FormControl id="email">
                                        <Input
                                             variant="flushed"
                                             type="email"
                                             placeholder="Email *"
                                             name="email"
                                             ref={register({
                                                  required:
                                                       'Please enter your email.'
                                             })}
                                        />
                                   </FormControl>
                                   <FormControl id="email">
                                        <InputGroup>
                                             <Select
                                                  variant="flushed"
                                                  mr={2}
                                                  width="5rem"
                                             >
                                                  <option>+91</option>
                                             </Select>
                                             <Input
                                                  type="tel"
                                                  variant="flushed"
                                                  placeholder="Phone Number *"
                                                  name="phone"
                                                  ref={register({
                                                       required:
                                                            'Please enter your phone.'
                                                  })}
                                             />
                                        </InputGroup>
                                   </FormControl>
                              </Grid>
                              <Textarea
                                   mt={6}
                                   placeholder="Message Box"
                                   bg="white"
                                   name="details"
                                   ref={register({
                                        required: 'Please enter your enquiry.'
                                   })}
                              />
                         </ModalBody>

                         <ModalFooter>
                              <Button
                                   bg="aygreen.200"
                                   color="primaryDarkGray"
                                   onClick={onOpen}
                                   variant="solid"
                                   size="sm"
                                   type="submit"
                                   fontSize="md"
                                   rounded="md"
                                   ml="auto"
                                   mr="auto"
                                   mt={2}
                                   px={10}
                                   loading={loading}
                                   loadingText="Submitting"
                                   py={5}
                              >
                                   Enquiry
                              </Button>
                         </ModalFooter>
                    </ModalContent>
               </Modal>
          </>
     );
};

export default EnquiryModal;
