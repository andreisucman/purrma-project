import React from "react";
import SectionTitle from "../common/SectionTitle";
import Row from "./Row";
import styles from "./Roadmap.module.scss";

const Roadmap = () => {
  const roadmap = [
    { desc: "Build and test the app", date: "12 Apr 23" },
    { desc: "Launch organically", isCur: true },
    { desc: "Onboard the first 100 sisters", isFut: true },
    { desc: "Onboard the first 10 mothers", isFut: true },
    { desc: "Launch the first paid ad campaign", isFut: true },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.container__wrapper}>
        <SectionTitle icon={"icon icon__map_pin icon_m"} title={"The roadmap"} />
        <div className={styles.content}>
          {roadmap.map((m, i) => (
            <React.Fragment key={i}>
              <Row data={m} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
