import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.container__wrapper}>
        <div className={styles.slogan}>
          <h1 className={styles.slogan__first}>
            <div className="icon icon__dry_food icon_b" />
            Food and love <div className="icon icon__heart_outline icon_b" />
          </h1>
          <h2 className={styles.slogan__second}>
            For the <span>cats</span> and people
          </h2>
        </div>
      </div>
    </div>
  );
}
