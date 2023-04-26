import styles from "./ShowPassword.module.scss";

export default function ShowPassword({ showPassword, setShowPassword }) {
  return (
    <>
      {showPassword ? (
        <div
          className={`${styles.icon} icon icon__eye_crossed icon_nav`}
          onClick={() => setShowPassword((prev) => !prev)}
        />
      ) : (
        <div
          className={`${styles.icon} icon icon__eye icon_nav`}
          onClick={() => setShowPassword((prev) => !prev)}
        />
      )}
    </>
  );
}
