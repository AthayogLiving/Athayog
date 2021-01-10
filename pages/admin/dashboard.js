import { useAuth } from '@/lib/auth';

import DashboardShell from '@/components/admin/DashboardShell';
import { Box, Heading } from '@chakra-ui/react';

const dashboard = () => {
     const { user, signout } = useAuth();

     return (
          <Box bg="gray.50">
               <DashboardShell user={user} signout={signout} />
               <Heading> Hi {user?.email}</Heading>
          </Box>
     );
};

export default dashboard;
