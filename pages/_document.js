import Document, { Html, Head, Main, NextScript } from 'next/document';
import GoogleFonts from 'next-google-fonts';

class RootDocument extends Document {
     static async getInitialProps(ctx) {
          const initialProps = await Document.getInitialProps(ctx);
          return { ...initialProps };
     }

     render() {
          return (
               <Html>
                    <GoogleFonts href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;700&display=swap" />

                    <Head />
                    <body>
                         <Main />
                         <NextScript />
                    </body>
               </Html>
          );
     }
}

export default RootDocument;
