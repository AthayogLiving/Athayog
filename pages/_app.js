import "../styles/globals.css";
import { ChakraProvider, theme } from "@chakra-ui/react";

function App({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS={true} colorModeManager theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
