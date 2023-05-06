export function writeNotification({ record, onlyTitle }) {
  let title;
  let body;

  switch (record.abbr) {
    case "rr":
      title = `Reward released ${record.data[0]}`;
      break;
    case "ta":
      title = `Tokens acquired ${record.data[0]}`;
      break;
  }

  title = title + ` [${record.nId}]`;

  if (onlyTitle) {
    return { title };
  }

  switch (record.abbr) {
    case "rr":
      body = `Purrma's token holders reward for ${record.data[0]} is ${record.data[1]}. Your share is #${record.data[2]} based on your number of tokens. Feel free to claim your reward at any time.`;
      break;
    case "ta":
      body = `You've successfully bought ${
        record.data[0]
      } number of Purrma tokens. Your total number of tokens is ${
        record.data[1]
      }, which may grant you ${((record.data[1] / 100000) * 100).toFixed(
        2
      )}% of every monthly reward distribution. You will be notified each time the reward is released.`;
      break;
  }

  return { title, body };
}
