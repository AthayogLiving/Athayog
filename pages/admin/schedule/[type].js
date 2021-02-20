import React from 'react';
import ScheduleData from '@/components/admin/table/ScheduleData';
import {
     Box,
     Button,
     Grid,
     Spinner,
     Text,
     useColorModeValue
} from '@chakra-ui/react';
import { Router, useRouter } from 'next/router';
import ScheduleHeader from '@/components/admin/ScheduleHeader';
import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import AddSchedule from '@/components/admin/table/AddSchedule';
import Link from 'next/link';
import DashboardLayout from '@/components/layout/DashboardLayout';

const type = () => {
     const router = useRouter();
     const { type } = router.query;
     const bg = useColorModeValue('white', 'gray.800');
     const { data, error } = useSWR(`/api/schedule/${type}Schedule`, fetcher, {
          refreshInterval: 100
     });

     if (error) {
          return (
               <>
                    <ScheduleHeader siteLink={type} />
                    <Grid placeItems="center" mt={5}>
                         <Text>Something Happened Try Again</Text>
                    </Grid>
               </>
          );
     }

     if (!data) {
          return (
               <>
                    <ScheduleHeader siteLink={type} />
                    <Grid placeItems="center" mt={5}>
                         <Spinner
                              thickness="4px"
                              speed="0.65s"
                              emptyColor="gray.200"
                              color="blue.500"
                              size="xl"
                         />
                    </Grid>
               </>
          );
     }

     if (data.schedule.length === 0) {
          return (
               <>
                    <ScheduleHeader siteLink={type} />
                    <Grid placeItems="center" mt={5}>
                         <Box>
                              <Box
                                   bg={bg}
                                   rounded="lg"
                                   boxShadow="base"
                                   padding={5}
                              >
                                   <Text textAlign="center">
                                        No Data Found :(
                                   </Text>
                                   <Text textAlign="center">
                                        Create new schedule from below
                                   </Text>
                              </Box>

                              <Box
                                   mt={5}
                                   bg={bg}
                                   rounded="lg"
                                   boxShadow="base"
                                   padding={5}
                              >
                                   <AddSchedule type={type} />
                              </Box>
                         </Box>
                    </Grid>
               </>
          );
     }

     return (
          <>
               <ScheduleHeader siteLink={type} />
               <Box bg={bg} rounded="lg" padding={5} boxShadow="base" mt={3}>
                    <ScheduleData schedule={data.schedule} type={type} />
               </Box>
               <Box
                    bg={bg}
                    rounded="lg"
                    padding={5}
                    boxShadow="base"
                    mt={3}
                    mb={5}
               >
                    <AddSchedule type={type} />
               </Box>
          </>
     );
};

export default type;
type.Layout = DashboardLayout;
