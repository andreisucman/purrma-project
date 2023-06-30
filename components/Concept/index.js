import { useState, useEffect } from "react";
import Image from "next/image";
import concept from "../../public/assets/concept.webp";
import concept_mobile from "../../public/assets/concept_mobile.webp";
import { getDeviceType } from "../../functions/getDeviceType";
import SectionTitle from "../common/SectionTitle";
import styles from "./Concept.module.scss";

export default function Concept() {
  const [deviceType, setDeviceType] = useState();

  useEffect(() => {
    setDeviceType(getDeviceType());
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.container__wrapper}>
        <SectionTitle
          title={"The concept"}
          icon={"icon icon__concept icon_m"}
          id="concept"
        />
        <div className={styles.block}>
          {deviceType === "mobile" ? (
            <Image
              width="auto"
              src={concept_mobile}
              className={styles.image}
              alt="purrma concept"
            />
          ) : (
            <Image src={concept} className={styles.image} alt="purrma concept" />
          )}
          <div className={styles.text}>
            <div className={styles.paragraph}>
              <h3 className={styles.paragraph__title}>
                <div className="icon icon__angel" />
                Mothers
              </h3>
              Mothers start cat feeding. They select the type of food, the
              quantity, and the type of cats the food should be given to.
            </div>
            <div className={styles.paragraph}>
              <h3 className={styles.paragraph__title}>
                <div className="icon icon__face" />
                Sisters
              </h3>
              Sisters procure the food that mothers have ordered and deliver it
              to cats for a financial reward that is also covered by mothers.
            </div>
            <div className={styles.paragraph}>
              <h3 className={styles.paragraph__title}>
                <div className="icon icon__heart_outline" />
                Purrma
              </h3>
              Purrma connects mothers and sisters, checks the quality of each
              sister's work and features their statistics on a leaderboard and
              personal account pages.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
