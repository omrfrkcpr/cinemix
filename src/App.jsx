import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRouter from "../src/routers/AppRouter";
import AuthContextProvider from "./context/AuthContext";

const App = () => {
  return (
    <div className="dark:bg-gray-dark-main">
      <AuthContextProvider>
        <AppRouter />
        <ToastContainer />
      </AuthContextProvider>
    </div>
  );
};

export default App;
