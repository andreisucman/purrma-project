import Row from "./Row";
import styles from "./Roadmap.module.scss";

const Roadmap = () => {
  const roadmap = [
    { desc: "Build and test the app", date: "12 Apr 23" },
    { desc: "Launch organically", isCur: true },
    { desc: "Get the first 100 sisters", isFut: true },
    { desc: "Get the first 10 mothers", isFut: true },
    { desc: "Launch the first paid ad campaign", isFut: true },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.container__wrapper}>
        <div className={styles.title}>
          <h2 className={styles.title__text}>The roadmap</h2>
        </div>
        <div className={styles.content}>
          {roadmap.map((m) => (
            <Row data={m} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
