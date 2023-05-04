import Image from "next/image";
import SectionTitle from "../common/SectionTitle";
import token_purrma from "../../public/assets/token_purrma.webp";
import styles from "./FundUs.module.scss";

const FundUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__wrapper}>
        <SectionTitle icon={"icon icon__money icon_m"} title={"Fund us"} />
        <div className={styles.content}>
          <Image
            src={token_purrma}
            height={400}
            alt="purrma token"
            className={styles.image}
          />
          <ul className={styles.info}>
            <h3 className={styles.subtitle}>Help Purrma if you want to</h3>
            <li className={styles.item}>
              100 000 Purrma tokens are for sale for $1 worth of BNB each
            </li>
            <li className={styles.item}>
              The funds generated will be used to achieve the roadmap milestones
              faster
            </li>
            <li className={styles.item}>
              We plan to distribute 10% of the company's profit to all Purrma
              token holders
            </li>
            <div className={styles.left}>
              Tokens left: 99872
              <div className={styles.lines}>
                <div className={styles.line} />
                <div className={styles.placeholder} />
              </div>
              100%
            </div>
            <button className={styles.button}>
              <div className="icon icon__money_curved_white" />
              Buy Purrma tokens
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FundUs;
