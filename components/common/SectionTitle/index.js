import styles from "./SectionTitle.module.scss";

export default function SectionTitle({ title, icon, id }) {
  return (
    <div className={styles.container} id={id}>
      <div className={icon} />
      <h2 className={styles.text}>{title}</h2>
    </div>
  );
}
