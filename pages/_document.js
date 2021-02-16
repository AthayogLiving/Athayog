import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';
import theme from '@/styles/theme';

class RootDocument extends Document {
     static async getInitialProps(ctx) {
          const initialProps = await Document.getInitialProps(ctx);
          return { ...initialProps };
     }

     render() {
          return (
               <Html>
                    <link
                         rel="stylesheet"
                         href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;300;400;500;600;700&display=swap"
                    />
                    <Head />
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
