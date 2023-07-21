import Image from "next/image";
import mother_portrait from "../../public/assets/portraits/mother_portrait.webp";
import sister_portrait from "../../public/assets/portraits/sister_portrait.webp";
import SectionTitle from "../common/SectionTitle";
import { useTranslation } from "react-i18next";
import styles from "./Avatars.module.scss";

export default function Avatars() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.container__wrapper}>
        <SectionTitle
          title={t("Avatars:0")}
          icon={"icon icon__people"}
          id={"people"}
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
            {t("Avatars:1")}
            <div className="icon icon__angel icon_b" />
          </h3>
          <p className={styles.text}>{t("Avatars:2")}</p>
          <p className={styles.text}>{t("Avatars:3")}</p>
          <p className={styles.text}>{t("Avatars:4")}</p>
          <p className={styles.text}>{t("Avatars:5")}</p>
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
            {t("Avatars:6")}
            <div
              className="icon icon__face icon_b"
              style={{ backgroundSize: "90%" }}
            />
          </h3>
          <p className={styles.text}>{t("Avatars:7")}</p>
          <p className={styles.text}>{t("Avatars:8")}</p>
          <p className={styles.text}>{t("Avatars:9")}</p>
        </div>
      </div>
    </div>
  );
}
