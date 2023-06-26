import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: process.env.AWS_SES_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SES_SECRET_KEY,
  region: process.env.AWS_SES_REGION, // e.g., 'us-west-2'
});

const ses = new AWS.SES({ apiVersion: "2010-12-01" });

export default async (req, res) => {
  const { subject, email, message } = req.body;

  const params = {
    Source: process.env.AWS_SES_SENDER, // The sender's email address
    Destination: {
      ToAddresses: [process.env.AWS_SES_SENDER], // The recipient's email address
    },
    ReplyToAddresses: [email],
    Message: {
      Body: {
        Text: {
          Charset: "UTF-8",
          Data: `Message sent at ${email}:\n${message}`,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: `${subject} [project.purrma.com form]`,
      },
    },
  };

  try {
    await ses.sendEmail(params).promise();
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error sending email" });
  }
};
