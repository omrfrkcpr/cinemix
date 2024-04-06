import React from "react";
import Navbar from "../components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Reset from "../pages/Reset";
import Profile from "../pages/Profile";
import MovieDetail from "../pages/MovieDetail";
import NotFound from "../pages/NotFound";
import ProtectedRouter from "./ProtectedRouter";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset" element={<Reset />} />
        <Route
          path="/profile"
          element={
            <ProtectedRouter>
              <Profile />
            </ProtectedRouter>
          }
        />
        <Route
          path="/details/:id"
          element={
            <ProtectedRouter>
              <MovieDetail />
            </ProtectedRouter>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRouter;
