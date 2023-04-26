import Parse from "parse";
import { useState, useContext, useEffect } from "react";
import { SetUserCtx } from "../../state/UserCtx";
import { googleSignIn } from "../../functions/googleSignIn";
import Loading from "../common/Loading";
import { getUTCstring } from "../../functions/getUTCstring";
import { showModal } from "../../functions/showModal";
import styles from "./SocialAuth.module.scss";

export default function SocialAuth({
  router,
  payload,
  isLog,
  setMessage,
  setShowAlert,
}) {
  const setUser = useContext(SetUserCtx);
  const [isLoadingG, setIsLoadingG] = useState(false);
  const [isLoadingFb, setIsLoadingFb] = useState(false);

  async function saveAndRedirect() {
    const user = Parse.User.current();
    setUser(user);

    router.push("/workspace");
  }

  useEffect(() => {
    /* Google auth */
    Parse.initialize(process.env.NEXT_PUBLIC_APP_ID);
    Parse.serverURL = `${process.env.NEXT_PUBLIC_SERVER_URL}/parse`;

    if (payload && (payload.id_token || payload.errcode)) {
      const { errcode } = payload;

      if (errcode) {
        if (Number(errcode) === 7) {
          setMessage(
            "Error: This Google account is not registered with Purrma. Try registration first."
          );

          const tId = setTimeout(() => {
            const pathname = router.pathname;
            router.push(pathname);
            clearTimeout(tId);
          }, 4000);

          return showModal({ setShow: setShowAlert });
        }
      } else {
        async function loginWithGoogle() {
          if (isLoadingG) return;

          try {
            await Parse.User.logInWith("google", {
              authData: {
                id: payload.id,
                id_token: payload.id_token,
                access_token: payload.access_token,
              },
            });

            saveAndRedirect();
          } catch (err) {
            setIsLoadingG(false);
          }
        }
        loginWithGoogle();
      }
    }
  }, [payload]);

  function loginWithFb() {
    if (isLoadingFb) return;
    if (typeof FB === undefined) return;

    setIsLoadingFb(true);

    FB.login(
      (loRes) => {
        /* Authenticate and get session token */
        const { authResponse } = loRes;
        const { userID, accessToken, data_access_expiration_time } =
          authResponse;

        /* Use the session token to get user details */
        FB.api("/me?fields=id,name,email,permissions", async (res) => {
          const { name, email } = res;

          /* Check if registered before with Facebook*/
          const exists = await Parse.Cloud.run("userExists", {
            email,
            auth: "f",
          });

          if (exists) {
            /* if registered before log in */
            await Parse.User.logInWith("facebook", {
              authData: {
                id: userID,
                access_token: accessToken,
                expiration_date: getUTCstring(data_access_expiration_time),
              },
            });

            saveAndRedirect();
          } else {
            /* if didn't register before - register */
            if (!isLog) {
              await Parse.Cloud.run("registerUser", {
                name,
                email,
                isM: payload.user === "mother",
                isS: payload.user === "sister",
                authData: {
                  id: userID,
                  access_token: accessToken,
                  expiration_date: getUTCstring(data_access_expiration_time),
                  email,
                  name,
                },
                auth: "f",
              });

              /* and then log in */
              await Parse.User.logInWith("facebook", {
                authData: {
                  id: userID,
                  access_token: accessToken,
                  expiration_date: getUTCstring(data_access_expiration_time),
                },
              });

              saveAndRedirect();
            } else {
              setMessage(
                "Error: This Facebook account is not registered with Purrma. Try registration first."
              );
              setIsLoadingFb(false);
              return showModal({ setShow: setShowAlert });
            }
          }
        });
      },
      {
        scope: "public_profile,email",
      }
    );
  }

  useEffect(() => {
    /* Facebook auth */
    Parse.initialize(process.env.NEXT_PUBLIC_APP_ID);
    Parse.serverURL = `${process.env.NEXT_PUBLIC_SERVER_URL}/parse`;

    /* Load Facebook SDK */
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");

    window.fbAsyncInit = () => {
      FB.init({
        appId: process.env.NEXT_PUBLIC_FB_APP_ID,
        status: true, // check Facebook Login status
        cookie: true, // enable cookies to allow Parse to access the session
        xfbml: true, // initialize Facebook social plugins on the page
        version: process.env.NEXT_PUBLIC_FB_GRAPH_API_V,
      });
    };
  }, []);

  return (
    <div className={styles.container}>
      <button
        type="submit"
        className={styles.button}
        onClick={() =>
          googleSignIn({
            isM: payload.type === "mother" ? true : false,
            isLog,
            setIsLoadingG,
          })
        }
      >
        {isLoadingG ? (
          <Loading
            customStyle={{ width: "25px", height: "25px", color: "#252526" }}
          />
        ) : (
          <>
            <div className="icon icon__go icon_sm" />
            {isLog ? "Log in with Google" : "Register with Google"}
          </>
        )}
      </button>
      <button type="submit" className={styles.button} onClick={loginWithFb}>
        {isLoadingFb ? (
          <Loading
            customStyle={{ width: "25px", height: "25px", color: "#252526" }}
          />
        ) : (
          <>
            <div className="icon icon__fb icon_sm" />{" "}
            {isLog ? "Log in with Facebook" : "Register with Facebook"}
          </>
        )}
      </button>
    </div>
  );
}
