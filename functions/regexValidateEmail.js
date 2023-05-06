export function regexValidateEmail(email) {
  const rule = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  return email.match(rule);
}
