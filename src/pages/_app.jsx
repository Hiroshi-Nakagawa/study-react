import Head from "next/head";
import { Layout } from "src/components/Layout";
import "src/styles/globals.css";
import { ClickToComponent } from "click-to-react-component";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ClickToComponent />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
