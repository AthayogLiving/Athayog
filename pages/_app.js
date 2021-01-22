import { ChakraProvider, localStorageManager } from '@chakra-ui/react';
import { AuthProvider } from '@/lib/auth';
import theme from '@/styles/theme.js';
import Navbar from '@/components/home/Navbar';
import { useRouter } from 'next/router';

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

                <Component {...pageProps} />
            </ChakraProvider>
        </AuthProvider>
    );
}

export default App;
