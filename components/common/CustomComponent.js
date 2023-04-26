import Parse from "parse";
import { useRouter } from "next/router";

export default function CustomComponent({ Component, pageProps }) {
  const router = useRouter();
  Parse.initialize(process.env.NEXT_PUBLIC_APP_ID);
  Parse.serverURL = `${process.env.NEXT_PUBLIC_SERVER_URL}/parse`;

  try {
  } catch (err) {
    if (err.code === Parse.Error.INVALID_SESSION_TOKEN) {
      Parse.User.logOut().then(() => router.push("/login"));
    } else {
      setErrorMessage(
        `Error: ${err.code}. Please try signing out and signing in again. Inform us if that doesn't help.`
      );
    }
  }

  return <Component {...pageProps} />;
}
