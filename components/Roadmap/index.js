import React from "react";
import SectionTitle from "../common/SectionTitle";
import Row from "./Row";
import { useTranslation } from "react-i18next";
import styles from "./Roadmap.module.scss";

const Roadmap = () => {
  const { t } = useTranslation();
  const roadmap = [
    { desc: t("Roadmap:1"), isCur: true, date: t("Roadmap:date1") },
    { desc: t("Roadmap:2"), isFut: true, date: t("Roadmap:date2") },
    { desc: t("Roadmap:3"), isFut: true, date: t("Roadmap:date3") },
    { desc: t("Roadmap:4"), isFut: true, date: t("Roadmap:date4") },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.container__wrapper}>
        <SectionTitle
          icon={"icon icon__map_pin icon_m"}
          title={t("Roadmap:0")}
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
