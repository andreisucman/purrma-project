import styles from "./Mission.module.scss";

export default function Mission() {
  return (
    <div className={styles.container}>
      <div className={styles.container__wrapper}>
        <div className="icon icon__heart_outline" style={{width: "3rem", height: "3rem"}}/>
        <p>
          Purrma is a place where mothers and sisters collaborate to feed,
          protect, and increase the adoption rate of stray cats worldwide.
        </p>
      </div>
    </div>
  );
}
