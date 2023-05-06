import styles from "./Navigation.module.scss";

export default function Navigation({
  menuRef,
  isMenuOpen,
  activeLink,
  handleRedirect,
  redirectLocally,
  deviceType,
  router,
  user,
}) {
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
            activeLink === "#project"
              ? `${styles.container__list_item} ${styles.container__list_item_active}`
              : `${styles.container__list_item}`
          }
        >
          <button
            className={styles.container__list_link}
            onClick={() => handleLocalRedirect("#project")}
          >
            <div className="icon icon__heart_outline icon_nav" />
            Project
          </button>
        </li>
        <li
          className={
            activeLink === "#team"
              ? `${styles.container__list_item} ${styles.container__list_item_active}`
              : `${styles.container__list_item}`
          }
        >
          <button
            onClick={() => handleLocalRedirect("#team")}
            className={styles.container__list_link}
          >
            <div className="icon icon__team icon_m" />
            Team
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
            Roadmap
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
            App
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
              style={{ backgroundSize: "85%", marginRight: "-0.15rem" }}
            />
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}
