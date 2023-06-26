import Project from "../components/Project";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import Avatars from "../components/Avatars";
import CheckApp from "../components/CheckApp";
import Roadmap from "../components/Roadmap";
import Footer from "../components/common/Footer";
import Contact from "../components/Contact";
import Concept from "../components/Concept";
import ToTop from "../components/common/ToTop";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.container__wrapper}>
        <Hero />
        <Mission />
        <Concept />
        <Avatars />
        <Project />
        <Roadmap />
        <CheckApp />
        <Contact />
        <ToTop elementId={"header"} />
        <Footer />
      </div>
    </div>
  );
}
