import { useRouter } from "next/router";
import { showModal } from "../../../functions/showModal";
import styles from "./TermsCheckbox.module.scss";

export default function TermsCheckbox({
  isTermAcc,
  onChange,
  termsName,
  setShowTerms,
}) {
  const router = useRouter();

  function handleClick() {
    if (setShowTerms) {
      showModal({ setShow: setShowTerms, block: "b" });
    } else {
      router.push("/legal/terms");
    }
  }

  return (
    <div
      className={
        isTermAcc
          ? `${styles.container} ${styles.container_error}`
          : styles.container
      }
    >
      <label htmlFor="agree_with_terms" className={styles.label}>
        <input
          className={styles.label__checkbox_input}
          id="agree_with_terms"
          type="checkbox"
          onChange={onChange}
        />
        <span>{"I accept the"}</span>
      </label>
      <span onClick={handleClick} className={styles.label__link}>
        {termsName}
      </span>
    </div>
  );
}
