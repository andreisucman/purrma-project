import Image from "next/image";
import question_button from "../../../public/assets/question_button.svg";
import { showModal } from "../../../functions/showModal";
import styles from "./PlayButton.module.scss";

export default function PlayButton({
  showInstructions,
  setShowInstructions,
  isStatic,
  customStyle,
}) {
  function handleShow() {
    showModal({ setShow: setShowInstructions, val: true, block: "b" });
  }

  const getClassName = () => {
    if (showInstructions && isStatic) {
      return `${styles.position} ${styles.static} icon_selected`;
    } else if (showInstructions && !isStatic) {
      return `${styles.position} icon_selected`;
    } else if (!showInstructions && isStatic) {
      return `${styles.position} ${styles.static}`;
    } else if (!showInstructions && !isStatic) {
      return styles.position;
    }
  };

  return (
    <Image
      alt=""
      src={question_button}
      className={getClassName()}
      onClick={handleShow}
      style={{
        ...customStyle,
        width: "fit-content",
        height: "1.70rem",
        cursor: "pointer",
      }}
    />
  );
}
