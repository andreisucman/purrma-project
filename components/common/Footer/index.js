import { useTranslation } from "react-i18next";
import styles from "./Footer.module.scss";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.container__wrapper}>
        <p className={styles.copyright}>
          {`${new Date().getFullYear()}`} &copy; {t("Footer:1")}
        </p>
      </div>
    </div>
  );
}
