import React from "react";
import SectionTitle from "../common/SectionTitle";
import Row from "./Row";
import styles from "./Roadmap.module.scss";

const Roadmap = () => {
  const roadmap = [
    { desc: "Launch in US", isCur: true, date: "Jul 23" },
    { desc: "Launch in CA", isFut: true, date: "Aug 23" },
    { desc: "Launch in UK", isFut: true, date: "Sep 23" },
    { desc: "Launch in EMEA", isFut: true, date: "Sep 23" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.container__wrapper}>
        <SectionTitle
          icon={"icon icon__map_pin icon_m"}
          title={"The roadmap"}
          id="roadmap"
        />
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
