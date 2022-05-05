import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import classes from "src/styles/Home.module.css";
import { useCounter } from "src/hooks/useCounter";
import { useInputArray } from "src/hooks/useInputArray";
import { useBgLightBlue } from "src/hooks/useBgLightBlue";

export default function About() {
  const [count, isShow, handleClick, handleDisplay] = useCounter();
  const [text, array, handleChange, handleAdd] = useInputArray();
  useBgLightBlue();

  return (
    <div className={classes.container}>
      <Head>
        <title>Abount Page</title>
      </Head>
      <Header />
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      {isShow ? <h1>{count}</h1> : null}
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAdd}>要素追加</button>
      <ul>
        {array.map((item) => {
          return (<li key={item}>{item}</li>)
        })}
      </ul>
      <Main page="about" />
      <Footer />
    </div>
  );
}
