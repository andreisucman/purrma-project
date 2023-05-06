import { useRouter } from "next/router";
import FormattedTime from "../../functions/FormattedTime";
import { writeNotification } from "../../functions/writeNotification";
import { markRead } from "../../functions/markRead";
import styles from "./RowNotifications.module.scss";

export default function RowNotifications({ record }) {
  const router = useRouter();
  const from = router.pathname;

  function handleRedirect(record) {
    router.push({
      pathname: `/workspace/notifications/${record.nId}`,
      query: { from },
    });

    if (record.isI) {
      markRead({ nId: record.nId });
    }
  }

  return (
    <div className={styles.row}>
      <div className={styles.cell} onClick={() => handleRedirect(record)}>
        <FormattedTime time={record.cAt} startMinutes={true} />
      </div>
      <div
        onClick={() => handleRedirect(record)}
        className={
          record.isI
            ? `icon icon__triangle_exclamation icon_s`
            : `icon icon__circle_info icon_s`
        }
      />
      <div className={styles.cell} onClick={() => handleRedirect(record)}>
        {writeNotification({ record, onlyTitle: true }).title}
      </div>
    </div>
  );
}
