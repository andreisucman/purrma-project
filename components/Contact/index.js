import { useState, useRef, useEffect } from "react";
import { sendFormMessage } from "../../functions/sendFormMessage";
import Loading from "../../components/common/Loading";
import SectionTitle from "../common/SectionTitle";
import styles from "./Contact.module.scss";

export default function Contact() {
  const formRef = useRef(null);

  const [subj, setSubj] = useState("");
  const [body, setBody] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submMessage, setSubmMessage] = useState("");

  useEffect(() => {
    if (submMessage) {
      setSubmMessage("Message sent");
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
          title={"Contact us"}
          id="contact"
        />
        <input
          className={styles.form__input}
          type="email"
          name="email"
          placeholder="Your email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className={styles.form__input}
          type="text"
          name="title"
          placeholder="Subject"
          onChange={(e) => setSubj(e.target.value)}
          required
        />
        <textarea
          className={styles.form__message}
          type="text"
          name="message"
          placeholder="Your message"
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
            disable={isLoading}
            type="submit"
          >
            {isLoading ? (
              <Loading customStyle={{ width: "28px", height: "28px" }} />
            ) : (
              <>
                <div className="icon icon__dialog_arrow" />
                Send
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
