import HomeLayout from '@/components/layout/HomeLayout';
import ContactMore from '@/components/shared/ContactMore';
import HeaderLayout from '@/components/shared/offerings/HeaderLayout';
import ShikshanaCalendarTable from '@/components/shared/ShikshanaCalendarTable';
import { Heading, Stack, Text } from '@chakra-ui/layout';
import React from 'react';

function AthayogSadhana() {
     const athayogSadhanaEvents = [
          {
               time: '6pm - 7:30pm',
               months: ['January  ', 'May', 'September'],
               courseName: 'AthaYog Sadhana Abhyasa - Asana ',
               details: [
                    {
                         date: '5th Jan 2022 - 25th Jan 2022'
                    },
                    {
                         date: '1st May 2022 - 21st May 2022'
                    },
                    {
                         date: '1st Sep 2022 - 21st May 2022'
                    }
               ]
          },
          {
               time: '6pm - 7:30pm',
               months: ['February  ', 'June', 'October'],
               courseName: 'AthaYog Sadhana Abhyasa - Pranayama',
               details: [
                    {
                         date: '1st Feb 2022 - 21st Feb 2022'
                    },
                    {
                         date: '1st June 2022 - 21st June 2022'
                    },
                    {
                         date: '1st Oct 2022 - 21st Oct 2022'
                    }
               ]
          },
          {
               time: '6pm - 7:30pm',
               months: ['March  ', 'July', 'November'],
               courseName: 'AthaYog Sadhana Manayog - Meditation',
               details: [
                    {
                         date: '1st March 2022 - 21st March 2022'
                    },
                    {
                         date: '1st July 2022 - 21st July 2022'
                    },
                    {
                         date: '1st Nov 2022 - 21st Nov 2022'
                    }
               ]
          },
          {
               time: '6pm - 7:30pm',
               months: ['April  ', 'August', 'December'],
               courseName: 'AthaYog Sadhana Manayog - Kaivalya 1',
               details: [
                    {
                         date: '1st April 2022 - 21st April 2022'
                    },
                    {
                         date: '1st Aug 2022 - 21st Aug 2022'
                    },
                    {
                         date: '1st Dec 2022 - 21st Dec 2022'
                    }
               ]
          }
     ];
     const events = [
          {
               name: 'AthaYog Sadhana',
               data: athayogSadhanaEvents
          }
     ];
     return (
          <>
               {' '}
               <HeaderLayout>
                    <Heading>Athayog Sadhana </Heading>
                    <Stack spacing={2} my={5}>
                         <Heading size="sm" as="h4">
                              BUILD YOUR SPIRITUAL PRACTISE
                         </Heading>
                         <Text>
                              Yoga Sadhana is a methodical practice to build
                              discipline inorder to attain your spiritual goals.
                              Learn and experience Yoga through study, practice
                              and self-reflection. The Sadhana practice helps
                              develop your physical, mental, moral and spiritual
                              self. Make spiritual development your priority and
                              start your Sadhana by setting aside dedicated
                              time.
                         </Text>
                         <Text>
                              {' '}
                              The Sadhana program is designed to evolve your
                              current practice with dedicated hours of asana,
                              pranayama, meditation, japa and study of
                              scripture. Feel the experiential work of your
                              spirit and incorporate the teachings in your daily
                              lifestyle after the program. Reconnect with the
                              true nature of your being and leave feeling
                              transformed from within.
                         </Text>
                    </Stack>
                    <ShikshanaCalendarTable calendar={events} />
               </HeaderLayout>
               <ContactMore />
          </>
     );
}

export default AthayogSadhana;
AthayogSadhana.Layout = HomeLayout;
