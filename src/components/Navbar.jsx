import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { toastErrorNotify } from "../helpers/toastNotify";

const Navbar = () => {
  const { currentUser, logout } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (err) {
      toastErrorNotify(err.message);
    }
  };

  return (
    <div className="absolute w-full p-4 flex items-center justify-between z-50">
      <Link to="/">
        <h1 className="uppercase text-red-600 font-nsans-bold cursor-pointer text-5xl">
          netflix
        </h1>
      </Link>

      {currentUser?.email ? (
        <div>
          <Link to="/profile">
            <button className="capitalize pr-4">profile</button>
          </Link>

          <button
            onClick={handleLogout}
            className="capitalize bg-red-600 px-6 py-2 rounded cursor-pointer"
          >
            logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="capitalize pr-4">login</button>
          </Link>

          <Link to="/signup">
            <button className="capitalize bg-red-600 px-6 py-2 rounded cursor-pointer">
              sign up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
