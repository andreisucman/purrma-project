import { useRef, useState, useEffect } from "react";
import styles from "./ToTop.module.scss";

export default function ToTop({ elementId, customStyles }) {
  const [showButton, setShowButton] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const el = document.getElementById(elementId);
    targetRef.current = el;

    function scroll() {
      if (el.getBoundingClientRect().top < 0) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }
    window.addEventListener("scroll", scroll);

    return () => window.removeEventListener("scroll", scroll);
  }, []);

  return (
    <>
      {showButton && (
        <div className={styles.container} style={customStyles && customStyles}>
          <div
            className={styles.container__button}
            onClick={() =>
              targetRef.current.scrollIntoView({ behavior: "smooth" })
            }
          />
        </div>
      )}
    </>
  );
}
