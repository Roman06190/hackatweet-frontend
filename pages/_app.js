import "../styles/globals.css";
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Hackatweet</title>
        <link rel="icon" href="favicon-16x16.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
