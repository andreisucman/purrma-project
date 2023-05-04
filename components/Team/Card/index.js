import { useRouter } from "next/router";
import Image from "next/image";
import styles from "./Card.module.scss";

export default function Card({ data }) {
  const router = useRouter();
  const { name, img, title, about, desc, links, timeline } = data;

  return (
    <div className={styles.block}>
      <div className={styles.img__div}>
        <Image
          className={styles.img}
          src={img}
          alt={`${name} purrma`}
          height={350}
        />
      </div>
      <div className={styles.block__text}>
        <h3 className={styles.block__title}>
          {name}
          <div className={styles.links}>
            <div className={styles.ln} onClick={() => router.push(links.ln)} />
            {links?.gh && (
              <div className={styles.gh} onClick={() => router.push(links.gh)} />
            )}
          </div>
        </h3>
        <p className={styles.subtitle}>{title}</p>
        <p className={styles.paragraph}>{about}</p>
        <p className={styles.paragraph}>{desc}</p>
        <div className={styles.timeline}>
          <div className={styles.timeline__step}>
            <div className={styles.timeline__bar}>
              <div
                className={`${styles.timeline__circle} ${styles.timeline__circle_active}`}
              />
            </div>
            <span>{title} (Purrma)</span>
          </div>
          <div className={styles.timeline__step}>
            <div className={styles.timeline__bar}>
              <div
                className={
                  timeline?.one?.isAct
                    ? `${styles.timeline__circle} ${styles.timeline__circle_active}`
                    : styles.timeline__circle
                }
              />
            </div>
            <span>{timeline?.one?.text}</span>
          </div>
          <div className={styles.timeline__step}>
            <div className={styles.timeline__bar}>
              <div className={styles.timeline__circle} />
            </div>
            <span>{timeline?.two?.text}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
