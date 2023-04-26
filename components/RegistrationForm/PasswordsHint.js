import styles from "./PasswordsHint.module.scss";

export default function PasswordsHint({ text }) {
  return (
    <div className={`${styles.hint} selected`}>
      <div className="icon icon__triangle_exclamation icon_xs" />
      {text}
    </div>
  );
}
