import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import concept from "../../public/assets/concept.webp";
import concept_tr from "../../public/assets/concept_tr.png";
import concept_mobile from "../../public/assets/concept_mobile.webp";
import concept_mobile_tr from "../../public/assets/concept_mobile_tr.png";
import { getDeviceType } from "../../functions/getDeviceType";
import SectionTitle from "../common/SectionTitle";
import { useRouter } from "next/router";
import styles from "./Concept.module.scss";

export default function Concept() {
  const [deviceType, setDeviceType] = useState();
  const { t } = useTranslation();
  const router = useRouter();

  const isTr = router.locale === "tr";

  useEffect(() => {
    setDeviceType(getDeviceType());
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.container__wrapper}>
        <SectionTitle
          title={t("Concept:1")}
          icon={"icon icon__concept icon_m"}
          id="concept"
        />
        <div className={styles.block}>
          {deviceType === "mobile" ? (
            <Image
              width="auto"
              src={isTr ? concept_mobile_tr : concept_mobile}
              className={styles.image}
              alt="purrma concept"
            />
          ) : (
            <Image
              src={isTr ? concept_tr : concept}
              className={styles.image}
              alt="purrma concept"
            />
          )}
          <div className={styles.text}>
            <div className={styles.paragraph}>
              <h3 className={styles.paragraph__title}>
                <div className="icon icon__angel" />
                {t("Concept:2")}
              </h3>
              {t("Concept:3")}
            </div>
            <div className={styles.paragraph}>
              <h3 className={styles.paragraph__title}>
                <div className="icon icon__face" />
                {t("Concept:4")}
              </h3>
              {t("Concept:5")}
            </div>
            <div className={styles.paragraph}>
              <h3 className={styles.paragraph__title}>
                <div className="icon icon__heart_outline" />
                {t("Concept:6")}
              </h3>
              {t("Concept:7")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
