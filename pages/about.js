import Head from "next/head";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import classes from "../styles/Home.module.css";

export default function About() {
  return (
    <div className={classes.container}>
      <Head>
        <title>Abount Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main page="about" />
      <Footer />
    </div>
  );
}
