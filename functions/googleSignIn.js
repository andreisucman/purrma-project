import Parse from "parse";

export async function googleSignIn({ isM, isLog, setIsLoadingG }) {
  Parse.initialize(process.env.NEXT_PUBLIC_APP_ID);
  Parse.serverURL = `${process.env.NEXT_PUBLIC_SERVER_URL}/parse`;

  setIsLoadingG(true);

  const link = await Parse.Cloud.run("googleSignIn", { isLog, isM });

  window.location.href = link;
}
