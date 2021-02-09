import {
     ChakraProvider,
     CSSReset,
     localStorageManager
} from '@chakra-ui/react';
import { AuthProvider } from '@/lib/auth';
import theme from '@/styles/theme.js';
import Navbar from '@/components/home/Navbar';
import { useRouter } from 'next/router';
import Footer from '@/components/shared/Footer';
import { AnimatePresence } from 'framer-motion';
import '@/styles/globals.css';
import NextNprogress from 'nextjs-progressbar';
import { useEffect } from 'react';
import Head from 'next/head';
import SEO from '../next-seo.config';
import { DefaultSeo } from 'next-seo';
import { v4 as uuidv4 } from 'uuid';
import { css, Global } from '@emotion/react';
import ScrollToTop from '@/components/shared/ScrollToTop';

const GlobalStyle = ({ children }) => {
     return (
          <>
               <Head>
                    <meta
                         content="width=device-width, initial-scale=1"
                         name="viewport"
                    />
               </Head>
               <CSSReset />
               <Global
                    styles={css`
                         html {
                              scroll-behavior: smooth;
                         }
                         #__next {
                              display: flex;
                              flex-direction: column;
                              min-height: 100vh;
                         }
                    `}
               />
               {children}
          </>
     );
};

function App({ Component, pageProps }) {
     const router = useRouter();

     return (
          <ChakraProvider
               resetCSS={true}
               colorModeManager={localStorageManager}
               theme={theme}
          >
               <AuthProvider>
                    <DefaultSeo {...SEO} />
                    <GlobalStyle />
                    <NextNprogress color="green" />
                    {router.pathname.match('/admin') ? null : <Navbar />}
                    <AnimatePresence exitBeforeEnter key={uuidv4()}>
                         <Component {...pageProps} />
                         <ScrollToTop key={uuidv4()} />
                    </AnimatePresence>
                    {router.pathname.match('/admin') ? null : <Footer />}
               </AuthProvider>
          </ChakraProvider>
     );
}

export default App;
