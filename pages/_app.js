import { ChakraProvider, localStorageManager } from '@chakra-ui/react';
import { AuthProvider } from '@/lib/auth';
import theme from '@/styles/theme.js';

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
