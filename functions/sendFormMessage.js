export async function sendFormMessage({
  subj,
  body,
  email,
  setIsLoading,
  setMessage,
}) {
  setIsLoading(true);

  const data = {
    subject: subj,
    message: body,
    email,
  };

  console.log("BOYD IS", data);
  const res = await fetch("/api/sendMail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  console.log("RES IS", res);

  if (res.status === 200) {
    setMessage("Message sent");
    setIsLoading(false);
  } else {
    setMessage(`Error while sending email.`);
  }
}
