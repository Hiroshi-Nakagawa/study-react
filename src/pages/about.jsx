import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import classes from "src/styles/Home.module.css";

export default function About() {
  return (
    <div className={classes.container}>
      <Head>
        <title>Abount Page</title>
      </Head>
      <Header />
      <Main page="about" />
      <Footer />
    </div>
  );
}
