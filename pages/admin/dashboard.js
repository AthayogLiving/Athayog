import { useAuth } from '@/lib/auth';
import { useState, useEffect } from 'react';
import DashboardShell from '@/components/admin/DashboardNavbar';
import {
     Box,
     Heading,
     Stack,
     Skeleton,
     SkeletonCircle,
     SkeletonText,
     Flex,
     Grid,
     GridItem
} from '@chakra-ui/react';
import DashboardSidebar from '@/components/admin/DashboardSidebar';

const dashboard = () => {
     const { user, signout, loading } = useAuth();

     return (
          <Box>
               <Grid
                    h="100vh"
                    templateRows="auto 1fr"
                    templateColumns="repeat(8, 1fr)"
               >
                    <GridItem colSpan={1} rowSpan={3} bg="gray.100">
                         <DashboardSidebar />
                    </GridItem>
                    <GridItem colSpan={7} bg="gray.100" rowSpan={1}>
                         <DashboardShell
                              user={user}
                              signout={signout}
                              loading={loading}
                         />
                    </GridItem>
                    <GridItem colSpan={7} bg="gray.100" rowSpan={2}>
                         <p>lorem*10</p>
                    </GridItem>
               </Grid>
          </Box>
     );
};

export default dashboard;
