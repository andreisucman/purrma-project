import ReactLoading from "react-loading";
import styles from "./Loading.module.scss";

export default function Loading({ customStyle, message }) {
  return (
    <div className={styles.container} style={customStyle && customStyle}>
      <ReactLoading
        type={"spokes"}
        color={customStyle && customStyle.color ? customStyle.color : "#858585"}
        height={customStyle ? customStyle.height : 75}
        width={customStyle ? customStyle.width : 75}
      />
      {message && <span className={styles.msg}>{message}</span>}
    </div>
  );
}
