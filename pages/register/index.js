import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Alert from "../../components/common/Alert";
import RegistrationForm from "../../components/RegistrationForm";
import styles from "./Register.module.scss";

export default function Register() {
  const router = useRouter();
  const payload = router.query;

  const [registrationData, setRegistrationData] = useState({
    termsAccepted: false,
    isM: payload.user === "mother",
    isS: payload.user === "sister",
    isPas: true,
  });

  const [authErrors, setAuthErrors] = useState({});
  const [messageFromServer, setMessageFromServer] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const pushed = useRef(false);

  useEffect(() => {
    // if a user reloads the page
    setRegistrationData({
      termsAccepted: false,
      isM: payload.user === "mother",
      isS: payload.user === "sister",
    });
  }, [payload]);

  function handlePush(payload) {
    if (!pushed.current) {
      pushed.current = true;

      router.push(payload);
    }
  }

  return (
    <div className={styles.container}>
      {showAlert && (
        <Alert setShowAlert={setShowAlert} message={messageFromServer} />
      )}
      <div className={styles.container__wrapper}>
        <Link className="close" href="/" />
        <h2 className={styles.container__title}>
          <div className="icon icon__waving_hand" />
          Register to continue
        </h2>
        <RegistrationForm
          registrationData={registrationData}
          setRegistrationData={setRegistrationData}
          setMessageFromServer={setMessageFromServer}
          setShowAlert={setShowAlert}
          setAuthErrors={setAuthErrors}
          authErrors={authErrors}
          payload={payload}
          router={router}
          handlePush={handlePush}
        />
      </div>
    </div>
  );
}
