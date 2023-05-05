import { useRouter } from "next/router";
import { useEffect } from "react";
import Loading from "../../components/common/Loading";
import styles from "./Legal.module.scss";

export default function Legal() {
  const router = useRouter();

  useEffect(() => {
    router.push("/legal/terms");
  }, []);

  return (
    <div className={styles.index}>
      <Loading customStyle={{ transform: "translateY(-5%)" }} />
    </div>
  );
}
