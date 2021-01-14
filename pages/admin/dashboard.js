import { useAuth } from '@/lib/auth';
import { useState, useEffect } from 'react';
import DashboardNavbar from '@/components/admin/DashboardNavbar';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import DashboardSidebar from '@/components/admin/DashboardSidebar';
import DashboardMain from '@/components/admin/DashboardMain';

const dashboard = () => {
     const { user, signout, loading } = useAuth();

     return (
          <Box>
               <Grid
                    h="100vh"
                    templateRows="auto 1fr"
                    templateColumns="repeat(8, 1fr)"
               >
                    <GridItem colSpan={1} rowSpan={3} bg="white">
                         <DashboardSidebar />
                    </GridItem>
                    <GridItem colSpan={7} bg="gray.100" rowSpan={1}>
                         <DashboardNavbar
                              user={user}
                              signout={signout}
                              loading={loading}
                         />
                    </GridItem>
                    <GridItem colSpan={7} bg="gray.100" rowSpan={2}>
                         <DashboardMain />
                    </GridItem>
               </Grid>
          </Box>
     );
};

export default dashboard;
