const Parse = (await import("parse")).default;
import Image from "next/image";
import { useContext } from "react";
import { useRouter } from "next/router";
import { UserCtx, SetUserCtx } from "../../state/UserCtx";
import NotificationsComponent from "../NotificationsComponent";
import PlayButton from "../common/PlayButton";
import contributor from "../../public/assets/user.svg";
import gear from "../../public/assets/gear.svg";
import open_door from "../../public/assets/open_door.svg";
import styles from "./Options.module.scss";

export default function Options({ showInstructions, setShowInstructions }) {
  const router = useRouter();
  const from = router.pathname;
  const user = useContext(UserCtx);
  const setUser = useContext(SetUserCtx);

  async function handleLogOut() {
    Parse.initialize(process.env.NEXT_PUBLIC_APP_ID);
    Parse.serverURL = `${process.env.NEXT_PUBLIC_SERVER_URL}/parse`;

    Parse.User.logOut();
    setUser(null);
  }

  function handleSelect(url) {
    router.push(url);
  }

  return (
    <div className={styles.container}>
      <PlayButton
        isStatic={true}
        showInstructions={showInstructions}
        setShowInstructions={setShowInstructions}
      />
      <NotificationsComponent user={user} />

      <Image
        alt=""
        width={"auto"}
        height={"auto"}
        src={gear}
        onClick={() =>
          router.push({
            pathname: "/workspace/settings",
            query: { from },
          })
        }
        className={
          router.asPath === "/workspace/settings" ? "icon_selected" : undefined
        }
        style={{ cursor: "pointer", height: "1.65rem", width: "fit-content" }}
      />

      <Image
        alt=""
        width={"auto"}
        height={"auto"}
        src={open_door}
        onClick={handleLogOut}
        style={{ cursor: "pointer", height: "1.65rem", width: "fit-content" }}
      />
    </div>
  );
}
