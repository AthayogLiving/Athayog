import {
     ChakraProvider,
     CSSReset,
     localStorageManager
} from '@chakra-ui/react';
import { AuthProvider } from '@/lib/auth';
import theme from '@/styles/theme.js';
import { AnimatePresence } from 'framer-motion';
import '@/styles/globals.css';
import Head from 'next/head';
import SEO from '../next-seo.config';
import { DefaultSeo } from 'next-seo';
import React from 'react';
import { css, Global } from '@emotion/react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { Router } from 'next/router';

NProgress.configure({
     showSpinner: false,
     trickleRate: 0.1,
     trickleSpeed: 300
});

Router.events.on('routeChangeStart', () => {
     NProgress.start();
});

Router.events.on('routeChangeComplete', () => {
     NProgress.done();
});

Router.events.on('routeChangeError', () => {
     NProgress.done();
});

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
     const Layout = Component.Layout ? Component.Layout : React.Fragment;

     return (
          <ChakraProvider
               resetCSS={true}
               colorModeManager={localStorageManager}
               theme={theme}
          >
               <AuthProvider>
                    <DefaultSeo {...SEO} />
                    <GlobalStyle />

                    <AnimatePresence exitBeforeEnter>
                         <Layout>
                              <Component {...pageProps} />
                         </Layout>
                    </AnimatePresence>
               </AuthProvider>
          </ChakraProvider>
     );
}

export default App;
