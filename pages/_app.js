import { ChakraProvider, localStorageManager } from '@chakra-ui/react';
import { AuthProvider } from '@/lib/auth';
import theme from '@/styles/theme.js';
import Navbar from '@/components/home/Navbar';
import { useRouter } from 'next/router';
import Footer from '@/components/shared/Footer';
import { AnimatePresence } from 'framer-motion';
import '@/styles/globals.css';
import NextNprogress from 'nextjs-progressbar';

function App({ Component, pageProps }) {
    const router = useRouter();

    return (
        <AuthProvider>
            <ChakraProvider
                resetCSS={true}
                colorModeManager={localStorageManager}
                theme={theme}
            >
                {router.pathname.match('/admin') ? null : <Navbar />}
                {/* <AnimatePresence exitBeforeEnter key="main"> */}
                <NextNprogress color="#84986D" />
                <Component {...pageProps} />
                {/* </AnimatePresence> */}
                {router.pathname.match('/admin') ? null : <Footer />}
            </ChakraProvider>
        </AuthProvider>
    );
}

export default App;
