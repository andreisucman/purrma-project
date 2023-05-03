import styles from "./Row.module.scss";

export default function Row({ data }) {
  const { desc, isCur, date, isFut } = data;

  return (
    <div className={styles.container}>
      <div
        className={
          isCur
            ? `${styles.circle} ${styles.circle_cur}`
            : isFut
            ? `${styles.circle} ${styles.circle_fut}`
            : styles.circle
        }
      />
      {desc}
      <span>{date}</span>
    </div>
  );
}
