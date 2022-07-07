import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { ColorScheme, redTheme } from "../lib/themes";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<ColorScheme>(redTheme);

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} theme={theme} setTheme={setTheme} />
    </ThemeProvider>
  );
}

export default MyApp;
