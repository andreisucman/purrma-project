export function getPasswordsMatchHint(passOne, passTwo) {
  if (!passOne || !passTwo) return false;

  if (passOne !== passTwo) {
    return "Passwords don't match";
  } else {
    return false;
  }
}
