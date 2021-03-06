import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import NextNprogress from "nextjs-progressbar";
import "../styles/globals.css";

const colors = {
  brand: {
    50: "#ecefff",
    100: "#cbceeb",
    200: "#a9aed6",
    300: "#888ec5",
    400: "#666db3",
    500: "#4d5499",
    600: "#3c4178",
    700: "#2a2f57",
    800: "#181c37",
    900: "#080819",
  },
};
function MyApp({ Component, pageProps }) {
  const theme = extendTheme({ colors });

  return (
    <ChakraProvider theme={theme}>
      <NextNprogress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height="2"
      />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
