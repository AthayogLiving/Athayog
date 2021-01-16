import { useAuth } from '@/lib/auth';
import Navbar from '@/components/admin/Navbar';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import Sidebar from '@/components/admin/Sidebar';
import StickyBox from 'react-sticky-box';
import Home from '@/components/admin/Home';
import Head from 'next/head';

const dashboard = ({ children }) => {
     const { user, signout, loading } = useAuth();

     return (
          <Box>
               <Head>
                    <title>Athayog Dashboard</title>
               </Head>
               <Grid
                    h="100%"
                    templateRows="auto 1fr"
                    templateColumns="repeat(8, 1fr)"
               >
                    <GridItem colSpan={1} rowSpan={3}>
                         <StickyBox style={{ height: '100vh' }}>
                              <Sidebar />
                         </StickyBox>
                    </GridItem>
                    <GridItem colSpan={7} rowSpan={1} bg="gray.100">
                         <Navbar
                              user={user}
                              signout={signout}
                              loading={loading}
                         />
                    </GridItem>
                    <GridItem colSpan={7} rowSpan={2} bg="gray.100" px={8}>
                         {children ? children : <Home />}
                    </GridItem>
               </Grid>
          </Box>
     );
};

export default dashboard;
