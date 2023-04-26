export function getPasswordHint(password) {
  if (!password) return;

  const ruleOne = /^(?=(.*[a-z]){1,})/;
  const ruleTwo = /^(?=(.*[A-Z]){1,})/;
  const ruleThree = /^(?=(.*[0-9]){1,})/;

  const onePassed = password.match(ruleOne);
  const twoPassed = password.match(ruleTwo);
  const threePassed = password.match(ruleThree);

  if (!onePassed || !twoPassed || !threePassed) {
    return `Add ${onePassed ? "" : "a lower case"} ${
      twoPassed ? "" : "an upper case"
    } ${threePassed ? "" : "a number"} ${
      !threePassed || !twoPassed || !onePassed
    }`;
  } else {
    return false;
  }
}
