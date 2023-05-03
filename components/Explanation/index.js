import React from "react";
import Image from "next/image";
import check_quality from "../../public/assets/explanation/check_quality.png";
import get_deliveries from "../../public/assets/explanation/get_deliveries.png";
import pay_reward from "../../public/assets/explanation/pay_reward.png";
import take_orders from "../../public/assets/explanation/take_orders.png";

import styles from "./Explanation.module.scss";

export default function Explanation() {
  return (
    <div className={styles.container}>
      <div className={styles.container__wrapper}>
        <div className={styles.block}>
          <div className={styles.img__div}>
            <Image
              className={styles.img}
              src={take_orders}
              alt="purrma take orders"
              height={450}
            />
          </div>
          <div className={styles.block__text}>
            <h3 className={styles.block__title}>Take orders</h3>
            <p className={styles.paragraph}>
              After defeating the AI you can enter the tournament with your score
              to get a chance of winning. The higher your score - the more
              chances you have to win. Your payment combined with the payments of
              other players forms the prize pool that the winner is going to
              take.
            </p>
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.block__text}>
            <h3 className={styles.block__title}>Get deliveries</h3>
            <p className={styles.paragraph}>
              You can get performance rewards from every tournament prize based
              on how well you compare to other players. If you scored within the
              top 10% of your session you get $1 back. If you rank within the top
              5% or top 1% of players you get $2 and $3 back respectively.
            </p>
          </div>
          <div className={styles.img__div}>
            <Image
              className={styles.img}
              src={get_deliveries}
              alt="purrma get deliveries"
              height={450}
            />
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.img__div}>
            <Image
              className={styles.img}
              src={check_quality}
              alt="purrma check quality"
              height={450}
            />
          </div>
          <div className={styles.block__text}>
            <h3 className={styles.block__title}>Check quality</h3>
            <p className={styles.paragraph}>
              You can support the project by getting CHSS tokens that grant a
              share of the reward from every tournament prize. The more CHSS
              tokens you have, the bigger is your share from each payout.
            </p>
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.block__text}>
            <h3 className={styles.block__title}>Pay reward</h3>
            <p className={styles.paragraph}>
              After defeating the AI you can enter the tournament with your score
              to get a chance of winning. The higher your score - the more
              chances you have to win. Your payment combined with the payments of
              other players forms the prize pool that the winner is going to
              take.
            </p>
          </div>
          <div className={styles.img__div}>
            <Image
              className={styles.img}
              src={pay_reward}
              alt="purrma pay reward"
              height={450}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
