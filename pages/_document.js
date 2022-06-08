import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';
import theme from '@/styles/theme';
import { GA_TRACKING_ID } from '@/lib/gtag';
import Script from 'next/script';

class RootDocument extends Document {
     static async getInitialProps(ctx) {
          const initialProps = await Document.getInitialProps(ctx);
          return { ...initialProps };
     }

     render() {
          return (
               <Html lang="en">
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                         rel="stylesheet"
                         href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;300;400;500;600;700&display=swap"
                         data-noprefix
                    />
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta
                         name="viewport"
                         content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
                    />
                    <meta
                         name="facebook-domain-verification"
                         content="bw81gzyylakimr31tun0bxtc5pbop0"
                    />

                    <meta name="description" content="Description" />
                    <meta name="keywords" content="Keywords" />
                    <title>Athayog Living</title>

                    <link rel="manifest" href="/manifest.json" />
                    <link
                         href="/favicons/favicon-16x16.png"
                         rel="icon"
                         type="image/png"
                         sizes="16x16"
                    />
                    <link
                         href="/favicons/favicon-32x32.png"
                         rel="icon"
                         type="image/png"
                         sizes="32x32"
                    />
                    <link rel="apple-touch-icon" href="/apple-icon.png"></link>
                    <meta name="theme-color" content="#317EFB" />

                    <Head></Head>
                    <body>
                         <ColorModeScript
                              initialColorMode={theme.config.initialColorMode}
                         />
                         <Main />
                         <Script
                              src="https://www.googletagmanager.com/gtag/js?id=AW-527303866"
                              strategy="afterInteractive"
                         ></Script>
                         <Script
                              data-ad-client="AW-527303866"
                              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
                              strategy="afterInteractive"
                         ></Script>
                         <Script
                              id="load-gtag"
                              strategy="afterInteractive"
                         >{`window.dataLayer = window.dataLayer || [];
                              function gtag(){dataLayer.push(arguments);}
                              gtag('js', new Date());
                              gtag('config', 'AW-527303866', {
                              page_path: window.location.pathname,
                         });`}</Script>
                         <Script id="page-view">
                              {`!function(f,b,e,v,n,t,s)
                              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                              n.queue=[];t=b.createElement(e);t.async=!0;
                              t.src=v;s=b.getElementsByTagName(e)[0];
                              s.parentNode.insertBefore(t,s)}(window,document,'script',
                              'https://connect.facebook.net/en_US/fbevents.js');
                              fbq('init', '407786137819809'); 
                              fbq('track', 'PageView');`}
                         </Script>
                         <Script id="gtag-conversion">
                              {`
                               gtag('event', 'conversion', {
                                   'send_to': 'AW-527303866/3ewICPbt49ECELqJuPsB',
                                   'transaction_id': ''
                              });`}
                         </Script>
                         <Script id="facebook">
                              {`<noscript>
                                   <img height="1" width="1" 
                                   src="https://www.facebook.com/tr?id=407786137819809&ev=PageView
                                   &noscript=1"/>
                              </noscript>`}{' '}
                         </Script>
                         <NextScript />
                    </body>
               </Html>
          );
     }
}

export default RootDocument;
