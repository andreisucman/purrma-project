import { useState } from "react";
import ChangeEmailStepOne from "./ChangeEmailStepOne";
import ChangeEmailStepTwo from "./ChangeEmailStepTwo";
import ChangeEmailStepThree from "./ChangeEmailStepThree";
import styles from "./ChangeEmailModule.module.scss";

export default function ChangeEmailModule({ setShowModule, user }) {
  const [step, setStep] = useState(1);
  const [nEml, setNewEmail] = useState("");
  const [cCode, setConfirmationCode] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.container__wrapper}>
        <div className="close" onClick={() => setShowModule(false)} />
        {step === 1 && <ChangeEmailStepOne nEml={nEml} setNewEmail={setNewEmail} setStep={setStep} uId={user.objectId} />}
        {step === 2 && (
          <ChangeEmailStepTwo
            uId={user.objectId}
            setStep={setStep}
            nEml={nEml}
            currentEmail={user.email}
            cCode={cCode}
            setConfirmationCode={setConfirmationCode}
          />
        )}
        {step === 3 && <ChangeEmailStepThree user={user} nEml={nEml} setShow={setShowModule} />}
      </div>
    </div>
  );
}
