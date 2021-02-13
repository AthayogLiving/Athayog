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
     useToast,
     Select,
     FormLabel,
     Flex
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
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
     ];
     const minutes = [];
     const hours = [
          '00',
          '01',
          '02',
          '03',
          '04',
          '05',
          '06',
          '07',
          '08',
          '09',
          '10',
          '11',
          '12'
     ];

     for (let i = 0; i < 60; i++) {
          if (i < 10) {
               i = i + '0';
          }
          minutes.push(i);
     }

     const [value, onChange] = useState(['10:00', '11:00']);

     const converToFull = (time, minutes, period) => {
          const fullDate =
               period == 'pm'
                    ? Number(time) + 12 + ':' + minutes + ':' + '00'
                    : time + ':' + minutes + ':' + '00';
          return new Date('1970-01-01T' + fullDate);
     };

     const onCreateSchedule = async (data) => {
          console.log(data);
          const {
               fromHours,
               fromMinutes,
               fromPeriod,
               toHours,
               toMinutes,
               toPeriod,
               monday,
               tuesday,
               wednesday,
               thursday,
               friday,
               saturday,
               sunday
          } = data;
          const firebaseTimeTrack = converToFull(
               fromHours,
               fromMinutes,
               fromPeriod
          );
          const updatedData = {
               fromHours,
               fromMinutes,
               fromPeriod,
               toHours,
               toMinutes,
               toPeriod,
               firebaseTimeTrack,
               monday,
               tuesday,
               wednesday,
               thursday,
               friday,
               saturday,
               sunday
          };

          console.log(updatedData);
          setLoading(true);
          await createSchedule(type + 'Schedule', updatedData).catch(
               (error) => {
                    toast({
                         title: 'Something Happend',
                         description: error.message,
                         status: 'error',
                         duration: 9000,
                         isClosable: true
                    });
                    setLoading(false);
                    return;
               }
          );
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
               <Flex justify="flex-start">
                    <FormControl>
                         <FormLabel>From Time</FormLabel>
                         <HStack width="sm">
                              <Select
                                   name="fromHours"
                                   ref={register({
                                        required: 'Please select from hours.'
                                   })}
                              >
                                   {hours.map((number) => (
                                        <option value={number}>{number}</option>
                                   ))}
                              </Select>
                              <Select
                                   name="fromMinutes"
                                   ref={register({
                                        required: 'Please select from minutes.'
                                   })}
                              >
                                   {minutes.map((number) => (
                                        <option value={number}>{number}</option>
                                   ))}
                              </Select>
                              <Select
                                   name="fromPeriod"
                                   ref={register({
                                        required: 'Please select am or pm.'
                                   })}
                              >
                                   <option value="am">AM</option>
                                   <option value="pm">PM</option>
                              </Select>
                         </HStack>
                    </FormControl>
                    <FormControl>
                         <FormLabel>To Time</FormLabel>
                         <HStack width="sm">
                              <Select
                                   name="toHours"
                                   ref={register({
                                        required: 'Please select a from hour.'
                                   })}
                              >
                                   {hours.map((number) => (
                                        <option value={number}>{number}</option>
                                   ))}
                              </Select>
                              <Select
                                   name="toMinutes"
                                   ref={register({
                                        required: 'Please select from minute.'
                                   })}
                              >
                                   {minutes.map((number) => (
                                        <option value={number}>{number}</option>
                                   ))}
                              </Select>
                              <Select
                                   name="toPeriod"
                                   ref={register({
                                        required: 'Please select am or pm.'
                                   })}
                              >
                                   <option value="am">AM</option>
                                   <option value="pm">PM</option>
                              </Select>
                         </HStack>
                    </FormControl>
               </Flex>

               <HStack mt={3}>
                    {entries.map((data) => {
                         return (
                              <FormControl id={data}>
                                   <FormLabel>{data}</FormLabel>
                                   <Input
                                        type="text"
                                        name={data.toLocaleLowerCase()}
                                        aria-label={data}
                                        ref={register({
                                             required: 'Please enter the value.'
                                        })}
                                   />
                                   <FormErrorMessage>
                                        {errors.data && errors.data.message}
                                   </FormErrorMessage>
                              </FormControl>
                         );
                    })}
               </HStack>

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
