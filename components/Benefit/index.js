import SectionTitle from "../common/SectionTitle";
import styles from "./Benefit.module.scss";

export default function Benefit() {
  return (
    <div className={styles.container}>
      <div className={styles.container__wrapper}>
        <SectionTitle
          title={"The benefit"}
          icon={"icon icon__globe"}
          id="benefit"
        />
        <ul className={styles.list}>
          <li className={styles.list__item}><div className="icon icon__cat_house icon_m"/>Less cats on streets - homeless cats get adopted</li>
          <li className={styles.list__item}><div className="icon icon__face icon_m"/>Happier public - everyone can now own a cat</li>
          <li className={styles.list__item}><div className="icon icon__cat_face icon_m"/>Happier cats - less scratches (not guaranteed)</li>
        </ul>
      </div>
    </div>
  );
}
