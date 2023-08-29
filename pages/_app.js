// import Page from "../components/Page";
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, lightTheme, darkTheme } from '../assets/GlobalStyles';
import Head from 'next/head';
import '../styles/global.css'


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
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"></link>
      </Head>
      <Component {...pageProps} {...globals} />
      <GlobalStyles />
    </ThemeProvider>
  );
}
