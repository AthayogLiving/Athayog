import { useAuth } from '@/lib/auth';
import Navbar from '@/components/admin/Navbar';
import {
     Box,
     Grid,
     GridItem,
     Spinner,
     useColorModeValue
} from '@chakra-ui/react';
import Sidebar from '@/components/admin/Sidebar';
import StickyBox from 'react-sticky-box';
import Home from '@/components/admin/Home';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { isMobile } from 'react-device-detect';
import SidebarMobile from '../admin/SidebarMobile';
import { useMediaQuery } from 'react-responsive';

const DashboardLayout = ({ children }) => {
     const { user, signout, loading } = useAuth();

     const bg = useColorModeValue('gray.100', 'gray.700');
     const color = useColorModeValue('gray.100', 'gray.700');

     const router = useRouter();

     const isDesktopOrLaptop = useMediaQuery({
          query: '(min-device-width: 1224px)'
     });
     const isBigScreen = useMediaQuery({
          query: '(min-device-width: 1824px)'
     });
     const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
     const isTabletOrMobileDevice = useMediaQuery({
          query: '(max-device-width: 1224px)'
     });
     const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
     const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

     useEffect(() => {
          if (!(user || loading)) {
               router.push('/');
          }
     }, [user, loading]);

     if (!user) {
          return (
               <Grid height="500px" placeItems="center">
                    <Spinner />;
               </Grid>
          );
     }

     if (user.admin === false) {
          const router = useRouter();
          router.push('/');
          return (
               <Grid height="500px" placeItems="center">
                    <Spinner />;
               </Grid>
          );
     }

     return (
          <>
               <Box>
                    <Grid
                         h="100%"
                         templateRows="auto 1fr"
                         templateColumns="repeat(10, 1fr)"
                    >
                         <GridItem
                              colSpan={isTabletOrMobile ? 10 : 1}
                              rowSpan={isTabletOrMobile ? 1 : 3}
                              width={{ base: '100%' }}
                         >
                              {isTabletOrMobile ? (
                                   <SidebarMobile />
                              ) : (
                                   <StickyBox
                                        style={{ height: '100vh' }}
                                        display={{
                                             base: 'none',
                                             md: 'none',
                                             lg: 'block'
                                        }}
                                   >
                                        <Sidebar />
                                   </StickyBox>
                              )}
                         </GridItem>
                         <GridItem
                              colSpan={isTabletOrMobile ? 10 : 9}
                              rowSpan={isTabletOrMobile ? 1 : 1}
                              bg={bg}
                              width={{ base: '100%' }}
                         >
                              <Navbar isTabletOrMobile={isTabletOrMobile} />
                         </GridItem>
                         <GridItem
                              colSpan={isTabletOrMobile ? 10 : 9}
                              rowSpan={isTabletOrMobile ? 1 : 2}
                              minH="100vh"
                              bg={bg}
                              px={8}
                              mb={5}
                         >
                              {children ? children : <Home />}
                         </GridItem>
                    </Grid>
               </Box>
          </>
     );
};

export default DashboardLayout;
