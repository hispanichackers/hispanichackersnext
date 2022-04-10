// import Page from "../components/Page";
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, lightTheme, darkTheme } from '../assets/GlobalStyles';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    theme == 'dark' ? setTheme('light') : setTheme('dark');
  };

  const globals = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeProvider theme={theme == 'dark' ? darkTheme : lightTheme}>
      <Head>
        <title>Hispanic Hackers</title>
      </Head>
      <Component {...pageProps} {...globals} />
      <GlobalStyles />
    </ThemeProvider>
  );
}
