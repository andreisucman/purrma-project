import React, { useState, useEffect } from "react";
import Image from "next/image";
import place_order_pc from "../../public/assets/project/place_order_pc.png";
import place_order_mobile from "../../public/assets/project/place_order_mobile.png";
import submit_delivery_pc from "../../public/assets/project/submit_delivery_pc.png";
import submit_delivery_mobile from "../../public/assets/project/submit_delivery_mobile.png";
import payout_reward_pc from "../../public/assets/project/payout_reward_pc.png";
import payout_reward_mobile from "../../public/assets/project/payout_reward_mobile.png";
import check_quality_pc from "../../public/assets/project/check_quality_pc.png";
import check_quality_mobile from "../../public/assets/project/check_quality_mobile.png";
import display_statistics_pc from "../../public/assets/project/display_statistics_pc.png";
import display_statistics_mobile from "../../public/assets/project/display_statistics_mobile.png";
import SectionTitle from "../common/SectionTitle";
import { useTranslation } from "react-i18next";
import { getDeviceType } from "../../functions/getDeviceType";
import styles from "./Project.module.scss";

export default function Project() {
  const { t } = useTranslation();
  const [deviceType, setDeviceType] = useState();

  useEffect(() => {
    setDeviceType(getDeviceType());
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.container__wrapper}>
        <SectionTitle
          title={t("Project:0")}
          icon={"icon icon__platform"}
          id={"platform"}
        />
        <div className={`${styles.block} ${styles.block_one}`}>
          <div className={styles.block__text}>
            <h3 className={styles.block__title}>{t("Project:1")}</h3>
            <p className={styles.paragraph}>{t("Project:2")}</p>
            <p className={styles.paragraph}>{t("Project:3")}</p>
          </div>
          <div className={styles.img__div}>
            {deviceType === "mobile" ? (
              <Image
                className={styles.img}
                width={"auto"}
                height={450}
                src={place_order_mobile}
                alt="purrma take orders"
              />
            ) : (
              <Image
                className={styles.img}
                width={"auto"}
                height={450}
                src={place_order_pc}
                alt="purrma take orders"
              />
            )}
          </div>
        </div>
        <div className={`${styles.block} ${styles.block_two}`}>
          <div className={styles.block__text}>
            <h3 className={styles.block__title}>{t("Project:4")}</h3>
            <p className={styles.paragraph}>{t("Project:5")}</p>
            <p className={styles.paragraph}>{t("Project:6")}</p>
          </div>
          <div className={styles.img__div}>
            {deviceType === "mobile" ? (
              <Image
                className={styles.img}
                width={"auto"}
                height={450}
                src={submit_delivery_mobile}
                alt="purrma take orders"
              />
            ) : (
              <Image
                className={styles.img}
                width={"auto"}
                height={400}
                src={submit_delivery_pc}
                alt="purrma get deliveries"
              />
            )}
          </div>
        </div>
        <div className={`${styles.block} ${styles.block_three}`}>
          <div className={styles.block__text}>
            <h3 className={styles.block__title}>{t("Project:7")}</h3>
            <p className={styles.paragraph}>{t("Project:8")}</p>
            <p className={styles.paragraph}>{t("Project:9")}</p>
          </div>
          <div className={styles.img__div}>
            {deviceType === "mobile" ? (
              <Image
                className={styles.img}
                width={"auto"}
                height={450}
                src={check_quality_mobile}
                alt="purrma check quality"
              />
            ) : (
              <Image
                className={styles.img}
                width={"auto"}
                height={450}
                src={check_quality_pc}
                alt="purrma check quality"
              />
            )}
          </div>
        </div>
        <div className={`${styles.block} ${styles.block_four}`}>
          <div className={styles.block__text}>
            <h3 className={styles.block__title}>{t("Project:10")}</h3>
            <p className={styles.paragraph}>{t("Project:11")}</p>
            <p className={styles.paragraph}>{t("Project:12")}</p>
          </div>
          <div className={styles.img__div}>
            {deviceType === "mobile" ? (
              <Image
                className={styles.img}
                width={"auto"}
                height={450}
                src={payout_reward_mobile}
                alt="purrma pay out the reward"
              />
            ) : (
              <Image
                className={styles.img}
                width={"auto"}
                height={450}
                src={payout_reward_pc}
                alt="purrma pay out the reward"
              />
            )}
          </div>
        </div>
        <div className={`${styles.block} ${styles.block_five}`}>
          <div className={styles.block__text}>
            <h3 className={styles.block__title}>{t("Project:13")}</h3>
            <p className={styles.paragraph}>{t("Project:14")}</p>
            <p className={styles.paragraph}>{t("Project:15")}</p>
            <p className={styles.paragraph}>{t("Project:16")}</p>
          </div>
          <div className={styles.img__div}>
            {deviceType === "mobile" ? (
              <Image
                className={styles.img}
                width={"auto"}
                height={450}
                src={display_statistics_mobile}
                alt="purrma check quality"
              />
            ) : (
              <Image
                className={styles.img}
                width={"auto"}
                height={450}
                src={display_statistics_pc}
                alt="purrma check quality"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
