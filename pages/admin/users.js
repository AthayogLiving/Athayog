import AddAdminUser from '@/components/admin/users/AddAdminUser';
import UsersTable from '@/components/admin/users/UsersTable';
import {
     Box,
     Flex,
     Stack,
     Tabs,
     TabList,
     TabPanels,
     Tab,
     TabPanel,
     useColorModeValue
} from '@chakra-ui/react';
import React from 'react';
import Dashboard from './dashboard';
import UsersData from '@/components/admin/table/UsersData';
import { useAuth } from '@/lib/auth';
import useSWR from 'swr';
import fetcher from '@/utils/fetcher';

const users = () => {
     const bg = useColorModeValue('white', 'gray.800');
     const color = useColorModeValue('white', 'gray.800');
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

     return (
          <Dashboard>
               <UsersData users={data.users} />
          </Dashboard>
     );
};

export default users;
