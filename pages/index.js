import Explanation from "../components/Explanation";
import Hero from "../components/Hero";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.container__wrapper}>
        <Hero />
        <Explanation />
      </div>
    </div>
  );
}
