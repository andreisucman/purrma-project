import { useState, useContext, memo } from "react";
import ResetPassword from "./ResetPassword";
import { handleFormEntry } from "../../functions/handleFormEntry";
import { handleAuthentication } from "../../functions/handleAuthentication";
import ShowPassword from "../RegistrationForm/ShowPassword";
import { SetUserCtx } from "../../state/UserCtx";
import { showModal } from "../../functions/showModal";
import SocialAuth from "../SocialAuth";
import styles from "./LoginForm.module.scss";

export function LoginForm({
  loginData,
  setLoginData,
  setMessageFromServer,
  setShowAlert,
  setAuthErrors,
  authErrors,
  handlePush,
  payload,
  router,
}) {
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const setUser = useContext(SetUserCtx);
  const [disableBtn, setDisableBtn] = useState(false);
  const [showInputs, setShowInputs] = useState(false);

  function handleSubmit() {
    showInputs
      ? handleAuthentication({
          authType: "login",
          data: loginData,
          setMessageFromServer,
          setShowAlert,
          setAuthErrors,
          handlePush,
          authErrors,
          payload,
          setUser,
          setDisableBtn,
          disableBtn,
        })
      : setShowInputs((prev) => !prev);
  }

  return (
    <form className={styles.container} onSubmit={(e) => e.preventDefault()}>
      {showInputs && (
        <>
          <input
            className={
              authErrors.email
                ? `${styles.input} ${styles.input_error}`
                : styles.input
            }
            type="email"
            placeholder="Enter your email"
            onChange={(e) =>
              handleFormEntry(e, loginData, "email", setLoginData)
            }
            autoComplete="email"
          />
          <div className={styles.input__wrapper}>
            <input
              className={
                authErrors.password
                  ? `${styles.input} ${styles.input_error}`
                  : styles.input
              }
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              autoComplete="current-password"
              onChange={(e) =>
                handleFormEntry(e, loginData, "password", setLoginData)
              }
            />
            {showInputs && (
              <ShowPassword
                showPassword={showPassword}
                setShowPassword={setShowPassword}
              />
            )}
          </div>
        </>
      )}
      <button
        type="submit"
        className={`${styles.button} ${styles.button__red}`}
        onClick={handleSubmit}
      >
        <div className="icon icon__envelope_white" />
        Log in with email
      </button>
      <SocialAuth
        isLog={true}
        router={router}
        payload={payload}
        setMessage={setMessageFromServer}
        setShowAlert={setShowAlert}
      />
      <div className={styles.links}>
        <p
          className={`${styles.container__forgot_password} non_selectable`}
          onClick={() => showModal({ setShow: setShowResetPassword, val: true })}
        >
          Forgot password?
        </p>
        <p
          className={`${styles.container__forgot_password} non_selectable`}
          onClick={() => router.push("/register")}
        >
          Register
        </p>
      </div>
      {showResetPassword && (
        <ResetPassword
          loginPage={true}
          setShowResetPassword={setShowResetPassword}
        />
      )}
    </form>
  );
}

export default memo(LoginForm);
