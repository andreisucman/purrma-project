import { useState, useContext } from "react";
import { handleFormEntry } from "../../functions/handleFormEntry";
import { handleAuthentication } from "../../functions/handleAuthentication";
import { getPasswordHint } from "../../functions/getPasswordHint";
import { getPasswordsMatchHint } from "../../functions/getPasswordMatchHint";
import { SetUserCtx } from "../../state/UserCtx";
import ShowPassword from "./ShowPassword";
import PasswordsHint from "./PasswordsHint";
import TermsCheckbox from "../common/TermsCheckbox";
import SocialAuth from "../SocialAuth";
import styles from "./RegistrationForm.module.scss";

export default function RegistrationForm({
  registrationData,
  setRegistrationData,
  setMessageFromServer,
  setShowAlert,
  setAuthErrors,
  authErrors,
  router,
  payload,
  handlePush,
}) {
  const [showPasswordOne, setShowPasswordOne] = useState(false);
  const [showPasswordTwo, setShowPasswordTwo] = useState(false);

  const passwordHint = getPasswordHint(registrationData.passOne);
  const passwordsMatchHint = getPasswordsMatchHint(
    registrationData.passOne,
    registrationData.passTwo
  );
  const [disableBtn, setDisableBtn] = useState(false);
  const [showInputs, setShowInputs] = useState(false);

  const setUser = useContext(SetUserCtx);

  function handleSubmit() {
    showInputs
      ? handleAuthentication({
          authType: "registration",
          data: registrationData,
          setMessageFromServer,
          setShowAlert,
          setAuthErrors,
          authErrors,
          setUser,
          handlePush,
          payload,
          passwordHint,
          disableBtn,
          setDisableBtn,
        })
      : setShowInputs((prev) => !prev);
  }

  return (
    <form className={styles.container} onSubmit={(e) => e.preventDefault()}>
      {showInputs && (
        <>
          <input
            className={
              authErrors.name
                ? `${styles.input} ${styles.input_error}`
                : styles.input
            }
            type="text"
            placeholder="Enter your name"
            onChange={(e) =>
              handleFormEntry(e, registrationData, "name", setRegistrationData)
            }
          />
          <input
            className={
              authErrors.email
                ? `${styles.input} ${styles.input_error}`
                : styles.input
            }
            type="email"
            placeholder="Enter your email"
            autoComplete="email"
            onChange={(e) =>
              handleFormEntry(e, registrationData, "email", setRegistrationData)
            }
          />
          {passwordHint && <PasswordsHint text={passwordHint} />}
          <div className={styles.input__wrapper}>
            <input
              className={
                authErrors.passOne
                  ? `${styles.input} ${styles.input_error}`
                  : styles.input
              }
              type={showPasswordOne ? "text" : "password"}
              placeholder="Enter your password"
              autoComplete="new-password"
              onChange={(e) =>
                handleFormEntry(
                  e,
                  registrationData,
                  "passOne",
                  setRegistrationData
                )
              }
            />
            <ShowPassword
              showPassword={showPasswordOne}
              setShowPassword={setShowPasswordOne}
            />
          </div>
          {passwordsMatchHint && <PasswordsHint text={passwordsMatchHint} />}
          <div className={styles.input__wrapper}>
            <input
              className={
                authErrors.passTwo
                  ? `${styles.input} ${styles.input_error}`
                  : styles.input
              }
              type={showPasswordTwo ? "text" : "password"}
              placeholder="Repeat your password"
              onChange={(e) =>
                handleFormEntry(
                  e,
                  registrationData,
                  "passTwo",
                  setRegistrationData
                )
              }
              autoComplete="new-password"
            />
            <ShowPassword
              showPassword={showPasswordTwo}
              setShowPassword={setShowPasswordTwo}
            />
          </div>
          <TermsCheckbox
            isTermAcc={authErrors.terms}
            termsName={"Terms And Conditions"}
            onChange={() =>
              setRegistrationData(
                Object.assign({}, registrationData, {
                  termsAccepted: !registrationData.termsAccepted,
                })
              )
            }
          />
        </>
      )}
      <button className={styles.container__button} onClick={handleSubmit}>
        <div className="icon icon__envelope_white" />
        Register with email
      </button>
      <SocialAuth router={router} payload={payload} />
      <p
        className={`${styles.login_link} non_selectable`}
        onClick={() => router.push("/login")}
      >
        Login
      </p>
    </form>
  );
}
