import Home from '@/components/admin/Home';
import Navbar from '@/components/admin/Navbar';
import Sidebar from '@/components/admin/Sidebar';
import { useAuth } from '@/lib/auth';
import {
     Box,
     Grid,
     GridItem,
     Spinner,
     useColorModeValue
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import StickyBox from 'react-sticky-box';
import SidebarMobile from '../admin/SidebarMobile';

const DashboardLayout = ({ children }) => {
     const { user, loading } = useAuth();
     const bg = useColorModeValue('gray.100', 'gray.700');
     const router = useRouter();
     const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

     useEffect(() => {
          if (!(user || loading)) {
               router.push('/');
          }
     }, [user, loading, router]);

     if (!user) {
          return (
               <Grid height="500px" placeItems="center">
                    <Spinner />
               </Grid>
          );
     }

     if (user.admin === false) {
          router.push('/');
          return (
               <Grid height="500px" placeItems="center">
                    <Spinner />
               </Grid>
          );
     }

     return (
          <>
               <Box>
                    <Grid h="100%" templateRows="repeat(1, 1fr)">
                         <GridItem width={{ base: '100%' }}>
                              {isTabletOrMobile ? (
                                   <SidebarMobile />
                              ) : (
                                   <Sidebar />
                              )}
                         </GridItem>
                         <GridItem bg={bg}>
                              <Navbar isTabletOrMobile={isTabletOrMobile} />
                         </GridItem>
                         <GridItem minH="100vh" bg={bg} px={8} w="100%" mb={5}>
                              {children ? children : <Home />}
                         </GridItem>
                    </Grid>
               </Box>
          </>
     );
};

export default DashboardLayout;
