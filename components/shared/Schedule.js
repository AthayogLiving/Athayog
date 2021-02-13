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

const Schedule = ({ schedule }) => {
     const { data, error } = useSWR(`/api/schedule/Generalschedule`, fetcher, {
          initialData: schedule
     });

     if (error) {
          return (
               <Grid placeItems="center">
                    <Text>Something Happened Try Again</Text>
               </Grid>
          );
     }

     if (!data) {
          return null;
     }

     const getHumanDate = (hours, minutes, period) => {
          return (hours + ':' + minutes + ' ' + period).toString();
     };
     return (
          <Flex
               margin="auto"
               padding="5rem 0"
               justifyContent="center"
               alignItems="center"
               width="100vw"
               bg="#fbfbfb"
          >
               <Flex
                    justifyContent="center"
                    direction="column"
                    alignItems="center"
                    width="60vw"
               >
                    <Heading fontWeight="normal">Schedule</Heading>
                    <Table
                         variant="striped"
                         colorScheme="whatsapp"
                         mt={10}
                         boxShadow="base"
                         rounded="lg"
                         overflow="hidden"
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
                                             <Tr>
                                                  <Td
                                                       width="200px"
                                                       fontWeight="medium"
                                                  >
                                                       {fromHours}:{fromMinutes}{' '}
                                                       {fromPeriod} - {toHours}:
                                                       {toMinutes} {toPeriod}
                                                  </Td>
                                                  <Td>{monday}</Td>
                                                  <Td>{tuesday}</Td>
                                                  <Td>{wednesday}</Td>
                                                  <Td>{thursday}</Td>
                                                  <Td>{friday}</Td>
                                                  <Td>{saturday}</Td>
                                                  <Td>{sunday}</Td>
                                             </Tr>
                                        );
                                   }
                              )}
                         </Tbody>
                    </Table>
               </Flex>
          </Flex>
     );
};

export async function getStaticProps(context) {
     const schedule = await fetcher('/api/schedule/Generalschedule');
     return { props: { schedule }, revalidate: 1 };
}

export default Schedule;
