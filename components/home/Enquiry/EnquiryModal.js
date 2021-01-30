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
     Select
} from '@chakra-ui/react';

const EnquiryModal = () => {
     const { isOpen, onOpen, onClose } = useDisclosure();
     return (
          <>
               <MotionButton
                    bg="aygreen.100"
                    color="primaryDarkGray"
                    onClick={onOpen}
                    variant="solid"
                    size="sm"
                    fontSize="md"
                    rounded="md"
                    mt={10}
                    px={10}
                    py={5}
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
                    blockScrollOnMount={false}
               >
                    <ModalOverlay />
                    <ModalContent padding={6}>
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
                                        />
                                   </FormControl>
                                   <FormControl id="lastName">
                                        <Input
                                             variant="flushed"
                                             type="text"
                                             placeholder="Last Name *"
                                        />
                                   </FormControl>
                                   <FormControl id="email">
                                        <Input
                                             variant="flushed"
                                             type="email"
                                             placeholder="Email *"
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
                                             />
                                        </InputGroup>
                                   </FormControl>
                              </Grid>
                              <Textarea
                                   mt={6}
                                   placeholder="Message Box"
                                   bg="white"
                              />
                         </ModalBody>

                         <ModalFooter>
                              <Button
                                   bg="aygreen.200"
                                   color="primaryDarkGray"
                                   onClick={onOpen}
                                   variant="solid"
                                   size="sm"
                                   fontSize="md"
                                   rounded="md"
                                   ml="auto"
                                   mr="auto"
                                   mt={2}
                                   px={10}
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
