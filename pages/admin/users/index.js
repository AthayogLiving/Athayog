import React from 'react';
import UsersTable from '@/components/admin/table/UsersTable';
import { useAuth } from '@/lib/auth';
import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Grid, Spinner, Text } from '@chakra-ui/react';
import UsersHeader from '@/components/admin/UsersHeader';

const users = () => {
     const { user } = useAuth();
     const { data, error } = useSWR(
          user ? [`/api/users`, user.token] : null,
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

     if (data.users.length === 0) {
          return (
               <Grid placeItems="center" height="250px">
                    <Text>Looks like there are no users :|</Text>
               </Grid>
          );
     }

     return (
          <>
               <UsersHeader siteLink="" />
               <UsersTable users={data.users} />
          </>
     );
};

export default users;
users.Layout = DashboardLayout;
