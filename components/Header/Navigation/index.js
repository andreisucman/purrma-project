import { useTranslation } from "react-i18next";
import styles from "./Navigation.module.scss";

export default function Navigation({
  menuRef,
  isMenuOpen,
  activeLink,
  redirectLocally,
  router,
}) {
  const { t } = useTranslation();

  function handleLocalRedirect(url) {
    redirectLocally(url, router.pathname !== "/");
  }

  return (
    <nav
      ref={menuRef}
      className={
        isMenuOpen
          ? `${styles.container} ${styles.container_open}`
          : styles.container
      }
    >
      <ul className={styles.container__list}>
        <li
          className={
            activeLink === "#concept"
              ? `${styles.container__list_item} ${styles.container__list_item_active}`
              : `${styles.container__list_item}`
          }
        >
          <button
            className={styles.container__list_link}
            onClick={() => handleLocalRedirect("#concept")}
          >
            <div className="icon icon__concept icon_nav" />
            {t("Navigation:1")}
          </button>
        </li>
        <li
          className={
            activeLink === "#people"
              ? `${styles.container__list_item} ${styles.container__list_item_active}`
              : `${styles.container__list_item}`
          }
        >
          <button
            className={styles.container__list_link}
            onClick={() => handleLocalRedirect("#people")}
          >
            <div className="icon icon__people icon_nav" />
            {t("Navigation:2")}
          </button>
        </li>
        <li
          className={
            activeLink === "#platform"
              ? `${styles.container__list_item} ${styles.container__list_item_active}`
              : `${styles.container__list_item}`
          }
        >
          <button
            className={styles.container__list_link}
            onClick={() => handleLocalRedirect("#platform")}
          >
            <div className="icon icon__platform icon_nav" />
            {t("Navigation:3")}
          </button>
        </li>
        <li
          className={
            activeLink === "#roadmap"
              ? `${styles.container__list_item} ${styles.container__list_item_active}`
              : `${styles.container__list_item}`
          }
        >
          <button
            onClick={() => handleLocalRedirect("#roadmap")}
            className={styles.container__list_link}
          >
            <div className="icon icon__map_pin icon__nav" />
            {t("Navigation:4")}
          </button>
        </li>
        <li
          className={
            activeLink === "#app"
              ? `${styles.container__list_item} ${styles.container__list_item_active}`
              : `${styles.container__list_item}`
          }
        >
          <button
            onClick={() => handleLocalRedirect("#app")}
            className={styles.container__list_link}
          >
            <div
              className="icon icon__rocket"
              style={{ backgroundSize: "85%", marginRight: "-0.25rem" }}
            />
            {t("Navigation:5")}
          </button>
        </li>
        <li
          className={
            activeLink === "#app"
              ? `${styles.container__list_item} ${styles.container__list_item_active}`
              : `${styles.container__list_item}`
          }
        >
          <button
            onClick={() => handleLocalRedirect("#contact")}
            className={styles.container__list_link}
          >
            <div
              className="icon icon__envelope"
              style={{ backgroundSize: "95%" }}
            />
            {t("Navigation:6")}
          </button>
        </li>
      </ul>
    </nav>
  );
}
