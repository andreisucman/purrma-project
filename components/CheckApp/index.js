import { useTranslation } from "react-i18next";
import styles from "./CheckApp.module.scss";

const CheckApp = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container} id="app">
      <div className={styles.container__wrapper}>
        <div className={styles.content}>
          <div
            className={styles.buttons}
            onClick={() => (window.location.href = "https://purrma.com")}
          >
            <div className="icon icon__rocket" />
            {t("CheckApp:1")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckApp;
