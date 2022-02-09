import HomeLayout from '@/components/layout/HomeLayout';
import ContactMore from '@/components/shared/ContactMore';
import HeaderLayout from '@/components/shared/offerings/HeaderLayout';
import {
     Box,
     Heading,
     Table,
     Tbody,
     Td,
     Text,
     Th,
     Thead,
     Tr
} from '@chakra-ui/layout';
import React from 'react';

function RPYTCourses() {
     return (
          <>
               <HeaderLayout>
                    <Heading>RPYT Course</Heading>
                    <Box mt={5}>
                         <Text>
                              <strong>Course date : </strong>4th April - 29th
                              April 2022
                         </Text>
                         <Text>
                              <strong>Time:</strong> 11am - 3pm
                         </Text>
                         <Text>
                              <strong>Total hours:</strong> 100 hours
                         </Text>
                    </Box>
               </HeaderLayout>
               <ContactMore registerTo="rpyt_200" />
          </>
     );
}

export default RPYTCourses;
RPYTCourses.Layout = HomeLayout;
