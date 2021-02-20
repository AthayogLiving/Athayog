import React from 'react';
import { useAuth } from '@/lib/auth';
import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import DashboardLayout from '@/components/layout/DashboardLayout';
import {
     Box,
     chakra,
     Divider,
     Grid,
     Spinner,
     Text,
     useColorModeValue
} from '@chakra-ui/react';
import { FirebaseToDate } from '@/components/helper/FirebaseToDate';

const userId = () => {
     const { user } = useAuth();
     const bg = useColorModeValue('white', 'gray.800');
     const { data, error } = useSWR(
          user ? [`/api/user/${user.uid}`, user.token] : null,
          fetcher,
          {
               refreshInterval: 100
          }
     );

     if (error) {
          return (
               <Grid placeItems="center" height="250px">
                    <Text>Sorry somrthing happend :(</Text>
               </Grid>
          );
     }

     if (!data) {
          return (
               <Grid placeItems="center" height="250px">
                    <Spinner />
               </Grid>
          );
     }

     if (data.user.length === 0) {
          return (
               <Grid placeItems="center" height="250px">
                    <Text>Looks like something happend :(</Text>
               </Grid>
          );
     }

     const customer = data.user;
     const payment = data.payment;
     console.log(customer, payment);
     return (
          <Box bg={bg} padding={6} rounded="lg" boxshadow="base">
               <Box>
                    {' '}
                    <Text fontSize="2xl">User Details </Text>
                    <Divider mb={5} />
                    <Text fontWeight="medium">
                         Name:{' '}
                         <chakra.span fontWeight="normal">
                              {customer.name}
                         </chakra.span>
                    </Text>
                    <Text fontWeight="medium">
                         Email:{' '}
                         <chakra.span fontWeight="normal">
                              {customer.email}
                         </chakra.span>
                    </Text>
                    <Text fontWeight="medium">
                         Created On:{' '}
                         <chakra.span fontWeight="normal">
                              {customer.creationTime}
                         </chakra.span>
                    </Text>
               </Box>
               <Box mt={5}>
                    {' '}
                    <Text fontSize="2xl">Purchases Details </Text>
                    <Divider mb={5} />
                    {payment.map((data) => {
                         return (
                              <Box
                                   border="1px"
                                   borderColor="gray.400"
                                   key={data.id}
                                   padding={3}
                                   rounded="lg"
                                   mb={3}
                              >
                                   <Text fontWeight="medium">
                                        Course Id:{' '}
                                        <chakra.span fontWeight="normal">
                                             {data.id}
                                        </chakra.span>
                                   </Text>
                                   <Text fontWeight="medium">
                                        Course Name{' '}
                                        <chakra.span fontWeight="normal">
                                             {data.courseName}
                                        </chakra.span>
                                   </Text>
                                   <Text fontWeight="medium">
                                        Duration:{' '}
                                        <chakra.span fontWeight="normal">
                                             {data.duration}
                                        </chakra.span>
                                   </Text>
                                   <Text fontWeight="medium">
                                        Purchases On:{' '}
                                        <chakra.span fontWeight="normal">
                                             {FirebaseToDate(data.createdAt)}
                                        </chakra.span>
                                   </Text>
                                   <Text fontWeight="medium">
                                        Payment Reference Id:{' '}
                                        <chakra.span fontWeight="normal">
                                             {data.referenceId}
                                        </chakra.span>
                                   </Text>
                                   <Text fontWeight="medium">
                                        Payment URL:{' '}
                                        <chakra.span fontWeight="normal">
                                             {data.shortUrl}
                                        </chakra.span>
                                   </Text>
                                   <Text fontWeight="medium">
                                        Payment Status:{' '}
                                        <chakra.span fontWeight="normal">
                                             {data.status}
                                        </chakra.span>
                                   </Text>
                              </Box>
                         );
                    })}
               </Box>
          </Box>
     );
};

export default userId;
userId.Layout = DashboardLayout;
