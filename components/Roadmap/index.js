import React from "react";
import SectionTitle from "../common/SectionTitle";
import Row from "./Row";
import styles from "./Roadmap.module.scss";

const Roadmap = () => {
  const roadmap = [
    { desc: "Build and test the app", date: "12 Apr 23" },
    { desc: "Launch in the US", isCur: true, date: "Jun 23" },
    { desc: "Expand to CA, UK, AU", isFut: true, date: "Sep 23" },
    {
      desc: "Release the native mobile apps",
      isFut: true,
      date: "Sep 23",
    },
    { desc: "Expand to EMEA and ASEAN", isFut: true },
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
