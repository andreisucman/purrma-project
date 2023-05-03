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
            <h3 className={styles.block__title}>1. Receive orders</h3>
            <p className={styles.paragraph}>
              Mothers place orders for feeding cats.
            </p>
            <p className={styles.paragraph}>
              They select the type of food, and quantity, and decide on whether
              this food should be served to stray, adopted, or all cats.{" "}
            </p>
            <p className={styles.paragraph}>
              Mothers are acknowledged as angels for promoting stray cat
              adoption, supporting sisters, and improving public safety.
            </p>
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.block__text}>
            <h3 className={styles.block__title}>2. Deliver the food</h3>
            <p className={styles.paragraph}>
              Sisters serve the food that the mothers have ordered. Each delivery
              gets recorded and uploaded to the platform for quality check.{" "}
            </p>
            <p className={styles.paragraph}>
              The sisters get financially rewarded if the check is successful or
              asked to redeliver the order otherwise.
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
            <h3 className={styles.block__title}>3. Check the deliveries</h3>
            <p className={styles.paragraph}>
              Purrma checks each food delivery against multiple criteria.
            </p>
            <p className={styles.paragraph}>
              These include performance and quality aspects such as the amount of
              food served, the time given to each cat for eating, and the proof
              of location and feeding process.
            </p>
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.block__text}>
            <h3 className={styles.block__title}>4. Pay out the rewards</h3>
            <p className={styles.paragraph}>
              Each sister gets rewarded for every successful delivery. The
              rewards are funded from the mothers' orders.
            </p>
            <p className={styles.paragraph}>
              To get their reward the sisters complete a one-time KYC check that
              includes identity and address verification, the first time they
              initiate a withdrawal.
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
