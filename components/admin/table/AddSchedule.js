import {
     Box,
     HStack,
     Input,
     Button,
     FormErrorMessage,
     FormControl,
     toast,
     useToast,
     Select,
     FormLabel,
     Flex,
     Heading,
     Grid,
     Text
} from '@chakra-ui/react';

import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import { createSchedule } from '@/lib/db/schedule';
import { useMediaQuery } from 'react-responsive';
import { mutate } from 'swr';

const AddSchedule = ({ type }) => {
     const [loading, setLoading] = useState(false);

     const toast = useToast();
     const { handleSubmit, register, errors, reset } = useForm();

     const isTabletOrMobile = useMediaQuery({
          query: '(max-width: 1224px)'
     });
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

     const converToFull = (time, minutes, period) => {
          const fullDate =
               period == 'pm' && time > 12
                    ? Number(time) + 12 + ':' + minutes + ':' + '00'
                    : time + ':' + minutes + ':' + '00';
          return new Date('1970-01-01T' + fullDate);
     };

     const onCreateSchedule = async (data) => {
          const {
               fromHours,
               fromMinutes,
               fromPeriod,
               toHours,
               toMinutes,
               toPeriod,
               specialCase,
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
               specialCase,
               monday,
               tuesday,
               wednesday,
               thursday,
               friday,
               saturday,
               sunday
          };

          setLoading(true);
          await createSchedule(type + 'Schedule', updatedData)
               .then((response) => {
                    setLoading(false);
                    toast({
                         title: 'New Schedule Created',
                         description: "We've have updated the schedule table.",
                         status: 'success',
                         duration: 9000,
                         isClosable: true
                    });
                    mutate(`api/schedule/${type}Schedule`);
                    reset();
               })
               .catch((error) => {
                    toast({
                         title: 'Something Happend',
                         description: error.message,
                         status: 'error',
                         duration: 9000,
                         isClosable: true
                    });
                    setLoading(false);
                    reset();
                    return;
               });
     };

     const isCustomerQuery = useMediaQuery({
          query: '(max-width: 750px)'
     });

     return (
          <Box
               onSubmit={handleSubmit((data) => onCreateSchedule(data))}
               as="form"
          >
               <Heading fontSize="xl" fontWeight="medium">
                    Create Schedule
               </Heading>
               <Flex justify="flex-start" mt={3} flexWrap="wrap  ">
                    <FormControl>
                         <FormLabel>From Time</FormLabel>
                         <HStack width={isCustomerQuery ? '100%' : 'sm'}>
                              <Select
                                   name="fromHours"
                                   ref={register({
                                        required: 'Please select from hours.'
                                   })}
                              >
                                   {hours.map((number, index) => (
                                        <option key={index} value={number}>
                                             {number}
                                        </option>
                                   ))}
                              </Select>
                              <Select
                                   name="fromMinutes"
                                   ref={register({
                                        required: 'Please select from minutes.'
                                   })}
                              >
                                   {minutes.map((number, index) => (
                                        <option key={index} value={number}>
                                             {number}
                                        </option>
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
                    <FormControl mt={3}>
                         <FormLabel>To Time</FormLabel>
                         <HStack width={isCustomerQuery ? '100%' : 'sm'}>
                              <Select
                                   name="toHours"
                                   ref={register({
                                        required: 'Please select a from hour.'
                                   })}
                              >
                                   {hours.map((number, index) => (
                                        <option key={index} value={number}>
                                             {number}
                                        </option>
                                   ))}
                              </Select>
                              <Select
                                   name="toMinutes"
                                   ref={register({
                                        required: 'Please select from minute.'
                                   })}
                              >
                                   {minutes.map((number, index) => (
                                        <option key={index} value={number}>
                                             {number}
                                        </option>
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
                    <FormControl>
                         <FormLabel>Special Case</FormLabel>
                         <Input
                              type="text"
                              name="specialCase"
                              aria-label="specialCase"
                              ref={register()}
                         />
                    </FormControl>
               </HStack>
               <HStack
                    mt={3}
                    flexDirection={isCustomerQuery ? 'column' : 'row'}
               >
                    {entries.map((data, index) => {
                         return (
                              <FormControl id={data} key={index}>
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
