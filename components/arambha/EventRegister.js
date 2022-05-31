import { checkForArambha, registerForArambha } from '@/lib/db/forms';
import {
     Badge,
     Box,
     Button,
     chakra,
     Container,
     Flex,
     FormControl,
     FormErrorMessage,
     FormLabel,
     Heading,
     Input,
     Select,
     Stack,
     Table,
     TableContainer,
     Tbody,
     Td,
     Text,
     Th,
     Thead,
     Tr,
     useToast
} from '@chakra-ui/react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import Logo from 'public/Logo_Filled.png';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import nextId from 'react-id-generator';
import { useReactToPrint } from 'react-to-print';
import { v4 as uuidv4 } from 'uuid';
import NavbarHelper from '../shared/NavbarHelper';

function EventRegister() {
     const toast = useToast();
     const [loading, setLoading] = useState(false);
     const [event, setEvent] = useState(false);
     const form = useRef();

     const [user, setUser] = useState({
          name: '',
          email: '',
          phone: '',
          age: '',
          aadhar: '',
          tshirt: '',
          gender: '',
          ticketID: ''
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
     const onSubmit = async ({
          name,
          email,
          phone,
          age,
          aadhar,
          tshirt,
          gender
     }) => {
          setLoading(true);
          setUser((prevState) => {
               return {
                    name,
                    email,
                    phone,
                    age,
                    aadhar,
                    tshirt,
                    gender,
                    ticketID
               };
          });

          const ticketID =
               'ATHAYOG-' +
               (
                    name.substring(0, 2) + uuidv4().toString().substring(0, 5)
               ).toUpperCase();

          await checkForArambha(email)
               .then((res) => {
                    if (res.code == 200) {
                         generateTicket(
                              name,
                              email,
                              phone,
                              age,
                              aadhar,
                              tshirt,
                              gender,
                              ticketID
                         );
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

     const generateTicket = async (
          name,
          email,
          phone,
          age,
          aadhar,
          tshirt,
          gender,
          ticketID
     ) => {
          setLoading(true);
          await registerForArambha(
               name,
               email,
               phone,
               age,
               aadhar,
               tshirt,
               gender,
               ticketID
          )
               .then((response) => {
                    setUser((prevState) => {
                         return {
                              name,
                              email,
                              phone,
                              age,
                              aadhar,
                              tshirt,
                              gender,
                              ticketID
                         };
                    });
                    sendEmail(
                         name,
                         email,
                         phone,
                         age,
                         aadhar,
                         tshirt,
                         gender,
                         ticketID
                    );
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

     const sendEmail = async (
          name,
          email,
          phone,
          age,
          aadhar,
          tshirt,
          gender,
          ticketID
     ) => {
          setEvent(true);
          await emailjs
               .send(
                    'service_5d1bzlp',
                    'template_yk6wzra',
                    { name: name, email: email, ticketID: ticketID },
                    'user_Zp6dTdYGxn4E5rxeiLLCh'
               )
               .then(
                    (result) => {
                         setEvent(true);
                         setLoading(false);
                         toast({
                              title: 'Success',
                              description:
                                   'A ticket has been sent to your email',
                              status: 'success',
                              duration: 9000,
                              isClosable: true
                         });
                    },
                    (error) => {
                         console.log(error.text);
                    }
               );

          // Send Email
          await fetch('https://formsubmit.co/ajax/info@athayogliving.com', {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
               },
               body: JSON.stringify({
                    FormType: 'Registration For Arambha',
                    name,
                    email,
                    phone,
                    age,
                    aadhar,
                    tshirt,
                    gender,
                    ticketID
               })
          });
     };

     const Ticket = () => {
          return (
               <Flex
                    rounded="md"
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    bg="white"
                    boxShadow="base"
                    py={6}
                    px={6}
               >
                    <Box width="full">
                         <Stack
                              textAlign="left"
                              spacing={6}
                              ref={componentRef}
                              py={2}
                              px={2}
                              width="full"
                         >
                              <Flex gap={5} alignItems="center">
                                   <Image
                                        src={Logo}
                                        height={30}
                                        width={30}
                                        alt="logo"
                                   />
                                   <Text fontSize="xl">
                                        INTERNATIONAL DAY OF YOGA - YOGA ARAMBHA
                                   </Text>
                              </Flex>
                              <Text>Namaste {user.name}. Congratulations,</Text>
                              <Text>
                                   Your Yoga Arambha Event Ticket is ready.
                              </Text>
                              <Text>
                                   We are extremely excited to invite you to
                                   Join us at this Yoga Arambha Event on
                                   International Day of Yoga! This is a grand
                                   initiative to celebrate the Yog way of life.
                              </Text>
                              <Text>
                                   {' '}
                                   Please show this ticket at the venue
                                   registration destination and collect your
                                   pass
                              </Text>

                              <TableContainer
                                   border="1px solid"
                                   borderColor="gray.100"
                              >
                                   <Table variant="simple" size="sm">
                                        <Thead>
                                             <Tr>
                                                  <Th>TickedID</Th>
                                                  <Th>Name</Th>
                                                  <Th>Location</Th>
                                                  <Th>Date</Th>
                                             </Tr>
                                        </Thead>
                                        <Tbody>
                                             <Tr>
                                                  <Td>{user.ticketID}</Td>
                                                  <Td>{user.name}</Td>
                                                  <Td>
                                                       Kittur Rani Chennamma{' '}
                                                       <br />
                                                       Stadium, Bengaluru
                                                  </Td>
                                                  <Td>
                                                       Tuesday, <br />
                                                       June 21, 2022
                                                  </Td>
                                             </Tr>
                                        </Tbody>
                                   </Table>
                              </TableContainer>
                              <Text>
                                   All the best for your Yoga Arambha Sadhana.
                              </Text>
                              <Text> From Athayog Living. </Text>
                         </Stack>
                    </Box>
                    <Flex
                         justifyContent="space-between"
                         width="full"
                         alignItems="center"
                         gap={5}
                    >
                         <Button
                              colorScheme="green"
                              size="sm"
                              onClick={handlePrint}
                              rounded="sm"
                              mt={5}
                         >
                              Print Ticket
                         </Button>
                    </Flex>
                    <Badge mt={5} width="max-content" whiteSpace="pre-wrap">
                         A copy of ticket has been sent to your email
                    </Badge>
               </Flex>
          );
     };

     const Form = () => {
          return (
               <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                    <Heading fontSize="3xl">Register Now</Heading>
                    <Flex
                         gap={10}
                         flexWrap="wrap"
                         rounded="md"
                         py={8}
                         width="full"
                         justifyContent="center"
                         textColor="black"
                         direction="column"
                         bg="white"
                         boxShadow="base"
                         px={5}
                         mt={6}
                    >
                         <FormControl>
                              <FormLabel>
                                   Name{' '}
                                   <chakra.span textColor="red.500">
                                        *
                                   </chakra.span>
                              </FormLabel>
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
                         <Flex gap={5}>
                              {' '}
                              <FormControl>
                                   <FormLabel>
                                        Email
                                        <chakra.span textColor="red.500">
                                             *
                                        </chakra.span>
                                   </FormLabel>
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
                              <FormControl>
                                   <FormLabel>
                                        Phone{' '}
                                        <chakra.span textColor="red.500">
                                             *
                                        </chakra.span>
                                   </FormLabel>
                                   <Input
                                        type="tel"
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
                         </Flex>
                         <Flex gap={5}>
                              <FormControl>
                                   <FormLabel>
                                        Age{' '}
                                        <chakra.span textColor="red.500">
                                             *
                                        </chakra.span>
                                   </FormLabel>
                                   <Input
                                        type="number"
                                        placeholder="Your Age"
                                        id="age"
                                        variant="outline"
                                        disabled={loading}
                                        bg="white"
                                        name="age"
                                        ref={register({
                                             required: true
                                        })}
                                   />
                              </FormControl>
                              <FormControl>
                                   <FormLabel>
                                        Gender{' '}
                                        <chakra.span textColor="red.500">
                                             *
                                        </chakra.span>
                                   </FormLabel>
                                   <Select
                                        placeholder="Select option"
                                        name="gender"
                                        disabled={loading}
                                        ref={register({
                                             required: true
                                        })}
                                   >
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                   </Select>
                              </FormControl>
                         </Flex>

                         <FormControl>
                              <FormLabel>
                                   Adhaar Number{' '}
                                   <chakra.span textColor="green.500">
                                        (optional)
                                   </chakra.span>
                              </FormLabel>
                              <Input
                                   type="number"
                                   placeholder="Aadhar Number"
                                   id="aadhar"
                                   variant="outline"
                                   disabled={loading}
                                   bg="white"
                                   name="aadhar"
                                   ref={register({
                                        required: false
                                   })}
                              />
                         </FormControl>
                         <FormControl>
                              <FormLabel>
                                   T Shirt Size{' '}
                                   <chakra.span textColor="red.500">
                                        *
                                   </chakra.span>
                              </FormLabel>
                              <Select
                                   placeholder="Select option"
                                   disabled={loading}
                                   name="tshirt"
                                   ref={register({
                                        required: true
                                   })}
                              >
                                   <option value="S">S</option>
                                   <option value="M">M</option>
                                   <option value="L">L</option>
                                   <option value="XL">XL</option>
                              </Select>
                         </FormControl>

                         <Button
                              rounded="md"
                              colorScheme="green"
                              type="submit"
                              isLoading={loading}
                              loadingText="submitting.."
                              width="xs"
                              alignSelf="flex-end"
                         >
                              Submit
                         </Button>
                    </Flex>
               </form>
          );
     };
     return (
          <Box bg="gray.50">
               <NavbarHelper />
               <Container
                    maxW="container.lg"
                    justifySelf="right"
                    textColor="black"
                    rounded="none"
                    overflow="hidden"
                    minH="100vw"
                    py={20}
               >
                    {event ? <Ticket /> : <Form />}
               </Container>
          </Box>
     );
}

export default EventRegister;
