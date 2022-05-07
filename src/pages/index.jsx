import Head from "next/head";
import { Footer } from "src/components/Footer";
import classes from "src/styles/Home.module.css";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";

const Home = (props) => {
  return (
    <div className={classes.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      test
    </div>
  );
};

export default Home;
