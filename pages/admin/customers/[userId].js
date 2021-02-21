import React from 'react';
import { useAuth } from '@/lib/auth';
import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import DashboardLayout from '@/components/layout/DashboardLayout';
import {
     Badge,
     Box,
     chakra,
     Divider,
     Flex,
     Grid,
     HStack,
     Spinner,
     Text,
     useColorModeValue
} from '@chakra-ui/react';
import { FirebaseToDate } from '@/components/helper/FirebaseToDate';
import { useRouter } from 'next/router';
import UsersHeader from '@/components/admin/UsersHeader';

const userId = () => {
     const { user } = useAuth();
     const bg = useColorModeValue('white', 'gray.800');
     const color = useColorModeValue('teal.100', 'teal.700');
     const router = useRouter();
     const userId = router.query.userId;
     const { data, error } = useSWR(
          user ? [`/api/user/${userId}`, user.token] : null,
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

     return (
          <>
               <UsersHeader siteLink={customer.name} defaultName="Customers" />
               <Box bg={bg} padding={6} rounded="lg" boxShadow="base" mt={3}>
                    <Box>
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
               </Box>
               <Box mt={8} bg={bg} boxShadow="base" padding={3} rounded="lg">
                    <Text fontSize="xl">Purchases Details </Text>
               </Box>
               {payment.length === 0 ? (
                    <Grid
                         padding={8}
                         rounded="lg"
                         bg={bg}
                         placeItems="center"
                         height="sm"
                         boxShadow="base"
                         mt={3}
                    >
                         {' '}
                         <Text>No purchases made yet by the customer</Text>
                    </Grid>
               ) : (
                    <Grid
                         gridGap={5}
                         gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))"
                         mt={3}
                    >
                         {payment.map((data) => {
                              return (
                                   <Box
                                        key={data.id}
                                        padding={8}
                                        rounded="lg"
                                        bg={bg}
                                        mb={3}
                                        boxShadow="base"
                                   >
                                        <Text fontSize="xl">
                                             {data.courseName}
                                        </Text>
                                        <Grid
                                             justifyContent="space-between"
                                             alignItems="start"
                                             gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))"
                                             gridGap={2}
                                             mt={2}
                                        >
                                             <Box
                                                  fontWeight="medium"
                                                  border="1px"
                                                  borderColor="gray.200"
                                                  rounded="lg"
                                                  mt={2}
                                                  overflow="hidden"
                                                  w="100%"
                                             >
                                                  <Box
                                                       textAlign="center"
                                                       bg={color}
                                                       padding={3}
                                                  >
                                                       Duration
                                                  </Box>
                                                  <Box
                                                       textAlign="center"
                                                       fontWeight="normal"
                                                       padding={3}
                                                  >
                                                       {data.duration}
                                                  </Box>
                                             </Box>
                                             <Box
                                                  fontWeight="medium"
                                                  border="1px"
                                                  borderColor="gray.200"
                                                  rounded="lg"
                                                  mt={2}
                                                  overflow="hidden"
                                                  w="100%"
                                             >
                                                  <Box
                                                       textAlign="center"
                                                       bg={color}
                                                       padding={3}
                                                  >
                                                       Price
                                                  </Box>
                                                  <Box
                                                       textAlign="center"
                                                       fontWeight="normal"
                                                       padding={3}
                                                  >
                                                       {data.price}
                                                  </Box>{' '}
                                             </Box>
                                             <Box
                                                  fontWeight="medium"
                                                  border="1px"
                                                  borderColor="gray.200"
                                                  rounded="lg"
                                                  mt={2}
                                                  overflow="hidden"
                                                  w="100%"
                                             >
                                                  <Box
                                                       textAlign="center"
                                                       bg={color}
                                                       padding={3}
                                                  >
                                                       Purchased On
                                                  </Box>
                                                  <Box
                                                       textAlign="center"
                                                       fontWeight="normal"
                                                       padding={3}
                                                  >
                                                       {FirebaseToDate(
                                                            data.createdAt
                                                       )}
                                                  </Box>{' '}
                                             </Box>
                                             <Box
                                                  fontWeight="medium"
                                                  border="1px"
                                                  borderColor="gray.200"
                                                  rounded="lg"
                                                  mt={2}
                                                  overflow="hidden"
                                                  w="100%"
                                             >
                                                  <Box
                                                       textAlign="center"
                                                       bg={color}
                                                       padding={3}
                                                  >
                                                       Order Id
                                                  </Box>
                                                  <Box
                                                       textAlign="center"
                                                       fontWeight="normal"
                                                       padding={3}
                                                  >
                                                       {data.orderId}
                                                  </Box>{' '}
                                             </Box>
                                        </Grid>
                                   </Box>
                              );
                         })}
                    </Grid>
               )}
          </>
     );
};

export default userId;
userId.Layout = DashboardLayout;
