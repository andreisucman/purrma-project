import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.container__wrapper}>
        <ul className={styles.links}>
          <li className={styles.link}>
            <div className={"icon icon__policy"} />
            Privacy
          </li>
          <li className={styles.link}>
            <div className={"icon icon__policy"} />
            Terms
          </li>
          <li className={styles.link}>
            <div className={"icon icon__policy"} />
            Contact
          </li>
        </ul>
        <p className={styles.copyright}>
          {`${new Date().getFullYear()}`} &copy; Purrma. All rights reserved.
        </p>
      </div>
    </div>
  );
}
