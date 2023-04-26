import Parse from "parse";
import useSWR from "swr";
import ls from "localstorage-slim";
import ReactLoading from "react-loading";
import { useState, useRef, useContext } from "react";
import { SetUserCtx } from "../../state/UserCtx";
import { useRouter } from "next/router";
import Loading from "../../components/common/Loading";
import { useUpdateUser } from "../../functions/useUpdateUser";
import FormattedTimeBackward from "../../components/common/FormattedTimeBackward";
import styles from "./VerifyEmail.module.scss";

export default function VerifyEmail() {
  const [pageLoading, setPageLoading] = useState(true);
  const [resendLoading, setResendLoading] = useState(false);
  const [requestLinkText, setRequestLinkText] = useState("Request a new link");
  const [untilUnblock, setUntilUnblock] = useState(null);
  const router = useRouter();
  const payload = router.query;
  const pushed = useRef(false);

  const setUser = useContext(SetUserCtx);

  const localUser = ls.get(
    `Parse/${process.env.NEXT_PUBLIC_APP_ID}/currentUser`
  );

  async function checkIfVerified({ setPageLoading, uId, objectId }) {
    function handlePush(payload) {
      if (!pushed.current) {
        pushed.current = true;

        router.push(payload);
      }
    }

    setPageLoading(true);
    if (uId || (localUser && objectId)) {
      Parse.initialize(process.env.NEXT_PUBLIC_APP_ID);
      Parse.serverURL = `${process.env.NEXT_PUBLIC_SERVER_URL}/parse`;

      // if there is a username or objectId start verification
      const response = await Parse.Cloud.run("isEmailVerified");

      // based on the verification either route the user or let him stay on the verification page
      if (response.sts && response.emVer) {
        useUpdateUser({
          user: localUser,
          setUser,
          params: {
            emailVerified: response.emVer,
            isM: response.isM,
            isS: response.isS,
          },
        });

        handlePush({ pathname: "/workspace" });
      } else if (!response.emVer) {
        setPageLoading(false);
      }
    }
  }
  useSWR(
    {
      setPageLoading,
      uId: payload.id,
      objectId: localUser?.objectId,
    },
    checkIfVerified
  );

  async function handleRequestNewLink() {
    if (untilUnblock) return;

    setUntilUnblock(new Date().getTime() + 60000);
    setResendLoading(true);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/parse/apps/${process.env.NEXT_PUBLIC_APP_ID}/resend_verification_email`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: localUser.email }),
      }
    );

    if (response.status === 200 || response.status === 204) {
      setResendLoading(false);
      setRequestLinkText("Success! Link resent.");
    } else {
      setResendLoading(false);
      setRequestLinkText(
        `Error: ${response.message}. Please retry and inform us if the error persists.`
      );
    }

    const timeoutId = setTimeout(() => {
      setRequestLinkText("Request a new link");
      setUntilUnblock(null);
      clearTimeout(timeoutId);
    }, 60000);
  }

  return (
    <div className={styles.container}>
      {pageLoading ? (
        <Loading />
      ) : (
        <div className={styles.container__wrapper}>
          <h2 className={styles.container__title}>Verify your email</h2>
          <div className={`${styles.icon} icon icon__envelope_exclamation`} />
          <fieldset className={styles.fieldset}>
            <legend>Next step:</legend>
            <p className={styles.paragraph}>
              We've sent a verification link to your email. Click on it to verify
              your account.
            </p>
            <p className={styles.paragraph}>
              Remember to check your spam (junk) folder.
            </p>
          </fieldset>
          {resendLoading ? (
            <ReactLoading
              type={"spokes"}
              color={"#252525"}
              height={26}
              width={26}
            />
          ) : (
            <div className={styles.request_new} onClick={handleRequestNewLink}>
              <div className="icon icon__link icon_s" />
              {untilUnblock ? (
                <>
                  Success! link sent (
                  <FormattedTimeBackward time={untilUnblock} />)
                </>
              ) : (
                requestLinkText
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
