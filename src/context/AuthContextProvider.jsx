import React, { useCallback, useState } from "react";
import AuthContext from "./AuthContext";

const AuthContextProvider = ({ children }) => {
  const [email, setEmail] = useState(null);
  const login = useCallback((userEmail) => {
    setEmail(userEmail);
  }, []);

  const logout = useCallback(() => {
    setEmail(null);
  },[])

  return (
    <AuthContext.Provider value={{ email, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
