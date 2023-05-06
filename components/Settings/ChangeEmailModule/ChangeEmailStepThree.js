import { useContext } from "react";
import { SetUserCtx } from "../../../state/UserCtx";
import { useUpdateUser } from "../../../functions/useUpdateUser";
import styles from "./ChangeEmailStep.module.scss";

export default function ChangeEmailStepThree({ user, nEml, setShow }) {
  const setUser = useContext(SetUserCtx);
  useUpdateUser({ user, setUser, params: { email: nEml } });

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h3 className={styles.subtitle}>Activate your new email</h3>
        <p className={styles.msg} style={{ paddingRight: "2rem" }}>
          Visit your new email address <b>{nEml}</b> and click on the
          confirmation link that we've just sent to activate it.
        </p>
        <div className={`${styles.icon} icon icon__envelope_exclamation`} />
        <button className={styles.button} onClick={() => setShow(false)}>
          Done
          <div className="icon icon__thumb_up icon_s" />
        </button>
      </div>
    </div>
  );
}
