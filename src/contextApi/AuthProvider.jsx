/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState("Hello World");
  const [loading, setLoading] = useState(true);

  const authInfo = { user, loading };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
