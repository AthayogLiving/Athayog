import HomeLayout from '@/components/layout/HomeLayout';
import ContactMore from '@/components/shared/ContactMore';
import CoursesLayout from '@/components/shared/CoursesLayout';
import CTA from '@/components/shared/CTA';
import HeaderLayout from '@/components/shared/offerings/HeaderLayout';
import ShikshanaCalendarTable from '@/components/shared/ShikshanaCalendarTable';
import { Heading, Stack, Text } from '@chakra-ui/layout';
import React from 'react';
function ShortCourses() {
     const shortCourses = [
          {
               time: '6am - 7:30am',
               months: ['April', 'August'],
               courseName: null,
               details: [
                    {
                         name: 'Advance Hata',
                         date: '4th April 2022 - 25th April 2022'
                    },
                    {
                         name: 'Ashtanga Vinyasa',
                         date: '1st August 2022 - 22nd August 2022'
                    }
               ]
          },
          {
               time: '5pm - 6:30pm',
               months: ['February', 'June', 'October'],
               courseName: null,
               details: [
                    {
                         name: 'Ashtanga Vinyasa',
                         date: '2nd Feb 2022 - 22nd Feb 2022 '
                    },
                    {
                         name: 'Advance Hata',
                         date: '6th June 2022 - 24th June 2022'
                    },
                    {
                         name: 'Ashtanga Vinyasa',
                         date: '3rd Oct 2022 - 21st Oct 2022'
                    }
               ]
          },
          {
               time: '10am - 11:30am',
               courseName: null,
               months: ['March', 'May', 'June', 'September', 'November'],
               details: [
                    {
                         name: 'Chakra Meditation',
                         date: '7th March 2022 - 11th March 2022'
                    },
                    {
                         name: 'Kids Yoga Camp',
                         date: '2nd May 2022 - 13th May 2022'
                    },
                    {
                         name: 'Anatomy',
                         date: '7th June 2022 - 25th June 2022'
                    },
                    {
                         name: 'Yoga Nidra',
                         date: '5th Sep 2022 - 9th Sep 2022'
                    },
                    {
                         name: 'Chakra Meditation',
                         date: '7th Nov 2022 - 11th Nov 2022'
                    }
               ]
          }
     ];

     const spiritualPractices = [
          {
               time: null,
               months: ['January  ', 'April', 'August', 'September'],
               courseName: null,
               details: [
                    {
                         name: 'Yoga spiritual retreat',
                         date: ' 14th Jan(eve) 2022 - 17th Jan(Mng) 2022'
                    },
                    {
                         name: 'Chaitra Navaratri Sadhana',
                         date: '2nd April 2022 - 11th April (6pm - 7pm) 2022'
                    },
                    {
                         name: 'Yoga spiritual retreat',
                         date: '12th Aug(eve) 2022 - 15th Aug(Mng) 2022'
                    },
                    {
                         name: 'Sharad Navaratri Sadhana',
                         date: ' 26th Sep 2022 - 5th Oct 2022 (6pm - 7pm)'
                    }
               ]
          }
     ];

     const events = [
          {
               name: 'Short Courses',
               data: shortCourses
          },
          {
               name: 'Spiritual Practices',
               data: spiritualPractices
          }
     ];
     return (
          <>
               <CoursesLayout>
                    <Heading>Short Courses</Heading>
                    <Stack spacing={2} my={5}>
                         {/* <Text>
                         Lorem ipsum dolor sit amet consectetur adipisicing
                         elit. Reiciendis sint, eos delectus sed reprehenderit
                         itaque. Eveniet consequuntur nobis veniam debitis at,
                         sit doloribus ipsum ea adipisci quos unde ad! Nihil.
                         Excepturi quaerat eaque debitis tempore dolorum
                         assumenda voluptatem modi quibusdam minima ipsum minus
                         suscipit porro, ex sunt quas iusto? Possimus,
                         recusandae labore? Dolorum corporis optio, earum totam
                         nisi numquam ipsa. Tempora sed nam laborum consequuntur
                         neque laboriosam est in totam officia veritatis ipsam
                         doloribus accusamus nostrum iste aliquid adipisci,
                         dolorum dolorem velit enim necessitatibus quaerat
                         tenetur, excepturi repellendus numquam. Perferendis!
                         Explicabo et similique officia ex eos, sit optio totam
                         dolor voluptatum inventore. Id iusto nam accusantium,
                         nesciunt aliquid doloribus eveniet quo laborum eligendi
                         quos tempora provident vitae numquam voluptates modi?
                         Magnam laudantium possimus, dignissimos quisquam cumque
                         animi ipsam hic totam. Dolorum quasi a recusandae minus
                         magni rerum, neque maiores, veniam deserunt aspernatur
                         porro ipsa enim modi nemo! Atque, architecto et.
                    </Text> */}
                    </Stack>
                    <ShikshanaCalendarTable calendar={events} />
               </CoursesLayout>
               <ContactMore registerTo="short_course" />
          </>
     );
}

export default ShortCourses;
ShortCourses.Layout = HomeLayout;
