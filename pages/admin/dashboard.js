import { useAuth } from '@/lib/auth';
import { useState, useEffect } from 'react';
import DashboardShell from '@/components/admin/DashboardShell';
import {
     Box,
     Heading,
     Stack,
     Skeleton,
     SkeletonCircle,
     SkeletonText
} from '@chakra-ui/react';

const dashboard = () => {
     const { user, signout, loading } = useAuth();

     return (
          <Box bg="gray.50">
               <DashboardShell user={user} signout={signout} />
               <Skeleton isLoaded={!loading}>
                    <Heading> Hi {user?.email}</Heading>
               </Skeleton>
          </Box>
     );
};

export default dashboard;
