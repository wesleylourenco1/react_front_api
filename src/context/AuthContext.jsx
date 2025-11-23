import React, { createContext, useState } from "react";
import { API_URL, ROUTES } from "../routes/apiRoutes";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(localStorage.getItem("user_token"));
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("user_data")));

  const login = (token, data) => {
    localStorage.setItem("user_token", token);
    localStorage.setItem("user_data", JSON.stringify(data));
    setUserToken(token);
    setUserData(data);
  };

  const logout = async () => {
    try {
      await fetch(`${API_URL}${ROUTES.LOGOUT}`, {
        method: "POST",
        headers: { "Authorization": `Bearer ${userToken}` },
      });
    } catch (err) {
      console.error("Erro de rede:", err);
    } finally {
      localStorage.removeItem("user_token");
      localStorage.removeItem("user_data");
      setUserToken(null);
      setUserData(null);
    }
  };

  return (
    <AuthContext.Provider value={{ userToken, userData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
