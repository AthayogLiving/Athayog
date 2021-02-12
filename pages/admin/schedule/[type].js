import React from 'react';
import ScheduleData from '@/components/admin/table/ScheduleData';
import Dashboard from '../dashboard';
import { Box, useColorModeValue } from '@chakra-ui/react';
import { Router, useRouter } from 'next/router';
import ScheduleHeader from '@/components/admin/ScheduleHeader';

const type = () => {
     const bg = useColorModeValue('white', 'gray.800');
     const router = useRouter();
     const { type } = router.query;
     return (
          <>
               <Dashboard>
                    <ScheduleHeader siteLink={type} />
                    <Box
                         bg={bg}
                         rounded="lg"
                         padding={5}
                         boxShadow="base"
                         mt={3}
                    >
                         <ScheduleData />
                    </Box>
               </Dashboard>
          </>
     );
};

export default type;
