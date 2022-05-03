import Head from "next/head";
import { Footer } from "src/components/Footer";
import classes from "src/styles/Home.module.css";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(1);
  const handleClick = (e) => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  }

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className={classes.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <button onClick={handleClick}>ボタン</button>
      {count}
      <Main page="index" />
      <Footer />
    </div>
  );
}
