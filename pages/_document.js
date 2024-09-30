import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          ></link>
          <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
        </Head>
        <a href="#content" className="sr-only focus:not-sr-only">
          Skip to content
        </a>
        <body className="bg-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
