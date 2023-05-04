import styles from "./Mission.module.scss";

export default function Mission() {
  return (
    <div className={styles.container}>
      <div className={styles.container__wrapper}>
        <div className="icon icon__pin" />
        <p>
          Purrma is a platform where mothers and sisters collaborate to feed,
          protect, and increase the adoption of homeless cats worldwide.
        </p>
      </div>
    </div>
  );
}
