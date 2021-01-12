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
                    h="200px"
                    templateRows="repeat(2, 1fr)"
                    templateColumns="repeat(8, 1fr)"
               >
                    <GridItem colSpan={1} rowSpan={2} bg="#0653F4">
                         <DashboardSidebar />
                    </GridItem>
                    <GridItem colSpan={7} bg="white">
                         <DashboardShell
                              user={user}
                              signout={signout}
                              loading={loading}
                         />
                    </GridItem>
                    <GridItem colSpan={7} bg="gray.100">
                         {/* Components Will Be Passed */}
                    </GridItem>
               </Grid>
          </Box>
     );
};

export default dashboard;
