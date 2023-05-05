import useSWR from "swr";
import { useRouter } from "next/router";
import { useState, useEffect, useRef, useContext } from "react";
import Navigation from "./Navigation";
import Burger from "./Burger";
import Logo from "./Logo";
import { UserCtx } from "../../state/UserCtx";
import { getDeviceType } from "../../functions/getDeviceType";
import { useHandleClickOutside } from "../../functions/useHandleClickOutside";
import styles from "./Header.module.scss";

export default function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(router.pathname);
  const menuRef = useRef();
  const burgerRef = useRef();
  const user = useContext(UserCtx);
  const returnFirstRef = useRef(router.pathname !== "/");

  const [deviceType, setDeviceType] = useState();

  useEffect(() => {
    setDeviceType(getDeviceType());
  }, []);

  useEffect(() => {
    redirectToLogin();
    redirectToVerify();
  }, [user]);

  useSWR({}, redirectToVerify);

  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);

  function redirectToLogin() {
    if (!user && typeof user === "object") {
      router.push("/login");
    }
  }

  function redirectToVerify() {
    if (!user) return;

    if (
      router.pathname !== "/register" &&
      router.pathname !== "/login" &&
      !user.emailVerified
    ) {
      router.push({ pathname: "/verify-email", query: { uId: user.objectId } });
    }
  }

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

  function redirectLocally(url, returnFirst) {
    const el = document.getElementById(url?.split("#")[1]);
    returnFirst ? returnFirst(url) : redirectDirectly(url);

    function returnFirst(url) {
      setActiveLink(url);
      router.push("/");

      const tId = setTimeout(() => {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
          offset: 100,
        });
        clearTimeout(tId);
      }, 250);
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
          {!user && (
            <div className={`${styles.button} ${styles.button__login}`}>
              <div className="icon icon__money_curved_white icon_nav" />
              <button onClick={() => redirectLocally("#fund")}>Fund us</button>
            </div>
          )}
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
