import { AuthProvider } from '@/lib/auth';
import firebase from '@/lib/firebase';
import * as gtag from '@/lib/gtag';
import '@/styles/globals.css';
import theme from '@/styles/theme.js';
import {
     ChakraProvider,
     CSSReset,
     localStorageManager
} from '@chakra-ui/react';
import { css, Global } from '@emotion/react';
import { AnimatePresence } from 'framer-motion';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import { Router, useRouter } from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import React, { useEffect } from 'react';
import SEO from '../next-seo.config';

NProgress.configure({
     showSpinner: true,
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
     const router = useRouter();
     useEffect(() => {
          const handleRouteChange = (url) => {
               gtag.pageview(url);
          };
          router.events.on('routeChangeComplete', handleRouteChange);
          return () => {
               router.events.off('routeChangeComplete', handleRouteChange);
          };
     }, [router.events]);

     return (
          <>
               <Head>
                    <meta
                         content="width=device-width, initial-scale=1"
                         name="viewport"
                    />
                    <meta
                         property="og:description"
                         content="Yoga studio in bangalore"
                    ></meta>
                    <meta
                         name="keywords"
                         content="yoga studio in bangalore, yoga classes in bangalore, yoga teacher in bangalore, safe yoga, online yoga classes, yoga workshops in bangalore, yoga treatment in bangalore, yoga for weight loss, yoga course in bangalore"
                    ></meta>
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

     useEffect(() => {
          const analytics = firebase.analytics();
          analytics.logEvent('page_view');
     }, []);

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
