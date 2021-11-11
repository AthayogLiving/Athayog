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
                         <script
                              data-ad-client="<Your value here>"
                              async
                              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
                         ></script>

                         {/* Global Site Tag (gtag.js) - Google Analytics */}
                         <script
                              async
                              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                         />
                         <script
                              dangerouslySetInnerHTML={{
                                   __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `
                              }}
                         />
                    </Head>
                    <body>
                         <ColorModeScript
                              initialColorMode={theme.config.initialColorMode}
                         />
                         <Main />
                         <NextScript />
                    </body>
               </Html>
          );
     }
}

export default RootDocument;
