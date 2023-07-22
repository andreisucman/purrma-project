import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import styles from "./Hero.module.scss";

export default function Hero() {
  const { t } = useTranslation();
  const router = useRouter();
  const isTr = router.locale === "tr";

  return (
    <div className={styles.container}>
      <div
        className={
          isTr
            ? `${styles.container__wrapper_tr} ${styles.container__wrapper}`
            : styles.container__wrapper
        }
      >
        <div className={styles.slogan}>
          <h1 className={styles.slogan__first}>
            <div className="icon icon__dry_food icon_b" />
            {t("Hero:1")} <div className="icon icon__heart_outline icon_b" />
          </h1>
          <h2 className={styles.slogan__second}>
            {t("Hero:2")} <span>{t("Hero:3")}</span> {t("Hero:4")}
          </h2>
        </div>
      </div>
    </div>
  );
}
