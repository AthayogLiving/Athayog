import { Box } from '@chakra-ui/react';
import React from 'react';
import AddAdminUser from '@/components/admin/AddAdminUser';
import UsersTable from '@/components/admin/UsersTable';

function DashboardMain() {
     return (
          <Box margin="2rem">
               <AddAdminUser />
               <div style={{ height: '2rem' }}></div>
               <UsersTable />
          </Box>
     );
}

export default DashboardMain;
