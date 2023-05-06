import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import Navigation from "./Navigation";
import Burger from "./Burger";
import Logo from "./Logo";
import { getDeviceType } from "../../functions/getDeviceType";
import { useHandleClickOutside } from "../../functions/useHandleClickOutside";
import styles from "./Header.module.scss";

export default function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(router.pathname);
  const menuRef = useRef();
  const burgerRef = useRef();

  const [deviceType, setDeviceType] = useState();

  useEffect(() => {
    setDeviceType(getDeviceType());
  }, []);

  const path = router.asPath;

  useEffect(() => {
    if (!router) return;

    setTimeout(() => {
      const el = document.getElementById(path?.split("/#")[1]);

      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
          offset: 100,
        });
      }
    }, 1000);
  }, [router, path]);

  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);

  useHandleClickOutside({
    refOne: menuRef,
    refTwo: burgerRef,
    setShow: setIsMenuOpen,
  });

  function handleRedirect(url) {
    router.push(url);
    handleToggleMenu();
    setActiveLink(url);
  }

  function redirectLocally(url, ret) {
    const el = document.getElementById(url?.split("#")[1]);
    ret ? returnFirst(url) : redirectDirectly(url);

    function returnFirst(url) {
      router.push(`/${url}`);
    }

    function redirectDirectly(url) {
      setActiveLink(url);
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
        offset: 100,
      });
    }
  }

  function handleToggleMenu() {
    setIsMenuOpen((prevValue) => !prevValue);
  }

  return (
    <header className={styles.container} id="header">
      <div className={styles.container__wrapper}>
        <Logo />
        <div className={styles.container__content}>
          <Navigation
            menuRef={menuRef}
            isMenuOpen={isMenuOpen}
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            handleRedirect={handleRedirect}
            redirectLocally={redirectLocally}
            deviceType={deviceType}
            router={router}
          />
          <Burger
            burgerRef={burgerRef}
            isMenuOpen={isMenuOpen}
            handleToggleMenu={handleToggleMenu}
          />
        </div>
      </div>
    </header>
  );
}
