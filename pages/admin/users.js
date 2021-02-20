import React from 'react';
import UsersData from '@/components/admin/table/UsersData';
import { useAuth } from '@/lib/auth';
import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import DashboardLayout from '@/components/layout/DashboardLayout';

const users = () => {
     const { user } = useAuth();
     const { data } = useSWR(
          user ? [`/api/users`, user.token] : null,
          fetcher,
          {
               refreshInterval: 100
          }
     );

     if (!data) {
          return <>loading</>;
     }

     return <UsersData users={data.users} />;
};

export default users;
users.Layout = DashboardLayout;
