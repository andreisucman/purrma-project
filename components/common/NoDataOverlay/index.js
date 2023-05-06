import styles from "./NoDataOverlay.module.scss";

export default function NoDataOverlay({ message, icon, customStyle }) {
  return (
    <div className={styles.container} style={customStyle && customStyle}>
      <div className={icon} />
      <p style={{ textAlign: "center" }}>{message}</p>
    </div>
  );
}
