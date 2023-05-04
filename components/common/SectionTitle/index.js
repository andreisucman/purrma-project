import styles from "./SectionTitle.module.scss";

export default function SectionTitle({ title, icon }) {
  return (
    <div className={styles.container}>
      <div className={icon} />
      <h2 className={styles.text}>{title}</h2>
    </div>
  );
}
