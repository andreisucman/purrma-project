import styles from "./WorkspaceTitle.module.scss";

export default function WorkspaceTitle({ text, cnCd, name }) {
  return (
    <h2 className={styles.container}>
      <div className={styles.text}>
        <div
          className={`icon icon__user`}
          style={{ minWidth: "2rem", minHeight: "2rem" }}
        />
        {text} {name}{" "}
      </div>
    </h2>
  );
}
