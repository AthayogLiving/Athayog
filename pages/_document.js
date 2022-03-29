import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';
import theme from '@/styles/theme';
import { GA_TRACKING_ID } from '@/lib/gtag';

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

                    <Head>
                         {/* Google Adsense */}
                         <NextScript
                              strategy="afterInteractive"
                              dangerouslySetInnerHTML={{
                                   __html: `
           (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N4LH3M3');
          `
                              }}
                         />
                    </Head>
                    <body>
                         <ColorModeScript
                              initialColorMode={theme.config.initialColorMode}
                         />
                         <noscript
                              dangerouslySetInnerHTML={{
                                   __html: `<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N4LH3M3"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>`
                              }}
                         />
                         <Main />
                         <NextScript />
                    </body>
               </Html>
          );
     }
}

export default RootDocument;
