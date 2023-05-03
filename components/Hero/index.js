import { useState, useEffect } from "react";
import Image from "next/image";
import banner from "../../public/assets/investor_banner.webp";
import banner_mobile from "../../public/assets/investor_banner_mobile.webp";
import { getDeviceType } from "../../functions/getDeviceType";
import styles from "./Hero.module.scss";

export default function Hero() {
  const [deviceType, setDeviceType] = useState();

  useEffect(() => {
    setDeviceType(getDeviceType());
  }, []);

  return (
    <div className={styles.container}>
      {deviceType === "mobile" ? (
        <Image
          className={styles.image}
          width={"auto"}
          src={banner_mobile}
          alt="purrma concept schema"
        />
      ) : (
        <Image
          className={styles.image}
          width={"auto"}
          src={banner}
          alt="purrma concept schema"
        />
      )}
      <div className={styles.slogan}>
        <h1 className={styles.slogan__first}>Food and love</h1>
        <h2 className={styles.slogan__second}>
          For the <span>cats</span> and people
        </h2>
      </div>
    </div>
  );
}
