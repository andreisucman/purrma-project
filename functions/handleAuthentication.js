import Parse from "parse";
import { showModal } from "./showModal";
import { validateForm } from "./validateForm";

export async function handleAuthentication({
  setMessageFromServer,
  setAuthErrors,
  setShowAlert,
  authErrors,
  authType,
  setUser,
  data,
  handlePush,
  payload,
  passwordHint,
  disableBtn,
  setDisableBtn,
}) {
  if (passwordHint || disableBtn) return;
  Parse.initialize(process.env.NEXT_PUBLIC_APP_ID);
  Parse.serverURL = `${process.env.NEXT_PUBLIC_SERVER_URL}/parse`;

  // validate on the client
  const validation = validateForm({
    data,
    formType: authType === "registration" ? "registration" : "login",
    setAuthErrors,
    authErrors,
  });

  if (!validation) return;

  try {
    // router query to redirect if there is a next step
    let response;

    // if registration
    if (authType === "registration") {
      setDisableBtn(true);

      response = await Parse.Cloud.run("registerUser", data);

      if (response.code === 0) {
        await Parse.User.logIn(data.email, data.passOne);
        const user = Parse.User.current();
        setUser(user);

        handlePush({
          pathname: "/verify-email",
          query: {
            uId: user.objectId,
            next: "/workspace",
          },
        });
      } else {
        setDisableBtn(false);

        if (response.code === 1) {
          setMessageFromServer("Error: Passwords don't match. Try again.");
        }

        if (response.code === 2) {
          setMessageFromServer("Error: Please provide a name.");
        }

        if (response.code === 3) {
          setMessageFromServer(
            "Error: An account already exists for this email."
          );
        }

        if (response.code === 4) {
          setMessageFromServer(
            "Error: Password is missing. Provide a password."
          );
        }

        if (response.code === 5) {
          setMessageFromServer("Error: Email is missing. Provide your email.");
        }

        if (response.code === 6) {
          setMessageFromServer(
            "Error: You must agree with the terms of service to register."
          );
        }
        // display the result of failed server validation
        showModal({ setShow: setShowAlert });
      }
    } else {
      // if login
      try {
        await Parse.User.logIn(data.email, data.password);
        const user = Parse.User.current();
        setUser(user);

        if (!user) return;

        const isVerified = user.get("emailVerified");

        // check if the logging user has verified their email and if she has any next steps
        if (isVerified) {
          if (payload?.next) {
            handlePush({ pathname: payload.next });
          } else {
            handlePush({ pathname: "/workspace" });
          }
        } else {
          handlePush({
            pathname: "/verify-email",
            query: { uId: user.id, next: payload.next },
          });
        }
      } catch (err) {
        setDisableBtn(false);
        if (err.message === "Invalid username/password.") {
          setMessageFromServer(
            "Error: Email or password is incorrect, or a user with this email doesn't exist."
          );
          showModal({ setShow: setShowAlert });
        }
      }
    }
  } catch (err) {
    setDisableBtn(false);
    setMessageFromServer(
      `Error: ${err.message}. Please retry and inform us if the error persists.`
    );
    showModal({ setShow: setShowAlert });
  }
}
