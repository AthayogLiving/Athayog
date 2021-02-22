import React, { useEffect } from 'react';
import { useAuth } from '@/lib/auth';
import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Grid, Spinner, Text } from '@chakra-ui/react';
import UsersHeader from '@/components/admin/UsersHeader';
import AdminTable from '@/components/admin/users/AdminTable';

const users = () => {
     const { user } = useAuth();

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
                    <Text>Looks like there are no admin :|</Text>
               </Grid>
          );
     }

     return (
          <>
               <UsersHeader siteLink="" defaultName="Admins" />
               <AdminTable admin={data.users} />
          </>
     );
};

export default users;
users.Layout = DashboardLayout;
