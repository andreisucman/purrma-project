const Parse = (await import("parse")).default;
import { useState, useRef } from "react";
import { useUpdateUser } from "../../functions/useUpdateUser";
import ChangeEmailModule from "../ChangeEmailModule";
import { showModal } from "../../functions/showModal";
import styles from "./DataList.module.scss";

export default function DataList({
  router,
  user,
  setUser,
  setShowAlert,
  setAlertMessage,
}) {
  const nameInputRef = useRef();
  const [name, setName] = useState(null);
  const [isNameDisabled, setIsNameDisabled] = useState(true);
  const passwordPlaceholder = new Array(user && user.psLen).fill("*").join("");
  const [showChangeEmail, setShowChangeEmail] = useState(false);
  const [disablePassReset, setDisablePassReset] = useState(false);

  async function handleEditNameClick() {
    if (isNameDisabled) {
      setIsNameDisabled(false);
      setTimeout(() => {
        nameInputRef.current.focus();
      }, 150);
    } else {
      setIsNameDisabled(true);

      if (name.length < 4) {
        setAlertMessage("Enter at least 4 characters");
        return showModal({ setShow: setShowAlert, val: true, block: "b" });
      }
      if (!name || name === user.name || name.trim() === "") return;
      Parse.initialize(process.env.NEXT_PUBLIC_APP_ID);
      Parse.serverURL = `${process.env.NEXT_PUBLIC_SERVER_URL}/parse`;

      const response = await Parse.Cloud.run("changeName", { name });
      if (response && response.sts) {
        useUpdateUser({ user, setUser, params: { name } });
        setAlertMessage("Success! Name saved.");
        showModal({ setShow: setShowAlert, val: true, block: "b" });
      } else {
        setAlertMessage(response.message);
        showModal({ setShow: setShowAlert, val: true, block: "b" });
      }
    }
  }

  async function handleResetPassword() {
    if (disablePassReset) return;
    setAlertMessage(
      "Request received. Please check your email for the instructions."
    );

    Parse.initialize(process.env.NEXT_PUBLIC_APP_ID);
    Parse.serverURL = `${process.env.NEXT_PUBLIC_SERVER_URL}/parse`;

    Parse.User.requestPasswordReset(user.email);
    setDisablePassReset(true);

    setTimeout(() => {
      setAlertMessage(null);
      setDisablePassReset(false);
      Parse.User.logOut();
      router.push("/login");
    }, 6000);
  }

  return (
    <>
      {showChangeEmail && (
        <ChangeEmailModule user={user} setShowModule={setShowChangeEmail} />
      )}
      <ul className={styles.list}>
        <li className={styles.list__row}>
          <input
            type="text"
            value={name || name === "" ? name : user.name}
            onChange={(e) => setName(e.target.value)}
            disabled={isNameDisabled}
            className={styles.list__input}
            ref={nameInputRef}
          />
          <button className={styles.list__btn} onClick={handleEditNameClick}>
            <div
              className={
                isNameDisabled
                  ? "icon icon__pencil_notebook"
                  : "icon icon__cloud"
              }
              style={{ cursor: "pointer" }}
            />
          </button>
        </li>
        {user && user.email && (
          <li className={styles.list__row}>
            <input
              type="text"
              disabled={true}
              value={user.email}
              className={styles.list__input}
            />
            <button
              className={styles.list__btn}
              onClick={() => setShowChangeEmail((prev) => !prev)}
            >
              <div
                className={"icon icon__pencil_notebook"}
                style={{ cursor: "pointer" }}
              />
            </button>
          </li>
        )}
        {user && user.psLen && (
          <li className={styles.list__row}>
            <input
              type="text"
              disabled={true}
              value={passwordPlaceholder}
              className={styles.list__input}
            />
            <button className={styles.list__btn} onClick={handleResetPassword}>
              <div
                className={"icon icon__pencil_notebook"}
                style={{ cursor: "pointer" }}
              />
            </button>
          </li>
        )}
      </ul>
    </>
  );
}
