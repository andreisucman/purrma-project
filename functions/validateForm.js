export function validateForm({ formType, data, setAuthErrors, authErrors }) {
  if (formType === "login") {
    if (!data.email || !data.password) {
      if (!data.email) {
        setAuthErrors(Object.assign({}, authErrors, { email: true }));
        return false;
      }
      if (!data.password) {
        setAuthErrors(Object.assign({}, authErrors, { password: true }));
        return false;
      }

      setTimeout(() => {
        setAuthErrors({});
      }, 3000);
      return false;
    }
    return true;
  } else {
    if (
      !data.name ||
      !data.termsAccepted ||
      !data.passOne ||
      !data.passTwo ||
      !data.email
    ) {
      if (!data.name) {
        setAuthErrors({ name: true });
        return false;
      }
      if (!data.email) {
        setAuthErrors({ email: true });
        return false;
      }
      if (!data.passOne) {
        setAuthErrors({ passOne: true });
        return false;
      }
      if (!data.passTwo) {
        setAuthErrors({ passTwo: true });
        return false;
      }
      if (!data.termsAccepted) {
        setAuthErrors({ terms: true });
        return false;
      }

      const timeoutId = setTimeout(() => {
        setAuthErrors({});
        clearTimeout(timeoutId);
      }, 3000);
    } else {
      if (data.passOne !== data.passTwo) {
        setAuthErrors({ passOne: true, passTwo: true });
        return false;
      }
    }
    return true;
  }
}
