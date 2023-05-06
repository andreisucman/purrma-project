import { useRef } from "react";
import YoutubeEmbed from "./YoutubeEmbed";
import { showModal } from "../../../functions/showModal";
import { useHandleClickOutside } from "../../../functions/useHandleClickOutside";
import styles from "./VideoInstructions.module.scss";

export default function VideoInstructions({
  videoId,
  title,
  setShowInstructions,
}) {
  const containerRef = useRef(null);

  useHandleClickOutside({
    refOne: containerRef,
    setShow: () =>
      showModal({ setShow: setShowInstructions, val: false, block: "u" }),
  });

  return (
    <div className={styles.container}>
      <div className={styles.container__wrapper} ref={containerRef}>
        <YoutubeEmbed videoId={videoId} title={title} />
      </div>
    </div>
  );
}
