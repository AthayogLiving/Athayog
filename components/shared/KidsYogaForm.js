import {
     Box,
     FormControl,
     FormLabel,
     FormErrorMessage,
     FormHelperText,
     Input,
     VStack,
     Button,
     HStack,
     Stack,
     Text,
     Select,
     Divider
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function KidsYogaForm() {
     const { handleSubmit, register, errors, reset } = useForm();

     const handleData = (data) => {
          console.log(data);
     };
     return (
          <VStack
               bg="white"
               boxShadow="base"
               rounded="md"
               py={{ base: '5', md: '8' }}
               px={{ base: '5', md: '8' }}
               spacing={8}
               as="form"
               onSubmit={handleSubmit((data) => handleData(data))}
          >
               <Text textAlign="left" width="100%" textTransform="uppercase">
                    Parents Details
               </Text>
               <Stack width="100%" direction={['column', 'row']} spacing="24px">
                    <FormControl>
                         <FormLabel htmlFor="parentName">
                              Parents Name
                         </FormLabel>
                         <Input
                              id="parentName"
                              type="text"
                              name="parentName"
                              ref={register({
                                   required:
                                        'Please enter your gaurdian/parent name'
                              })}
                         />
                    </FormControl>
                    <FormControl>
                         <FormLabel htmlFor="parentPhone">
                              Phone number
                         </FormLabel>
                         <Input
                              id="parentPhone"
                              name="parentPhone"
                              type="number"
                              ref={register({
                                   required: 'Please enter your parent phone'
                              })}
                         />
                    </FormControl>
               </Stack>
               <FormControl>
                    <FormLabel htmlFor="parentEmail"> Email Address.</FormLabel>
                    <Input
                         id="parentEmail"
                         type="email"
                         name="email"
                         ref={register({
                              required: 'Please enter your email'
                         })}
                    />
               </FormControl>

               <Divider />
               <Text textAlign="left" width="100%" textTransform="uppercase">
                    Kids Details
               </Text>

               <Stack width="100%" direction={['column', 'row']} spacing="24px">
                    <FormControl>
                         <FormLabel htmlFor="kidName">Name</FormLabel>
                         <Input
                              id="kidName"
                              type="text"
                              name="kidsName"
                              ref={register({
                                   required: 'Please enter kids name'
                              })}
                         />
                    </FormControl>{' '}
                    <FormControl>
                         <FormLabel htmlFor="kidDOB">DOB</FormLabel>
                         <Input
                              id="kidDOB"
                              type="date"
                              name="date"
                              ref={register({
                                   required: 'Select a date'
                              })}
                         />
                    </FormControl>
               </Stack>
               <Stack width="100%" direction={['column', 'row']} spacing="24px">
                    {' '}
                    <FormControl>
                         <FormLabel htmlFor="published-date">Class</FormLabel>
                         <Input
                              id="kidClass"
                              type="text"
                              name="class"
                              ref={register({
                                   required: 'Please enter your class'
                              })}
                         />
                    </FormControl>
                    <FormControl>
                         <FormLabel htmlFor="published-date">
                              School Name
                         </FormLabel>
                         <Input
                              id="school"
                              type="text"
                              name="school"
                              ref={register({
                                   required: 'Please enter your school'
                              })}
                         />
                    </FormControl>
               </Stack>
               <FormControl>
                    <FormLabel htmlFor="published-date">Location</FormLabel>
                    <Select
                         name="location"
                         ref={register({
                              required: 'Please select a location'
                         })}
                    >
                         <option value="online">
                              Online (Indiranagar/KR Puram)
                         </option>
                         <option value="offline">Offline</option>
                    </Select>
               </FormControl>

               <FormControl>
                    <Button type="submit" colorScheme="green">
                         Register
                    </Button>
               </FormControl>
          </VStack>
     );
}

export default KidsYogaForm;
