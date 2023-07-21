import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { sendFormMessage } from "../../functions/sendFormMessage";
import Loading from "../../components/common/Loading";
import SectionTitle from "../common/SectionTitle";
import styles from "./Contact.module.scss";

export default function Contact() {
  const formRef = useRef(null);
  const { t } = useTranslation();

  const [subj, setSubj] = useState("");
  const [body, setBody] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submMessage, setSubmMessage] = useState("");

  useEffect(() => {
    if (submMessage) {
      setSubmMessage(t("Contact:1"));
      formRef.current.reset();

      setTimeout(() => {
        setSubmMessage("");
      }, 3500);
    }
  }, [submMessage]);

  function sendMessage(e) {
    e.preventDefault();

    sendFormMessage({
      subj,
      body,
      email,
      setIsLoading,
      setMessage: setSubmMessage,
    });
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={sendMessage} ref={formRef}>
        <SectionTitle
          icon={"icon icon__envelope icon_m"}
          title={t("Contact:2")}
          id="contact"
        />
        <input
          className={styles.form__input}
          type="email"
          name="email"
          placeholder={t("Contact:3")}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className={styles.form__input}
          type="text"
          name="title"
          placeholder={t("Contact:4")}
          onChange={(e) => setSubj(e.target.value)}
          required
        />
        <textarea
          className={styles.form__message}
          type="text"
          name="message"
          placeholder={t("Contact:5")}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>
        <div className={styles.form__submit_wrapper}>
          {submMessage && (
            <div className={styles.form__submission_message}>
              <div className="icon icon__checkmark" />
              {submMessage}
            </div>
          )}
          <button
            className={styles.form__submit}
            disabled={isLoading ? true : false}
            type="submit"
          >
            {isLoading ? (
              <Loading customStyle={{ width: "28px", height: "28px" }} />
            ) : (
              <>
                <div className="icon icon__dialog_arrow" />
                {t("Contact:6")}
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
