import Explanation from "../components/Explanation";
import Hero from "../components/Hero";
import Team from "../components/Team";
import Mission from "../components/Mission";
import Avatars from "../components/Avatars";
import FundUs from "../components/FundUs";
import CheckApp from "../components/CheckApp";
import Roadmap from "../components/Roadmap";
import Footer from "../components/Footer";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.container__wrapper}>
        <Hero />
        <Mission />
        <Avatars />
        <Explanation />
        <Team />
        <Roadmap />
        <FundUs />
        <CheckApp />
        <Footer />
      </div>
    </div>
  );
}
