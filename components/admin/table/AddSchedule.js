import {
     Box,
     HStack,
     Table,
     Thead,
     Tbody,
     Tfoot,
     Tr,
     Th,
     Input,
     Td,
     TableCaption,
     Button,
     FormErrorMessage,
     FormControl,
     toast,
     useToast
} from '@chakra-ui/react';

import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useForm } from 'react-hook-form';
import { createSchedule } from '@/lib/db/schedule';

const AddSchedule = ({ type }) => {
     const [loading, setLoading] = useState(false);
     const toast = useToast();
     const { handleSubmit, register, errors } = useForm();
     const entries = [
          'Time',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
     ];

     console.log(type);

     const onCreateSchedule = async (data) => {
          setLoading(true);
          await createSchedule(type + 'Schedule', data).catch((error) => {
               toast({
                    title: 'Something Happend',
                    description: error.message,
                    status: 'error',
                    duration: 9000,
                    isClosable: true
               });
               setLoading(false);
               return;
          });
          setLoading(false);
          toast({
               title: 'New Schedule Created',
               description: "We've have updated the schedule table.",
               status: 'success',
               duration: 9000,
               isClosable: true
          });
     };
     return (
          <Box
               onSubmit={handleSubmit((data) => onCreateSchedule(data))}
               as="form"
          >
               <Table size="sm" colorScheme="whatsapp">
                    <Thead>
                         <Tr>
                              {entries.map((data) => {
                                   return <Th key={uuidv4()}>{data}</Th>;
                              })}
                         </Tr>
                    </Thead>
                    <Tbody>
                         <Tr>
                              {entries.map((data) => {
                                   return (
                                        <Td key={uuidv4()}>
                                             <FormControl id={data}>
                                                  <Input
                                                       type="text"
                                                       name={data.toLocaleLowerCase()}
                                                       aria-label={data}
                                                       ref={register({
                                                            required:
                                                                 'Please enter the value.'
                                                       })}
                                                  />
                                                  <FormErrorMessage>
                                                       {errors.data &&
                                                            errors.data.message}
                                                  </FormErrorMessage>
                                             </FormControl>
                                        </Td>
                                   );
                              })}
                         </Tr>
                    </Tbody>
               </Table>
               <Button
                    size="sm"
                    colorScheme="green"
                    mt={3}
                    type="submit"
                    isLoading={loading}
               >
                    Create New Timings
               </Button>
          </Box>
     );
};

export default AddSchedule;
