import React, { useEffect } from 'react';
import { useAuth } from '@/lib/auth';
import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Box, Grid, Spinner, Text, useColorModeValue } from '@chakra-ui/react';
import UsersHeader from '@/components/admin/UsersHeader';
import AdminTable from '@/components/admin/users/AdminTable';
import AddAdminUser from '@/components/admin/users/AddAdminUser';

const users = () => {
     const { user } = useAuth();
     const bg = useColorModeValue('white', 'gray.800');
     const { data, error } = useSWR(
          user ? [`/api/admin/users`, user.token] : null,
          fetcher,
          {
               refreshInterval: 100
          }
     );

     if (error) {
          return (
               <Grid placeItems="center" height="250px">
                    <Text>Sorry something happend :(</Text>
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

     if (data.users.length === 0) {
          return (
               <Grid placeItems="center" height="250px">
                    <Text>Looks like there are no admin :|</Text>
                    <AddAdminUser />
               </Grid>
          );
     }

     return (
          <>
               <UsersHeader siteLink="" defaultName="Admins" />
               <Box
                    bg={bg}
                    rounded="lg"
                    borderWidth="1px"
                    padding={5}
                    boxShadow="base"
                    width="100%"
                    mt={3}
               >
                    <AdminTable admin={data.users} />
                    <AddAdminUser />
               </Box>
          </>
     );
};

export default users;
users.Layout = DashboardLayout;
