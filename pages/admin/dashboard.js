import { useAuth } from '@/lib/auth';
import Navbar from '@/components/admin/Navbar';
import {
    Box,
    Button,
    Center,
    Grid,
    GridItem,
    useColorMode,
    useColorModeValue
} from '@chakra-ui/react';
import Sidebar from '@/components/admin/Sidebar';
import StickyBox from 'react-sticky-box';
import Home from '@/components/admin/Home';
import Head from 'next/head';
import { Router, useRouter } from 'next/router';
import { useEffect } from 'react';

const dashboard = ({ children }) => {
    const { user, signout, loading } = useAuth();
    const router = useRouter();
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
            <Box width="100%" bg="gray.200" height="10px"></Box>
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
                <GridItem colSpan={7} rowSpan={1} bg={bg}>
                    <Navbar user={user} signout={signout} loading={loading} />
                </GridItem>
                <GridItem colSpan={7} rowSpan={2} bg={bg} px={8}>
                    {children ? children : <Home />}
                </GridItem>
            </Grid>
        </Box>
    );
};

export default dashboard;
