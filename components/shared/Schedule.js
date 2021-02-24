import React from 'react';
import {
     Table,
     Thead,
     Tbody,
     Tr,
     Th,
     Td,
     TableCaption,
     Box,
     Flex,
     Heading,
     Grid,
     Text
} from '@chakra-ui/react';
import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import ScheduleMobile from './ScheduleMobile';

const Schedule = ({ schedule }) => {
     const { data, error } = useSWR(
          `/api/schedule/${schedule}Schedule`,
          fetcher
     );

     if (error) {
          return null;
     }

     if (!data) {
          return null;
     }

     const getHumanDate = (hours, minutes, period) => {
          return (hours + ':' + minutes + ' ' + period).toString();
     };

     if (data.schedule.length === 0) {
          return null;
     }
     return (
          <Flex
               margin="auto"
               padding={{ base: '2rem 0', md: '3rem 0', lg: '5rem 0' }}
               justifyContent="center"
               alignItems="center"
               width="100vw"
               bg="primaryWhite"
          >
               <Flex
                    justifyContent="center"
                    direction="column"
                    alignItems="center"
                    width={{ base: '95%', md: '90%', lg: '80%' }}
               >
                    <Heading
                         fontWeight="normal"
                         fontSize={{ base: '2xl', md: '3xl' }}
                    >
                         Schedule
                    </Heading>

                    <Box
                         overflowX="auto"
                         width="100%"
                         boxShadow="base"
                         rounded="lg"
                         mt={10}
                    >
                         <Table
                              variant="simple"
                              size="md"
                              className="scheduleTable"
                         >
                              <Thead>
                                   <Tr>
                                        <Th bg="secondaryGreen">Time</Th>
                                        <Th bg="secondaryGreen">Monday</Th>
                                        <Th bg="secondaryGreen">Tuesday</Th>
                                        <Th bg="secondaryGreen">Wednesday</Th>
                                        <Th bg="secondaryGreen">Thursday</Th>
                                        <Th bg="secondaryGreen">Friday</Th>
                                        <Th bg="secondaryGreen">Saturday</Th>
                                        <Th bg="secondaryGreen">Sunday</Th>
                                   </Tr>
                              </Thead>
                              <Tbody>
                                   {data.schedule.map(
                                        ({
                                             id,
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
                                        } = data) => {
                                             return (
                                                  <Tr key={id}>
                                                       <Td
                                                            width="200px"
                                                            fontWeight="medium"
                                                            bg="aygreen.50"
                                                       >
                                                            {fromHours}:
                                                            {fromMinutes}{' '}
                                                            {fromPeriod} -{' '}
                                                            {toHours}:
                                                            {toMinutes}{' '}
                                                            {toPeriod}
                                                       </Td>
                                                       <Td bg="white">
                                                            {monday}
                                                       </Td>
                                                       <Td bg="white">
                                                            {tuesday}
                                                       </Td>
                                                       <Td bg="white">
                                                            {wednesday}
                                                       </Td>
                                                       <Td bg="white">
                                                            {thursday}
                                                       </Td>
                                                       <Td bg="white">
                                                            {friday}
                                                       </Td>
                                                       <Td bg="white">
                                                            {saturday}
                                                       </Td>
                                                       <Td bg="white">
                                                            {sunday}
                                                       </Td>
                                                  </Tr>
                                             );
                                        }
                                   )}
                              </Tbody>
                         </Table>
                    </Box>
               </Flex>
          </Flex>
     );
};

export async function getStaticProps(context) {
     const schedule = await fetcher('/api/schedule/generalSchedule');
     return { props: { schedule }, revalidate: 1 };
}

export default Schedule;
