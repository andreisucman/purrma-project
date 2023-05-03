import Explanation from "../components/Explanation";
import Hero from "../components/Hero";
import Team from "../components/Team";
import Mission from "../components/Mission";
import Roadmap from "../components/Roadmap";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.container__wrapper}>
        <Hero />
        <Mission />
        <Explanation />
        <Team />
        <Roadmap />
      </div>
    </div>
  );
}
