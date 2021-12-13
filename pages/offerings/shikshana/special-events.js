import HomeLayout from '@/components/layout/HomeLayout';
import HeaderLayout from '@/components/shared/offerings/HeaderLayout';
import ShikshanaCalendarTable from '@/components/shared/ShikshanaCalendarTable';
import { Heading, Stack, Text } from '@chakra-ui/layout';
import React from 'react';

function SpecialEvent() {
     const specialEvent = [
          {
               time: null,
               months: [
                    'January  ',
                    'March',
                    'June',
                    'July',
                    'September',
                    'October',
                    'December'
               ],
               courseName: null,
               details: [
                    {
                         name: 'Swami Vivekananda Birthday',
                         date: '12th Jan 2022'
                    },
                    {
                         name: 'Maha Shivratri Homam',
                         date: '1 Mar 2022'
                    },
                    {
                         name: 'International Day of Yoga',
                         date: '21st June 2022'
                    },
                    {
                         name: 'Guru Purnima',
                         date: '13th July 2022'
                    },
                    {
                         name: 'Teachers Day',
                         date: '5th Sep 2022'
                    },
                    {
                         name: 'KR Puram 2nd Anniversary',
                         date: '4th October 2022'
                    },
                    {
                         name: 'Indiranagar 1st Anniversary',
                         date: '2nd December 2022'
                    }
               ]
          }
     ];
     const events = [
          {
               name: 'Special Events',
               data: specialEvent
          }
     ];
     return (
          <HeaderLayout>
               <Heading>Special Events</Heading>
               <Stack spacing={2} my={5}>
                    <Text>
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
                    </Text>
               </Stack>
               <ShikshanaCalendarTable calendar={events} />
          </HeaderLayout>
     );
}

export default SpecialEvent;
SpecialEvent.Layout = HomeLayout;
