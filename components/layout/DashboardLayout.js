import { useAuth } from '@/lib/auth';
import Navbar from '@/components/admin/Navbar';
import { Box, Grid, GridItem, useColorModeValue } from '@chakra-ui/react';
import Sidebar from '@/components/admin/Sidebar';
import StickyBox from 'react-sticky-box';
import Home from '@/components/admin/Home';
import Head from 'next/head';

const DashboardLayout = ({ children }) => {
     const { user, signout, loading } = useAuth();

     const bg = useColorModeValue('gray.100', 'gray.700');
     const color = useColorModeValue('gray.100', 'gray.700');

     return (
          <Box>
               <Head>
                    <title>Athayog Dashboard</title>
                    <script
                         dangerouslySetInnerHTML={{
                              __html: `
                              if (!document.cookie && !document.cookie.includes('athayog-auth')) {
                                   window.location.href = "/"
                              }
                         `
                         }}
                    />
               </Head>
               <Grid
                    h="100%"
                    templateRows="auto 1fr"
                    templateColumns="repeat(10, 1fr)"
               >
                    <GridItem colSpan={1} rowSpan={3}>
                         <StickyBox style={{ height: '100vh' }}>
                              <Sidebar />
                         </StickyBox>
                    </GridItem>
                    <GridItem colSpan={9} rowSpan={1} bg={bg}>
                         <Navbar
                              user={user}
                              signout={signout}
                              loading={loading}
                         />
                    </GridItem>
                    <GridItem colSpan={9} rowSpan={2} bg={bg} px={8}>
                         {children ? children : <Home />}
                    </GridItem>
               </Grid>
          </Box>
     );
};

export default DashboardLayout;
