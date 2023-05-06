const Parse = (await import("parse")).default;

export async function sendFormMessage({
  subj,
  body,
  email,
  setIsLoading,
  setMessage,
}) {
  Parse.initialize(process.env.NEXT_PUBLIC_APP_ID);
  Parse.serverURL = `${process.env.NEXT_PUBLIC_SERVER_URL}/parse`;

  setIsLoading(true);

  const response = await Parse.Cloud.run("sendFormMessage", {
    subj,
    body,
    email,
  });

  if (response.sts) {
    setMessage("Message sent");
    setIsLoading(false);
  } else {
    setMessage(
      `Error: ${response.message}. Please retry and inform us if the error persists.`
    );
  }
}
