import Link from "next/link";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.container__wrapper}>
        <ul className={styles.links}>
          <Link href="/legal/terms" className={styles.link}>
            <div className={"icon icon__policy"} />
            Terms
          </Link>
          <Link href="/legal/privacy" className={styles.link}>
            <div className={"icon icon__policy"} />
            Privacy
          </Link>
          <Link href="/contact" className={styles.link}>
            <div className={"icon icon__policy"} />
            Contact
          </Link>
        </ul>
        <p className={styles.copyright}>
          {`${new Date().getFullYear()}`} &copy; Purrma. All rights reserved.
        </p>
      </div>
    </div>
  );
}
