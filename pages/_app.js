import "../styles/globals.css";
import { ChakraProvider, theme, localStorageManager } from "@chakra-ui/react";

function App({ Component, pageProps }) {
  return (
    <ChakraProvider
      resetCSS={true}
      colorModeManager={localStorageManager}
      theme={theme}
    >
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
