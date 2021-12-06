import Head from "next/head";
import "../styles/globals.scss";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Smooot</title>
        <link rel="icon" href="/logo.png" />
        <meta
          name="description"
          content="The smooot app is a next generation platform connecting passengers and riders Smooot provides a platform for individuals (Passengers) to book/order and pay for interstate travel in Nigeria seamlessly. Smooot intends and is working on making a secured platform for all the stakeholders using the platform. The team at smooot are working in providing a unique solution in solving the challenges associated with booking and paying for interstate travels .While we are working on building a unique platform for all, Keep calm and Stay smooot!"
        />

        <meta property="og:image" content="/logo.png" />
        <meta property="og:title" content="Smooot App" />
        <meta
          property="og:description"
          content="The smooot app is a next generation platform connecting passengers and riders Smooot provides a platform for individuals (Passengers) to book/order and pay for interstate travel in Nigeria seamlessly. Smooot intends and is working on making a secured platform for all the stakeholders using the platform. The team at smooot are working in providing a unique solution in solving the challenges associated with booking and paying for interstate travels .While we are working on building a unique platform for all, Keep calm and Stay smooot!"
        />

        <meta property="twitter:image" content="/logo.png" />
        <meta property="twitter:title" content="Smooot App" />
        <meta
          property="twitter:description"
          content="The smooot app is a next generation platform connecting passengers and riders Smooot provides a platform for individuals (Passengers) to book/order and pay for interstate travel in Nigeria seamlessly. Smooot intends and is working on making a secured platform for all the stakeholders using the platform. The team at smooot are working in providing a unique solution in solving the challenges associated with booking and paying for interstate travels .While we are working on building a unique platform for all, Keep calm and Stay smooot!"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
