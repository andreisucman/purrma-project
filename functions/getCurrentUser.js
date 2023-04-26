import ls from "localstorage-slim";

export function useIsLoggedIn() {
  let user;
  user = ls.get(`Parse/${process.env.NEXT_PUBLIC_APP_ID}/currentUser`);

  return user !== undefined && user !== null;
}

export function useGetCurrentUser() {
  const user = ls.get(`Parse/${process.env.NEXT_PUBLIC_APP_ID}/currentUser`);
  return user;
}

export function useGetCurrentAcc() {
  const acc = ls.get(`Purrma/${process.env.NEXT_PUBLIC_APP_ID}/currentAcc`);
  return acc;
}
