import React from "react";
import { useAuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { toastWarnNotify } from "../helpers/toastNotify";

const ProtectedRouter = ({ children, path = "" }) => {
  const { user } = useAuthContext();

  if (!user) {
    toastWarnNotify("You need to log in to access details page.");
    return <Navigate to="/" />;
  }

  if (path === "/profile") {
    return user ? children : <Navigate to="/" />;
  }

  if (path.includes("/details/")) {
    return children;
  }

  return children;
};

export default ProtectedRouter;
