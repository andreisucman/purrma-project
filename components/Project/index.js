import React, { useState, useEffect } from "react";
import Image from "next/image";
import place_order_pc from "../../public/assets/project/place_order_pc.png";
import place_order_mobile from "../../public/assets/project/place_order_mobile.png";
import submit_delivery_pc from "../../public/assets/project/submit_delivery_pc.png";
import submit_delivery_mobile from "../../public/assets/project/submit_delivery_mobile.png";
import payout_reward_pc from "../../public/assets/project/payout_reward_pc.png";
import payout_reward_mobile from "../../public/assets/project/payout_reward_mobile.png";
import check_quality_pc from "../../public/assets/project/check_quality_pc.png";
import check_quality_mobile from "../../public/assets/project/check_quality_mobile.png";
import SectionTitle from "../common/SectionTitle";
import { getDeviceType } from "../../functions/getDeviceType";
import styles from "./Project.module.scss";

export default function Project() {
  const [deviceType, setDeviceType] = useState();

  useEffect(() => {
    setDeviceType(getDeviceType());
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.container__wrapper}>
        <SectionTitle title={"The platform"} icon={"icon icon__user"} />
        <div className={styles.block}>
          <div className={styles.img__div}>
            {deviceType === "mobile" ? (
              <Image
                className={styles.img}
                width={"auto"}
                height={450}
                src={place_order_mobile}
                alt="purrma take orders"
              />
            ) : (
              <Image
                className={styles.img}
                width={"auto"}
                height={450}
                src={place_order_pc}
                alt="purrma take orders"
              />
            )}
          </div>
          <div className={styles.block__text}>
            <h3 className={styles.block__title}>1. Receive orders</h3>
            <p className={styles.paragraph}>
              Mothers place orders for feeding cats.
            </p>
            <p className={styles.paragraph}>
              They select the type of food, quantity, and decide on whether this
              food should be served to stray, adopted, or all cats.{" "}
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
              Sisters serve the food that the mothers have ordered. They record
              each delivery and upload it to the platform for the quality check.
            </p>
            <p className={styles.paragraph}>
              The sisters get financially rewarded if the check is successful or
              asked to serve the food again otherwise.
            </p>
          </div>
          <div className={styles.img__div}>
            {deviceType === "mobile" ? (
              <Image
                className={styles.img}
                width={"auto"}
                height={450}
                src={submit_delivery_mobile}
                alt="purrma take orders"
              />
            ) : (
              <Image
                className={styles.img}
                width={"auto"}
                height={400}
                src={submit_delivery_pc}
                alt="purrma get deliveries"
              />
            )}
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.img__div}>
            {deviceType === "mobile" ? (
              <Image
                className={styles.img}
                width={"auto"}
                height={450}
                src={check_quality_mobile}
                alt="purrma check quality"
              />
            ) : (
              <Image
                className={styles.img}
                width={"auto"}
                height={450}
                src={check_quality_pc}
                alt="purrma check quality"
              />
            )}
          </div>
          <div className={styles.block__text}>
            <h3 className={styles.block__title}>3. Check the deliveries</h3>
            <p className={styles.paragraph}>
              Purrma checks each food delivery against multiple criteria.
            </p>
            <p className={styles.paragraph}>
              These include performance and quality aspects such as the amount of
              food served, the time given to each cat for eating, the proof
              of location and the video showing the feeding process.
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
            {deviceType === "mobile" ? (
              <Image
                className={styles.img}
                width={"auto"}
                height={450}
                src={payout_reward_mobile}
                alt="purrma pay out the reward"
              />
            ) : (
              <Image
                className={styles.img}
                width={"auto"}
                height={450}
                src={payout_reward_pc}
                alt="purrma pay out the reward"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
