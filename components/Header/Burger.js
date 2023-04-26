import styles from "./Burger.module.scss";

export default function Burger({ handleToggleMenu, burgerRef, isMenuOpen }) {
  return (
    <div
      ref={burgerRef}
      className={styles.container}
      onClick={() => handleToggleMenu()}
    >
      <div
        className={
          isMenuOpen
            ? `${styles.stick} ${styles.stick__top} ${styles.stick__top_open}`
            : `${styles.stick} ${styles.stick__top}`
        }
      />
      <div
        className={
          isMenuOpen
            ? `${styles.stick} ${styles.stick__middle} ${styles.stick__middle_open}`
            : `${styles.stick} ${styles.stick__middle}`
        }
      />
      <div
        className={
          isMenuOpen
            ? `${styles.stick} ${styles.stick__bottom} ${styles.stick__bottom_open}`
            : `${styles.stick} ${styles.stick__bottom}`
        }
      />
    </div>
  );
}
