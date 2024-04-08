import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { toastErrorNotify } from "../helpers/toastNotify";
import Switch from "./Switch";
import SearchForm from "./SearchForm";
import { MagnifyingGlass } from "@phosphor-icons/react";

const Navbar = () => {
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (err) {
      toastErrorNotify(err.message);
    }
  };

  return (
    <div className="absolute w-full p-4 flex items-center justify-between z-50 text-white h-[80px] top-0 ">
      <Link to="/">
        <h1 className="text-2xl shadow-md shadow-white md:text-3xl lg:text-4xl xl:text-5xl uppercase text-orange-600 font-nsans-bold cursor-pointer z-50 p-2 bg-slate-900">
          cinemix
        </h1>
      </Link>

      {user?.email ? (
        <div className="flex justify-center items-center">
          {show && <SearchForm setShow={setShow} />}
          {show === false && (
            <MagnifyingGlass
              size={32}
              color="#ea580c"
              className="cursor-pointer hidden lg:block hover:scale-125 me-2"
              onClick={() => setShow(true)}
            />
          )}

          <div className="flex flex-wrap items-center justify-between">
            <Switch />
            <Link to="/profile">
              <button className="text-responsive capitalize px-2 lg:px-3 py-1  bg-slate-400 rounded cursor-pointer me-2 hover:bg-slate-600">
                profile
              </button>
            </Link>

            <button
              onClick={handleLogout}
              className="text-responsive capitalize bg-orange-600 px-2 lg:px-3 py-1 rounded cursor-pointer"
            >
              logout
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <Switch />
          <Link to="/login">
            <button className="text-responsive capitalize px-2 lg:px-3 py-1  bg-slate-400 rounded cursor-pointer me-2 hover:bg-slate-600">
              login
            </button>
          </Link>

          <Link to="/signup">
            <button className="text-responsive capitalize bg-orange-600 hover:bg-orange-700 px-2 lg:px-3 py-1 rounded cursor-pointer text-white">
              sign up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
