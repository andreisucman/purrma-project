import { useTranslation } from "react-i18next";
import styles from "./Mission.module.scss";

export default function Mission() {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.container__wrapper}>
        <div className="icon icon__pin" />
        <p>{t("Mission:1")}</p>
      </div>
    </div>
  );
}
