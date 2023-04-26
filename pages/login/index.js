import Link from "next/link";
import { useState, useRef } from "react";
import { useRouter } from "next/router";
import Alert from "../../components/common/Alert";
import LoginForm from "../../components/LoginForm";
import styles from "./Login.module.scss";

export default function Login() {
  const router = useRouter();
  const payload = router.query;

  const pushed = useRef(false);
  const [loginData, setLoginData] = useState({});
  const [authErrors, setAuthErrors] = useState({});
  const [messageFromServer, setMessageFromServer] = useState({});
  const [showAlert, setShowAlert] = useState(false);

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
          Login to continue
        </h2>
        <LoginForm
          loginData={loginData}
          setLoginData={setLoginData}
          setMessageFromServer={setMessageFromServer}
          setAuthErrors={setAuthErrors}
          setShowAlert={setShowAlert}
          authErrors={authErrors}
          handlePush={handlePush}
          payload={payload}
          router={router}
        />
      </div>
    </div>
  );
}
