import FormattedTime from "../../../helpers/workspace/FormattedTime";
import { writeNotification } from "../../../helpers/writeNotification";
import { markRead } from "../../../helpers/notifications/markRead";
import styles from "./RowNotificationsBody.module.scss";

export default function RowNotificationsBody({ record, handleClick }) {
  const text = writeNotification({ record });

  function click() {
    handleClick({
      body: text.body,
      title: text.title,
      showUpload:
        record.abbr === "sc" ? true : record.abbr === "ses" ? true : false,
      nId: record.nId,
      timeAgo: record.cAt,
      fedId: record.data[0],
    });

    if (record.isI) {
      markRead({ nId: record.nId });
    }
  }

  return (
    <div
      className={
        record.isI
          ? `${styles.row} non_selectable selected`
          : `${styles.row} non_selectable`
      }
      onClick={click}
    >
      <div className={styles.cell}>
        <FormattedTime time={record && record.cAt} startMinutes={true} />
      </div>
      <div className={styles.cell} style={{ gap: "0.25rem" }}>
        <div
          className={
            record?.isI
              ? "icon icon__triangle_exclamation"
              : "icon icon__circle_info"
          }
          style={{ backgroundSize: "80%" }}
        />
        <p className={styles.cell__message}>{text.title}</p>
      </div>
    </div>
  );
}
