import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider, jsx } from "@emotion/react";

const theme = {
  backgroundColor: "green",
  color: "red",
};

// const red = "#d95550";
// const blue = "#4c9195";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
