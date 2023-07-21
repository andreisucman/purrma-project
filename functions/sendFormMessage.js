import i18n from "i18next";

export async function sendFormMessage({
  subj,
  body,
  email,
  setIsLoading,
  setMessage,
}) {
  setIsLoading(true);
  const { t } = i18n;

  const data = {
    subject: subj,
    message: body,
    email,
  };

  const res = await fetch("/api/sendMail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (res.status === 200) {
    setMessage(t("Contact:7"));
    setIsLoading(false);
  } else {
    setMessage(t("Contact:8"));
  }
}
