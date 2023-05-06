const Parse = (await import("parse")).default;

export async function getNotifications({ setList }) {
  Parse.initialize(process.env.NEXT_PUBLIC_APP_ID);
  Parse.serverURL = `${process.env.NEXT_PUBLIC_SERVER_URL}/parse`;

  const response = await Parse.Cloud.run("getNotifications");

  if (response.sts) {
    setList(response.msg);
  }
}
