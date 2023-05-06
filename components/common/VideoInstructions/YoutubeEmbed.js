import styles from "./YoutubeEmbed.module.scss";

export default function YoutubeEmbed({ videoId, title, containerRef }) {
  return (
    <div className={styles.container__video} ref={containerRef ? containerRef : undefined}>
      <div className={styles.container__iframe_wrapper}>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}?controls=0`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          lazload="true"
          className={styles.container__iframe}
        ></iframe>
      </div>
    </div>
  );
}
