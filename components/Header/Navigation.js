import styles from "./Navigation.module.scss";

export default function Navigation({
  menuRef,
  isMenuOpen,
  activeLink,
  setActiveLink,
  handleRedirect,
}) {
  function redirectLocally(url) {
    setActiveLink(url);
    const id = document.getElementById(url?.split("#")[1]);
    id.scrollIntoView({ behavior: "smooth" });
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
            onClick={() => redirectLocally("#project")}
          >
            <div className="icon icon__heart_outline icon_nav" />
            Project
          </button>
        </li>
        <li
          className={
            activeLink === "/news"
              ? `${styles.container__list_item} ${styles.container__list_item_active}`
              : `${styles.container__list_item}`
          }
        >
          <button
            onClick={() => handleRedirect("/news")}
            className={styles.container__list_link}
          >
            <div className="icon icon__team icon_m" />
            Team
          </button>
        </li>
        <li
          className={
            activeLink === "/mothers"
              ? `${styles.container__list_item} ${styles.container__list_item_active}`
              : `${styles.container__list_item}`
          }
        >
          <button
            onClick={() => handleRedirect("/mothers")}
            className={styles.container__list_link}
          >
            <div className="icon icon__map_pin icon__nav" />
            Roadmap
          </button>
        </li>

        <li
          className={
            activeLink === "/report"
              ? `${styles.container__list_item} ${styles.container__list_item_active}`
              : `${styles.container__list_item}`
          }
        >
          <button
            onClick={() => handleRedirect("/report")}
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
            activeLink === "/sisters"
              ? `${styles.container__list_item} ${styles.container__list_item_active}`
              : `${styles.container__list_item}`
          }
        >
          <button
            onClick={() => handleRedirect("/sisters")}
            className={styles.container__list_link}
          >
            <div
              className="icon icon__open_door icon_sm"
              style={{ marginRight: "-0.25rem", backgroundSize: "90%" }}
            />
            Log in
          </button>
        </li>
      </ul>
    </nav>
  );
}
