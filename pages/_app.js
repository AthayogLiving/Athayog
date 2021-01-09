import "../styles/globals.css";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { ProvideAuth } from "../utils/auth";

function App({ Component, pageProps }) {
  return (
    <ProvideAuth>
      <ChakraProvider resetCSS={true} colorModeManager theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ProvideAuth>
  );
}

export default App;
