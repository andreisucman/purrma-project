import FormattedTime from "../../functions/FormattedTime";
import styles from "./RowCard.module.scss";

export default function RowCard({ record, isWithdraw }) {
  return (
    <div
      className={
        isWithdraw ? `${styles.row} ${styles.row__withdraw}` : styles.row
      }
    >
      <div className={styles.cell}>
        <div
          className="icon icon__time_arrow"
          style={{ backgroundSize: "85%" }}
        />
        <FormattedTime time={record.cAt} />
      </div>
      <div className="separator" />
      <div className={styles.cell} style={{ gap: "0.5rem" }}>
        <div
          className={
            record.chng > 0
              ? `icon icon__money_sign`
              : `icon icon__withdraw_money`
          }
        />
        {record.chng}$
      </div>
      {!isWithdraw && (
        <div className={styles.cell} style={{ gap: "0.5rem" }}>
          <div className={`icon icon__bills_stack`} />
          {record.blnc}$
        </div>
      )}
    </div>
  );
}
