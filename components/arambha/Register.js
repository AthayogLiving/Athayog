import { checkForArambha, registerForArambha } from '@/lib/db/forms';
import {
     Box,
     Button,
     Container,
     Flex,
     FormControl,
     FormLabel,
     Grid,
     Heading,
     Input,
     Stack,
     Text,
     useToast
} from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import nextId from 'react-id-generator';
import { useReactToPrint } from 'react-to-print';
import { v4 as uuidv4 } from 'uuid';

function Register() {
     const toast = useToast();
     const [loading, setLoading] = useState(false);
     const [event, setEvent] = useState(false);
     const [user, setUser] = useState({
          name: 'Harsimran',
          email: 'harsimansinghbarki@gmail.com',
          phone: '8971613155',
          ticketID: 'ATHAYOG-qwes'
     });

     const componentRef = useRef();
     const handlePrint = useReactToPrint({
          content: () => componentRef.current
     });

     const {
          register,
          handleSubmit,
          watch,
          formState: { errors }
     } = useForm();
     const onSubmit = async ({ name, email, phone }) => {
          setLoading(true);
          const ticketID =
               nextId('ATHAYOG-') + uuidv4().toString().substring(0, 5);
          await checkForArambha(email)
               .then((res) => {
                    if (res.code == 200) {
                         generateTicket(name, email, phone, ticketID);
                    } else {
                         setLoading(false);
                         toast({
                              title: 'Email already exist',
                              description: 'The email is already registred',
                              status: 'warning',
                              duration: 9000,
                              isClosable: true
                         });
                    }
               })
               .catch((error) => {
                    setLoading(false);
                    toast({
                         title: 'Error',
                         description: 'Something Happend Try Again',
                         status: 'error',
                         duration: 9000,
                         isClosable: true
                    });
               });
     };

     const generateTicket = async (name, email, phone, ticketID) => {
          setLoading(true);
          await registerForArambha(name, email, phone, ticketID)
               .then((response) => {
                    setLoading(false);
                    setUser({ name, email, phone, ticketID });
                    setEvent(true);
                    toast({
                         title: 'Success',
                         description: 'A ticket has been sent to your email',
                         status: 'success',
                         duration: 9000,
                         isClosable: true
                    });
               })
               .catch((error) => {
                    setLoading(false);
                    console.log(error);
                    toast({
                         title: 'Error',
                         description: 'Something Happend Try Again',
                         status: 'error',
                         duration: 9000,
                         isClosable: true
                    });
               });
     };

     const Ticket = () => {
          return (
               <Flex rounded="md" direction="column">
                    <Stack
                         textAlign="left"
                         spacing={10}
                         ref={componentRef}
                         py={5}
                         px={6}
                    >
                         <Text fontSize="xl">ATHAYOG YOGA ARAMBHA</Text>
                         <Grid templateColumns="repeat(2,1fr)" gap={10}>
                              <Box>
                                   <Text
                                        fontWeight="normal"
                                        textColor="gray.700"
                                   >
                                        TickedID:
                                   </Text>{' '}
                                   <Text fontWeight="medium">
                                        {user.tickedID}
                                   </Text>
                              </Box>

                              <Box>
                                   {' '}
                                   <Text
                                        fontWeight="normal"
                                        textColor="gray.700"
                                   >
                                        Name:
                                   </Text>{' '}
                                   <Text fontWeight="medium">{user.name}</Text>
                              </Box>
                              <Box>
                                   {' '}
                                   <Text
                                        fontWeight="normal"
                                        textColor="gray.700"
                                   >
                                        Email:
                                   </Text>{' '}
                                   <Text fontWeight="medium">{user.email}</Text>
                              </Box>
                              <Box>
                                   {' '}
                                   <Text
                                        fontWeight="normal"
                                        textColor="gray.700"
                                   >
                                        Phone:
                                   </Text>{' '}
                                   <Text fontWeight="medium">{user.phone}</Text>
                              </Box>
                         </Grid>
                    </Stack>
                    <Button
                         colorScheme="green"
                         size="md"
                         width="full"
                         onClick={handlePrint}
                         rounded="sm"
                    >
                         Download Ticket
                    </Button>
               </Flex>
          );
     };

     const Form = () => {
          return (
               <form onSubmit={handleSubmit(onSubmit)}>
                    <Flex
                         gap={10}
                         flexWrap="wrap"
                         rounded="md"
                         py={6}
                         width="full"
                         justifyContent="center"
                         textColor="black"
                         alignItems="flex-end"
                    >
                         <FormControl maxW="md">
                              <FormLabel>Name</FormLabel>
                              <Input
                                   type="text"
                                   bg="white"
                                   name="name"
                                   id="name"
                                   variant="outline"
                                   disabled={loading}
                                   placeholder="Your Name"
                                   ref={register({
                                        required: true
                                   })}
                              />
                         </FormControl>
                         <FormControl maxW="md">
                              <FormLabel>Email</FormLabel>
                              <Input
                                   type="email"
                                   name="email"
                                   bg="white"
                                   id="email"
                                   variant="outline"
                                   disabled={loading}
                                   placeholder="Your Email"
                                   ref={register({
                                        required: true
                                   })}
                              />
                         </FormControl>
                         <FormControl maxW="md">
                              <FormLabel>Phone</FormLabel>
                              <Input
                                   type="number"
                                   placeholder="Phone Number"
                                   id="phone"
                                   variant="outline"
                                   disabled={loading}
                                   bg="white"
                                   name="phone"
                                   ref={register({
                                        required: true
                                   })}
                              />
                         </FormControl>
                         <Button
                              rounded="none"
                              colorScheme="green"
                              type="submit"
                              isLoading={loading}
                         >
                              Register Now
                         </Button>
                    </Flex>
               </form>
          );
     };
     return (
          <Container
               maxW="100%"
               boxShadow="md"
               justifySelf="right"
               bg="gray.50"
               textColor="black"
               rounded="none"
               overflow="hidden"
          >
               {event ? <Ticket /> : <Form />}
          </Container>
     );
}

export default Register;
