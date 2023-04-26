import { useState, useEffect, createContext } from "react";

export const UserCtx = createContext();
export const SetUserCtx = createContext();

function useGetCurrentUser() {
  const user = ls.get(`Parse/${process.env.NEXT_PUBLIC_APP_ID}/currentUser`);
  return user;
}

export function UserCtxProvider({ children }) {
  const [user, setUser] = useState();
  const stringifiedUser = JSON.stringify(useGetCurrentUser());

  useEffect(() => {
    setUser(useGetCurrentUser());
  }, [stringifiedUser]);

  return (
    <SetUserCtx.Provider value={setUser}>
      <UserCtx.Provider value={user}>{children}</UserCtx.Provider>
    </SetUserCtx.Provider>
  );
}
