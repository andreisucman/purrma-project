const Parse = (await import("parse")).default;
import { useState } from "react";
import { regexValidateNumber } from "../../../functions/regexValidateEmail";
import Alert from "../../common/Alert";
import styles from "./ChangeEmailStep.module.scss";
import { showModal } from "../../../functions/showModal";

export default function ChangeEmailStepTwo({
  setStep,
  nEml,
  currentEmail,
  cCode,
  setConfirmationCode,
}) {
  const [errorMessage, setErrorMessage] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  async function handleNext() {
    const passed = regexValidateNumber(cCode);

    if (passed) {
      Parse.initialize(process.env.NEXT_PUBLIC_APP_ID);
      Parse.serverURL = `${process.env.NEXT_PUBLIC_SERVER_URL}/parse`;
      const response = await Parse.Cloud.run("changeEmail", {
        nEml,
        cCode,
      });

      if (response && response.sts) {
        setStep(3);
      } else {
        if (response.msg === "inc") {
          setErrorMessage(
            "Your confirmation code is incorrect. Enter the latest from the email."
          );
          showModal({ setShow: setShowAlert, val: true, block: "b" });
        } else {
          setErrorMessage(
            `Error: ${response.message}. Please retry and inform us if the error persists.`
          );
          showModal({ setShow: setShowAlert, val: true, block: "b" });
        }
      }
    } else {
      setErrorMessage("Incorrect confirmation code. Try again.");
      const timeoutId = setTimeout(() => {
        setErrorMessage(null);
        clearTimeout(timeoutId);
      }, 2000);
    }
  }

  return (
    <div className={styles.container}>
      {showAlert && <Alert message={errorMessage} setShowAlert={setShowAlert} />}
      <div className={styles.text}>
        <h3 className={styles.subtitle}>Enter the confirmation code</h3>
        <p className={styles.msg} style={{ paddingRight: "2rem" }}>
          We've sent an email with a confirmation code to <b>{currentEmail}</b>.
        </p>
        <p className={styles.msg}>Enter it the field below:</p>
      </div>
      <input
        required
        type="text"
        value={cCode}
        max={6}
        placeholder="Enter your confirmation code"
        onChange={(e) => setConfirmationCode(e.target.value)}
        className={styles.input}
      />
      <button className={styles.button} onClick={handleNext}>
        Next
        <div className="icon icon__arrow_right icon_s" />
      </button>
    </div>
  );
}
