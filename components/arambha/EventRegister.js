import { checkForArambha, registerForArambha } from '@/lib/db/forms';
import { ArrowBackIcon } from '@chakra-ui/icons';
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
     chakra,
     useToast,
     FormErrorMessage,
     Badge,
     SimpleGrid,
     Divider,
     Table,
     Thead,
     Tbody,
     Tfoot,
     Tr,
     Th,
     Td,
     TableCaption,
     TableContainer
} from '@chakra-ui/react';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import nextId from 'react-id-generator';
import { useReactToPrint } from 'react-to-print';
import { v4 as uuidv4 } from 'uuid';
import Logo from 'public/Logo_Filled.png';
import NavbarHelper from '../shared/NavbarHelper';

function EventRegister() {
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
                    console.log(ticketID);
                    setUser({ name, email, phone, ticketID });
                    setUser((prevState) => {
                         return {
                              ...prevState,
                              name,
                              email,
                              phone,
                              ticketID
                         };
                    });
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

                              <TableContainer>
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
                         </Stack>
                    </Box>
                    <Flex
                         justifyContent="space-between"
                         width="full"
                         alignItems="center"
                    >
                         <Badge mt={5}>
                              A copy of ticket has been sent to your email
                         </Badge>
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
               </Flex>
          );
     };

     const Form = () => {
          return (
               <form onSubmit={handleSubmit(onSubmit)}>
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
                              <FormErrorMessage>{errors.name}</FormErrorMessage>
                         </FormControl>
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
                              <FormErrorMessage>
                                   {errors.email}
                              </FormErrorMessage>
                         </FormControl>
                         <FormControl>
                              <FormLabel>
                                   Phone{' '}
                                   <chakra.span textColor="red.500">
                                        *
                                   </chakra.span>
                              </FormLabel>
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
                              <FormErrorMessage>
                                   {errors.phone}
                              </FormErrorMessage>
                         </FormControl>
                         <Button
                              rounded="md"
                              colorScheme="yellow"
                              type="submit"
                              isLoading={loading}
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
                    <Button
                         mb={16}
                         colorScheme="blackAlpha"
                         size="sm"
                         leftIcon={<ArrowBackIcon />}
                    >
                         Back To Yoga Day
                    </Button>
                    {event ? <Ticket /> : <Form />}
               </Container>
          </Box>
     );
}

export default EventRegister;
