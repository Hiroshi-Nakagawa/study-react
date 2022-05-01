import { Links } from "../components/Links";
import styles from "../styles/Home.module.css";
import { Headline } from "../components/Headline";

export function Main(props) {
  return (
    <main className={styles.main}>
      <Headline page="index">
        <code className={styles.code}>pages/{props.page}.js</code>
      </Headline>

      <Links />
    </main>
  );
}
