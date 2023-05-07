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
          icon={"icon icon__user"}
          id="project"
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
            <Image
              width="auto"
              src={concept}
              className={styles.image}
              alt="purrma concept"
            />
          )}
        </div>
      </div>
    </div>
  );
}
