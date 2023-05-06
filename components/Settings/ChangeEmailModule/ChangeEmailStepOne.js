const Parse = (await import("parse")).default;
import { useState } from "react";
import { regexValidateEmail } from "../../../functions/regexValidateEmail";
import { sendConfirmationCode } from "../../../functions/sendConfirmationCode";
import styles from "./ChangeEmailStep.module.scss";

export default function ChangeEmailStepOne({ nEml, setNewEmail, setStep }) {
  const [message, setMessage] = useState("Enter your new email");

  async function handleNext() {
    const passed = regexValidateEmail(nEml);

    /* check if the new email is taken */
    Parse.initialize(process.env.NEXT_PUBLIC_APP_ID);
    Parse.serverURL = `${process.env.NEXT_PUBLIC_SERVER_URL}/parse`;
    const response = await Parse.Cloud.run("checkIfEmailIsTaken", {
      nEml,
    });

    if (response && response.msg === "tkn") {
      return setMessage("This email is already taken. Choose another email.");
    }

    if (passed) {
      sendConfirmationCode({ setStep });
    } else {
      setMessage("Enter a valid email");
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h3 className={styles.subtitle} style={{ paddingRight: "2rem" }}>
          {message}
        </h3>
      </div>
      <input
        type="email"
        value={nEml}
        placeholder="Enter your new email"
        onChange={(e) => setNewEmail(e.target.value)}
        className={styles.input}
      />
      <button type="submit" className={styles.button} onClick={handleNext}>
        Next
        <div className="icon icon__arrow_right icon_s" />
      </button>
    </div>
  );
}
