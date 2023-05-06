import Parse from "parse";
import { useState, useRef } from "react";
import { showModal } from "../../functions/showModal";
import { useHandleClickOutside } from "../../functions/useHandleClickOutside";
import styles from "./ResetPassword.module.scss";

export default function ResetPassword({ setShowResetPassword }) {
  const [emailNext, setEmailNext] = useState(null);
  const [email, setEmail] = useState(null);
  const contRef = useRef(null);

  useHandleClickOutside({
    refOne: contRef,
    setShow: () => showModal({ setShow: setShowResetPassword, val: false }),
  });

  async function requestPasswordReset(email) {
    try {
      Parse.initialize(process.env.NEXT_PUBLIC_APP_ID);
      Parse.serverURL = `${process.env.NEXT_PUBLIC_SERVER_URL}/parse`;

      await Parse.User.requestPasswordReset(email);

      setEmailNext(
        "If you have an account with us you should receive an email with the reset link shortly."
      );

      setTimeout(() => {
        showModal({ setShow: setShowResetPassword, val: false });
      }, 6000);
    } catch (err) {
      setEmailNext(err.msg);
    }
  }

  return (
    <div className={styles.container}>
      <div
        className={styles.container__wrapper}
        onSubmit={(e) => e.preventDefault()}
        ref={contRef}
      >
        <div
          className="close"
          style={{ backgroundSize: "75%" }}
          onClick={() =>
            showModal({ setShow: setShowResetPassword, val: false })
          }
        />
        {!emailNext && (
          <h2 className={styles.container__title}>Request password reset</h2>
        )}
        <div className={styles.content}>
          {!emailNext && (
            <input
              type="email"
              placeholder="Enter your email address"
              className={styles.content__input}
              autoComplete="email"
              disabled={emailNext}
              onChange={(e) => setEmail(e.target.value)}
            />
          )}
          {emailNext && <div className={styles.content__next}>{emailNext}</div>}
          {!emailNext && (
            <button
              className={styles.content__button}
              onClick={() => requestPasswordReset(email)}
            >
              <div className="icon icon__envelope" />
              Reset password
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
