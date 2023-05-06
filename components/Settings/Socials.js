import { useState, useRef } from "react";
import { saveSocials } from "../../../helpers/general/saveSocials";
import { regexValidateSocials } from "../../../helpers/regex/regexValidateSocials";
import Alert from "../../common/Alert";
import { showModal } from "../../../helpers/showModal";
import { useHandleClickOutside } from "../../../helpers/useHandleClickOutside";
import styles from "./Socials.module.scss";

export default function Socials({ user, setUser, setShowSocials }) {
  const fbInputRef = useRef();
  const igInputRef = useRef();
  const twInputRef = useRef();
  const lnInputRef = useRef();
  const ttInputRef = useRef();

  const [fbDisabled, setFbDisabled] = useState(true);
  const [igDisabled, setIgDisabled] = useState(true);
  const [twDisabled, setTwDisabled] = useState(true);
  const [lnDisabled, setLnDisabled] = useState(true);
  const [ttDisabled, setTtDisabled] = useState(true);

  const [fbLink, setFbLink] = useState(undefined);
  const [igLink, setIgLink] = useState(undefined);
  const [twLink, setTwLink] = useState(undefined);
  const [lnLink, setLnLink] = useState(undefined);
  const [ttLink, setTtLink] = useState(undefined);

  const [alertMessage, setAlertMessage] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const contRef = useRef(null);

  useHandleClickOutside({
    refOne: contRef,
    setShow: () =>
      showModal({ setShow: setShowSocials, val: false, block: "u" }),
  });

  function saveEntry(object, setDisabled) {
    // if the value is not null
    if (object[Object.keys(object)[0]]) {
      const passedRegex = regexValidateSocials({
        platform: Object.keys(object)[0],
        input: object[Object.keys(object)[0]],
        setMessage: setAlertMessage,
        setShowAlert,
      });
      if (!passedRegex) return;

      saveSocials({
        user,
        setUser,
        scl: object,
      });
      setDisabled(true);
    } else {
      setDisabled(true);
    }
  }

  function handleClickEdit(ref, setter) {
    setter((prev) => !prev);

    // give 100ms for the setter above to do his job
    setTimeout(() => {
      ref.current.focus();
    }, 100);
  }

  return (
    <div className={styles.container}>
      <div className={styles.container__wrapper} ref={contRef}>
        <div
          className="close"
          style={{ backgroundSize: "75%" }}
          onClick={() =>
            showModal({ setShow: setShowSocials, val: false, block: "u" })
          }
        />
        <h3 className={styles.title}>Socials</h3>
        {showAlert && (
          <Alert message={alertMessage} setShowAlert={setShowAlert} />
        )}
        <div className={styles.row}>
          {fbDisabled && <div className={styles.overlay} />}
          {fbDisabled ? (
            <button
              className={styles.button}
              onClick={() => handleClickEdit(fbInputRef, setFbDisabled)}
            >
              Edit
            </button>
          ) : (
            <button
              className={styles.button}
              onClick={() => saveEntry({ fb: fbLink }, setFbDisabled)}
            >
              Save
            </button>
          )}
          <div
            className="icon icon__fb icon_s"
            style={{ display: "inline-block", backgroundSize: "65%" }}
          />
          <input
            type="text"
            placeholder="https://facebook.com/username"
            ref={fbInputRef}
            onChange={(e) => setFbLink(e.target.value)}
            defaultValue={user.scls && user.scls.fb && user.scls.fb}
          />
        </div>
        <div className={styles.row}>
          {igDisabled && <div className={styles.overlay} />}
          {igDisabled ? (
            <button
              className={styles.button}
              onClick={() => handleClickEdit(igInputRef, setIgDisabled)}
            >
              Edit
            </button>
          ) : (
            <button
              className={styles.button}
              onClick={() => saveEntry({ ig: igLink }, setIgDisabled)}
            >
              Save
            </button>
          )}
          <div className="icon icon__ig icon_s" />
          <input
            type="text"
            placeholder="https://instagram.com/username"
            ref={igInputRef}
            onChange={(e) => setIgLink(e.target.value)}
            defaultValue={user.scls && user.scls.ig && user.scls.ig}
          />
        </div>
        <div className={styles.row}>
          {twDisabled && <div className={styles.overlay} />}
          {twDisabled ? (
            <button
              className={styles.button}
              onClick={() => handleClickEdit(twInputRef, setTwDisabled)}
            >
              Edit
            </button>
          ) : (
            <button
              className={styles.button}
              onClick={() => saveEntry({ tw: twLink }, setTwDisabled)}
            >
              Save
            </button>
          )}
          <div className="icon icon__tw icon_s" />
          <input
            type="text"
            placeholder="https://twitter.com/username"
            ref={twInputRef}
            onChange={(e) => setTwLink(e.target.value)}
            value={user.scls && user.scls.tw && user.scls.tw}
          />
        </div>
        <div className={styles.row}>
          {lnDisabled && <div className={styles.overlay} />}
          {lnDisabled ? (
            <button
              className={styles.button}
              onClick={() => handleClickEdit(lnInputRef, setLnDisabled)}
            >
              Edit
            </button>
          ) : (
            <button
              className={styles.button}
              onClick={() => saveEntry({ ln: lnLink }, setLnDisabled)}
            >
              Save
            </button>
          )}
          <div className="icon icon__ln icon_s" />
          <input
            type="text"
            placeholder="https://linkedin.com/username"
            ref={lnInputRef}
            onChange={(e) => setLnLink(e.target.value)}
            defaultValue={user.scls && user.scls.ln && user.scls.ln}
          />
        </div>
        <div className={styles.row}>
          {ttDisabled && <div className={styles.overlay} />}
          {ttDisabled ? (
            <button
              className={styles.button}
              onClick={() => handleClickEdit(ttInputRef, setTtDisabled)}
            >
              Edit
            </button>
          ) : (
            <button
              className={styles.button}
              onClick={() => saveEntry({ tt: ttLink }, setTtDisabled)}
            >
              Save
            </button>
          )}
          <div
            className="icon icon__tt icon_s"
            style={{ backgroundSize: "95%" }}
          />
          <input
            type="text"
            placeholder="https://tiktok.com/username"
            ref={ttInputRef}
            onChange={(e) => setTtLink(e.target.value)}
            defaultValue={user.scls && user.scls.tt && user.scls.tt}
          />
        </div>
      </div>
    </div>
  );
}
