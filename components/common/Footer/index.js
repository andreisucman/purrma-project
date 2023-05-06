import Link from "next/link";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.container__wrapper}>
        <p className={styles.copyright}>
          {`${new Date().getFullYear()}`} &copy; Purrma. All rights reserved.
        </p>
      </div>
    </div>
  );
}
