import React, { useEffect, useState } from 'react';
import {
     Modal,
     ModalOverlay,
     ModalContent,
     ModalHeader,
     ModalFooter,
     ModalBody,
     ModalCloseButton,
     Button,
     Grid
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/hooks';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input, InputGroup } from '@chakra-ui/input';
import { useAuth } from '@/lib/auth';
import { useForm, useForms } from 'react-hook-form';
import { useToast } from '@chakra-ui/toast';
import axios from 'axios';
import Cookies from 'js-cookie';

const LeadModal = () => {
     const { user, signout } = useAuth();
     const { isOpen, onOpen, onClose } = useDisclosure();
     const { handleSubmit, register, errors, reset } = useForm();
     const toast = useToast();
     const initialRef = React.useRef();
     const finalRef = React.useRef();
     const [loading, setLoading] = useState(false);

     const onSubmit = async ({ name, email, phone }) => {
          setLoading(true);

          // Send Email
          await fetch('https://formsubmit.co/ajax/info@athayogliving.com', {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
               },
               body: JSON.stringify({
                    FormType: 'Leads Form',
                    fullname: name,
                    email: email,
                    phone: phone
               })
          });

          await axios
               .post(`/api/forms/lead`, {
                    name: name,
                    email,
                    phone,
                    type: 'lead'
               })
               .then(function (response) {
                    setLoading(false);
                    toast({
                         title: 'Request Submitted.',
                         description: 'We will get back to you.',
                         status: 'success',
                         duration: 9000,
                         isClosable: true
                    });
                    onClose();
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

     useEffect(() => {
          const timeoutID = setTimeout(() => {
               Cookies.set('isUniqueVisitor', 'true');
               onOpen();
          }, 15000);

          return () => clearTimeout(timeoutID);
     }, []);

     return (
          <div>
               <Modal
                    isOpen={isOpen}
                    onClose={onClose}
                    closeOnOverlayClick={false}
               >
                    <ModalOverlay />
                    <ModalContent
                         as="form"
                         onSubmit={handleSubmit((data) => onSubmit(data))}
                    >
                         <ModalHeader>Hi Register Now!</ModalHeader>
                         <ModalCloseButton />
                         <ModalBody pb={6}>
                              Learn from the Best with Unlimited Class, Initiate
                              with Registering for 2 Free Trial Class.
                              <Grid
                                   templateColumns="repeat(1, 1fr)"
                                   gap={6}
                                   mt={6}
                              >
                                   <FormControl id="name">
                                        <Input
                                             type="text"
                                             placeholder="First Name *"
                                             color="#000"
                                             isRequired={true}
                                             name="name"
                                             ref={register({
                                                  required:
                                                       'Please enter your first name.'
                                             })}
                                        />
                                   </FormControl>

                                   <FormControl id="email">
                                        <Input
                                             type="email"
                                             placeholder="Email *"
                                             name="email"
                                             ref={register({
                                                  required:
                                                       'Please enter your email.'
                                             })}
                                        />
                                   </FormControl>
                                   <FormControl>
                                        <Input
                                             type="tel"
                                             placeholder="Phone Number *"
                                             name="phone"
                                             ref={register({
                                                  required:
                                                       'Please enter your phone.'
                                             })}
                                        />
                                   </FormControl>
                              </Grid>
                         </ModalBody>

                         <ModalFooter>
                              <Button
                                   type="submit"
                                   colorScheme="aygreen"
                                   isLoading={loading}
                                   loadingText="Submitting"
                              >
                                   Register
                              </Button>
                         </ModalFooter>
                    </ModalContent>
               </Modal>
          </div>
     );
};

export default LeadModal;
