const Parse = (await import("parse")).default;

export async function sendConfirmationCode({ setStep }) {
  Parse.initialize(process.env.NEXT_PUBLIC_APP_ID);
  Parse.serverURL = `${process.env.NEXT_PUBLIC_SERVER_URL}/parse`;

  const response = await Parse.Cloud.run("sendConfirmationCode");

  if (response && response.sts) {
    setStep((prev) => prev + 1);
  }
}