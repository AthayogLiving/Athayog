import '../styles/globals.css';
import { ChakraProvider, theme, localStorageManager } from '@chakra-ui/react';
import { AuthProvider } from '../lib/auth';

function App({ Component, pageProps }) {
     return (
          <AuthProvider>
               <ChakraProvider
                    resetCSS={true}
                    colorModeManager={localStorageManager}
                    theme={theme}
               >
                    <Component {...pageProps} />
               </ChakraProvider>
          </AuthProvider>
     );
}

export default App;
