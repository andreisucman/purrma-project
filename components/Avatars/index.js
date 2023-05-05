import Image from "next/image";
import mother_portrait from "../../public/assets/portraits/mother_portrait.webp";
import sister_portrait from "../../public/assets/portraits/sister_portrait.webp";
import SectionTitle from "../common/SectionTitle";
import styles from "./Avatars.module.scss";

export default function Avatars() {
  return (
    <div className={styles.container}>
      <div className={styles.container__wrapper}>
        <SectionTitle
          title={"The avatars"}
          icon={"icon icon__user"}
          id="project"
        />
        <div className={styles.block}>
          <Image
            height={400}
            width="auto"
            src={mother_portrait}
            className={styles.image}
            alt="mother portrait"
          />
          <h3 className={styles.name}>
            Meet the Mother
            <div className="icon icon__angel icon_b" />
          </h3>
          <p className={styles.text}>
            Sarah is a successful businesswoman who has dedicated her life to
            attaining business goals and achieving financial freedom.
          </p>
          <p className={styles.text}>
            Her high-paying job at a prestigious firm has allowed her to live a
            lavish lifestyle, but her passion for feline friends has also made
            her willing to invest in their health and safety.
          </p>
          <p className={styles.text}>
            She treats all cats like her own children and would go to great
            lengths to ensure their wellbeing.
          </p>
          <p className={styles.text}>
            She dreams of a world where all fur babies have a loving home and is
            ready to support any cause that aims to achieve this.
          </p>
        </div>
        <div className={styles.block}>
          <Image
            height={400}
            width="auto"
            src={sister_portrait}
            className={styles.image}
            alt="sister portrait"
          />
          <h3 className={styles.name}>
            Meet the Sister
            <div
              className="icon icon__face icon_b"
              style={{ backgroundSize: "90%" }}
            />
          </h3>
          <p className={styles.text}>
            Maria is a hardworking woman who has always dreamt of having a furry
            companion. Despite of struggling financially, her love for cats has
            never wavered, but due to the latest surge in cat food prices she has
            been unable to afford one.
          </p>
          <p className={styles.text}>
            Maria is a lively and outgoing person, who enjoys jogging in the park
            where she often shares the bread from her meals with homeless cats.
          </p>
          <p className={styles.text}>
            As an office clerk at a local business, Maria works hard to make ends
            meet. But she doesn't lose hope that one day she will be able to
            afford a cat of her own, and give her all the love and care she
            deserves.
          </p>
        </div>
      </div>
    </div>
  );
}
