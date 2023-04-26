import ls from "localstorage-slim";

export async function useUpdateUser({ user, setUser, params }) {
  // params must be an object with keys and values that need to be updated
  try {
    if (typeof window !== undefined) {
      ls.set(
        `Parse/${process.env.NEXT_PUBLIC_APP_ID}/currentUser`,
        Object.assign({}, user, params)
      );
    }
    setUser(Object.assign({}, user, params));
  } catch (err) {
    console.log(err);
  }
}
