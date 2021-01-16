import { useAuth } from '@/lib/auth';
import DashboardNavbar from '@/components/admin/DashboardNavbar';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import DashboardSidebar from '@/components/admin/DashboardSidebar';
import StickyBox from 'react-sticky-box';
import DashboardMain from '@/components/admin/DashboardMain';

const dashboard = ({ children }) => {
     const { user, signout, loading } = useAuth();

     return (
          <Box>
               <Grid
                    h="100%"
                    templateRows="auto 1fr"
                    templateColumns="repeat(8, 1fr)"
               >
                    <GridItem colSpan={1} rowSpan={3}>
                         <StickyBox style={{ height: '100vh' }}>
                              <DashboardSidebar />
                         </StickyBox>
                    </GridItem>
                    <GridItem colSpan={7} rowSpan={1} bg="gray.100">
                         <DashboardNavbar
                              user={user}
                              signout={signout}
                              loading={loading}
                         />
                    </GridItem>
                    <GridItem colSpan={7} rowSpan={2} bg="gray.100" px={8}>
                         {children ? children : <DashboardMain />}
                    </GridItem>
               </Grid>
          </Box>
     );
};

export default dashboard;
