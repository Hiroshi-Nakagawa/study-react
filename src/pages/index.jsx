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
      <button onClick={props.handleClick}>ボタン</button>
      <button onClick={props.handleDisplay}>
        {props.isShow ? "非表示" : "表示"}
      </button>
      {props.isShow ? <h1>{props.count}</h1> : null}
      <input type="text" value={props.text} onChange={props.handleChange} />
      <button onClick={props.handleAdd}>要素追加</button>
      <ul>
        {props.array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <Main page="index" />
      <Footer />
    </div>
  );
};

export default Home;
