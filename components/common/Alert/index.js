import { useRef } from "react";
import { useRouter } from "next/router";
import { useHandleClickOutside } from "../../../functions/useHandleClickOutside";
import { showModal } from "../../../functions/showModal";
import styles from "./Alert.module.scss";

export default function Alert({
  setShowAlert,
  message,
  icon,
  customStyles,
  msgOneStyles,
  onClose,
}) {
  const router = useRouter();
  const modalRef = useRef(null);

  useHandleClickOutside({
    refOne: modalRef,
    setShow: onClose ? onClose : () => showModal({ setShow: setShowAlert }),
  });

  return (
    <div className={styles.container} style={customStyles && customStyles}>
      <div className={styles.container__wrapper} ref={modalRef}>
        <div
          className="close"
          onClick={
            onClose ? onClose : () => showModal({ setShow: setShowAlert })
          }
          style={{ top: "0.75rem", right: "0.75rem", backgroundSize: "75%" }}
        />
        <p
          className={styles.container__message}
          style={msgOneStyles && msgOneStyles}
        >
          {message}
        </p>
        {icon && (
          <div
            className={icon}
            style={{
              width: "5rem",
              height: "5rem",
              alignSelf: "center",
              justifySelf: "center",
            }}
          />
        )}
      </div>
    </div>
  );
}
