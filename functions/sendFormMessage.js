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

  const res = await fetch("/api/sendEmail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (res.status === 200) {
    setMessage("Message sent");
    setIsLoading(false);
  } else {
    setMessage(`Error while sending email.`);
  }
}
