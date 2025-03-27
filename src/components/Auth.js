import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Auth = () => {
  const { isAuthenticated, login, logout } = useContext(AuthContext);

  return (
    <button onClick={isAuthenticated ? logout : login} className="btn btn-primary">
      {isAuthenticated ? "Logout" : "Login"}
    </button>
  );
};

export default Auth;
