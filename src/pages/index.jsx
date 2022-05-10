import Head from "next/head";
import { Header } from "src/components/Header";
import classes from "src/styles/Home.module.css";

const Index = () => {
  return (
    <div className={classes.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <h1>Next.jsで学ぶReact講座</h1>
      <p>JsonPlaceholderのAPIをいろいろ叩いてみるよ！</p>
    </div>
  );
};

export default Index;
