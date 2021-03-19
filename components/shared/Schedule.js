import React, { useEffect, useState } from 'react';
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
     Button,
     Modal,
     ModalOverlay,
     ModalContent,
     ModalHeader,
     ModalFooter,
     ModalBody,
     ModalCloseButton,
     useDisclosure,
     ButtonGroup,
     Text,
     useToast,
     toast
} from '@chakra-ui/react';
import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import { google, outlook, office365, yahoo, ics } from 'calendar-link';
import { ImGoogle } from 'react-icons/im';
import { SiMicrosoft } from 'react-icons/si';

import {
     SetThisWeek,
     formatTimeForCalendar,
     formatDateForCalendar
} from '@/components/helper/SetThisWeek';

const Schedule = ({ schedule }) => {
     const { data, error } = useSWR(
          `/api/schedule/${schedule}Schedule`,
          fetcher
     );
     const { isOpen, onOpen, onClose } = useDisclosure();
     const toast = useToast();
     const [event, setEvent] = useState({
          title: '',
          description: '',
          start: '',
          location: '',
          duration: [3, 'hour']
     });

     const thisWeek = SetThisWeek();

     if (error) {
          return null;
     }

     if (!data) {
          return null;
     }

     if (data.schedule.length === 0) {
          return null;
     }

     const addNow = (
          name,
          week,
          fromHours,
          fromMinutes,
          fromPeriod,
          toHours,
          toMinutes,
          toPeriod
     ) => {
          if (name === '-' || name === undefined || name === '') {
               return toast({
                    title: `Sorry nothing on this Day`,
                    description: 'This days program is not present',
                    status: 'warning',
                    duration: 9000,
                    isClosable: true
               });
          }

          if (thisWeek[`${week}`] === 'yesterday') {
               return toast({
                    title: `Sorry ${name} is already completed`,
                    description: 'This week program is already passed',
                    status: 'warning',
                    duration: 9000,
                    isClosable: true
               });
          }

          const { startTime, endTime } = formatTimeForCalendar(
               fromHours,
               fromMinutes,
               fromPeriod,
               toHours,
               toMinutes,
               toPeriod
          );

          const { theStartDate, theEndDate } = formatDateForCalendar(
               startTime,
               endTime,
               thisWeek[`${week}`],
               week
          );

          onOpen();
          setEvent({
               title: name,
               start: theStartDate,
               end: theEndDate,
               location:
                    'AthaYog Living, Devasandra Main Road, Kodigehalli, Krishnarajapura, Bengaluru, Karnataka',
               description: `Yoga class ${name}`
          });
     };

     const addToCalender = (type) => {
          switch (type) {
               case 'google':
                    window.open(google(event), '_blank');
                    break;

               case 'office':
                    window.open(office365(event), '_blank');
                    break;
               default:
                    break;
          }
     };
     return (
          <>
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
                                   colorScheme="aygreen"
                                   className="scheduleTable"
                              >
                                   <TableCaption bg="aygreen.300" marginTop="0">
                                        Click on the program to add it your
                                        calendar
                                   </TableCaption>
                                   <Thead>
                                        <Tr>
                                             <Th bg="aygreen.200">Time</Th>
                                             <Th
                                                  bg="aygreen.200"
                                                  textAlign="center"
                                             >
                                                  Mon
                                             </Th>
                                             <Th
                                                  bg="aygreen.200"
                                                  textAlign="center"
                                             >
                                                  Tue
                                             </Th>
                                             <Th
                                                  bg="aygreen.200"
                                                  textAlign="center"
                                             >
                                                  Wed
                                             </Th>
                                             <Th
                                                  bg="aygreen.200"
                                                  textAlign="center"
                                             >
                                                  Thu
                                             </Th>
                                             <Th
                                                  bg="aygreen.200"
                                                  textAlign="center"
                                             >
                                                  Fri
                                             </Th>
                                             <Th
                                                  bg="aygreen.200"
                                                  textAlign="center"
                                             >
                                                  Sat
                                             </Th>
                                             <Th
                                                  bg="aygreen.200"
                                                  textAlign="center"
                                             >
                                                  Sun
                                             </Th>
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
                                                  specialCase,
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
                                                                 fontWeight="normal"
                                                                 bg="aygreen.100"
                                                            >
                                                                 {fromHours}:
                                                                 {fromMinutes}{' '}
                                                                 {fromPeriod} -{' '}
                                                                 {toHours}:
                                                                 {toMinutes}{' '}
                                                                 {toPeriod}{' '}
                                                                 <br />
                                                                 {specialCase
                                                                      ? '(' +
                                                                        specialCase +
                                                                        ')'
                                                                      : null}
                                                            </Td>

                                                            <Td
                                                                 cursor="pointer"
                                                                 _hover={{
                                                                      background:
                                                                           'aygreen.50'
                                                                 }}
                                                                 onClick={() =>
                                                                      addNow(
                                                                           monday,
                                                                           'monday',
                                                                           fromHours,
                                                                           fromMinutes,
                                                                           fromPeriod,
                                                                           toHours,
                                                                           toMinutes,
                                                                           toPeriod
                                                                      )
                                                                 }
                                                            >
                                                                 {monday}
                                                            </Td>

                                                            <Td
                                                                 cursor="pointer"
                                                                 _hover={{
                                                                      background:
                                                                           'aygreen.50'
                                                                 }}
                                                                 onClick={() =>
                                                                      addNow(
                                                                           tuesday,
                                                                           'tuesday',
                                                                           fromHours,
                                                                           fromMinutes,
                                                                           fromPeriod,
                                                                           toHours,
                                                                           toMinutes,
                                                                           toPeriod
                                                                      )
                                                                 }
                                                            >
                                                                 {tuesday}
                                                            </Td>
                                                            <Td
                                                                 cursor="pointer"
                                                                 _hover={{
                                                                      background:
                                                                           'aygreen.50'
                                                                 }}
                                                                 onClick={() =>
                                                                      addNow(
                                                                           wednesday,
                                                                           'wednesday',
                                                                           fromHours,
                                                                           fromMinutes,
                                                                           fromPeriod,
                                                                           toHours,
                                                                           toMinutes,
                                                                           toPeriod
                                                                      )
                                                                 }
                                                            >
                                                                 {wednesday}
                                                            </Td>
                                                            <Td
                                                                 cursor="pointer"
                                                                 _hover={{
                                                                      background:
                                                                           'aygreen.50'
                                                                 }}
                                                                 onClick={() =>
                                                                      addNow(
                                                                           thursday,
                                                                           'thursday',
                                                                           fromHours,
                                                                           fromMinutes,
                                                                           fromPeriod,
                                                                           toHours,
                                                                           toMinutes,
                                                                           toPeriod
                                                                      )
                                                                 }
                                                            >
                                                                 {thursday}
                                                            </Td>
                                                            <Td
                                                                 cursor="pointer"
                                                                 _hover={{
                                                                      background:
                                                                           'aygreen.50'
                                                                 }}
                                                                 onClick={() =>
                                                                      addNow(
                                                                           friday,
                                                                           'friday',
                                                                           fromHours,
                                                                           fromMinutes,
                                                                           fromPeriod,
                                                                           toHours,
                                                                           toMinutes,
                                                                           toPeriod
                                                                      )
                                                                 }
                                                            >
                                                                 {friday}
                                                            </Td>
                                                            <Td
                                                                 cursor="pointer"
                                                                 _hover={{
                                                                      background:
                                                                           'aygreen.50'
                                                                 }}
                                                                 onClick={() =>
                                                                      addNow(
                                                                           saturday,
                                                                           'saturday',
                                                                           fromHours,
                                                                           fromMinutes,
                                                                           fromPeriod,
                                                                           toHours,
                                                                           toMinutes,
                                                                           toPeriod
                                                                      )
                                                                 }
                                                            >
                                                                 {saturday}
                                                            </Td>
                                                            <Td
                                                                 cursor="pointer"
                                                                 _hover={{
                                                                      background:
                                                                           'aygreen.50'
                                                                 }}
                                                                 onClick={() =>
                                                                      addNow(
                                                                           sunday,
                                                                           'sunday',
                                                                           fromHours,
                                                                           fromMinutes,
                                                                           fromPeriod,
                                                                           toHours,
                                                                           toMinutes,
                                                                           toPeriod
                                                                      )
                                                                 }
                                                            >
                                                                 {sunday}
                                                            </Td>
                                                       </Tr>
                                                  );
                                             }
                                        )}
                                   </Tbody>
                              </Table>
                         </Box>
                         <Box mt={3} textAlign="left" w="100%">
                              <Text>Timings :* Weekdays:5:30am-9:30pm</Text>
                              <Text>* Weekends: 7:00 am-08:00 pm</Text>
                              <Text>
                                   *We are closed every 2nd Saturday of the
                                   Month.
                              </Text>
                         </Box>
                    </Flex>
               </Flex>
               <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                         <ModalHeader>Choose your provider</ModalHeader>
                         <ModalCloseButton />
                         <ModalBody>
                              <ButtonGroup
                                   size="sm"
                                   justifyContent="center"
                                   width="100%"
                              >
                                   <Button
                                        leftIcon={<ImGoogle />}
                                        colorScheme="blue"
                                        onClick={() => addToCalender('google')}
                                   >
                                        Google
                                   </Button>

                                   <Button
                                        leftIcon={<SiMicrosoft />}
                                        colorScheme="orange"
                                        onClick={() => addToCalender('office')}
                                   >
                                        Outlook
                                   </Button>
                              </ButtonGroup>
                              <Text textAlign="center" mt={5} color="gray.600">
                                   You Will Be Redirected To Your Calendar
                                   Provider
                              </Text>
                         </ModalBody>

                         <ModalFooter></ModalFooter>
                    </ModalContent>
               </Modal>
          </>
     );
};

export async function getStaticProps(context) {
     const schedule = await fetcher('/api/schedule/generalSchedule');
     return { props: { schedule }, revalidate: 1 };
}

export default Schedule;
