import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.webp";
import styles from "./Logo.module.scss";

export default function Logo() {
  return (
    <Link href="/" className={styles.container}>
      <div className={styles.container__div}>
        <Image className={styles.container__img} src={logo} alt="purrma logo" />
      </div>
    </Link>
  );
}
