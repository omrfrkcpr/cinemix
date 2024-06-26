import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const Signup = () => {
  const [rememeberLogin, setRememberLogin] = useState(true);
  const [info, setInfo] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const { email, password, firstName, lastName } = info;

  const { signup } = useAuthContext();
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await signup(email, password, `${firstName} ${lastName}`);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  // console.log(info);

  return (
    <>
      <div className="w-full h-screen text-black dark:text-white">
        <img
          className="hidden sm:block absolute w-full h-full object-cover "
          src="https://images.unsplash.com/photo-1578849278619-e73505e9610f?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="///"
        />
        <div className="dark:bg-black/70 bg-black/30 fixed top-0 left-0 w-full h-screen" />

        <div className="fixed w-full px-4 py-24 z-20">
          <div className="max-w-[450px] h-[550px] mx-auto dark:bg-black/80 bg-white/80 rounded-lg">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-nsans-bold text-center">Sign Up</h1>

              <form
                onSubmit={handleFormSubmit}
                className="w-full flex flex-col py-4 text-white"
              >
                <input
                  className="p-3 my-2 bg-gray-500 rounded focus:outline-none"
                  type="text"
                  placeholder="Enter your firstname"
                  autoComplete="firstName"
                  name="firstName"
                  value={firstName}
                  onChange={handleChange}
                />
                <input
                  className="p-3 my-2 bg-gray-500 rounded focus:outline-none"
                  type="text"
                  placeholder="Enter your lastname"
                  autoComplete="lastName"
                  name="lastName"
                  value={lastName}
                  onChange={handleChange}
                />
                <input
                  className="p-3 my-2 bg-gray-500 rounded focus:outline-none"
                  type="email"
                  placeholder="Enter your email address"
                  autoComplete="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
                <input
                  className="p-3 my-2 bg-gray-500 rounded focus:outline-none"
                  type="password"
                  placeholder="Enter password"
                  autoComplete="current-password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
                <button className="bg-orange-600 py-3 my-4 rounded font-nsans-bold hover:bg-orange-500">
                  Sign Up
                </button>
                <div className="flex justify-between items-center text-gray-600">
                  <p>
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={rememeberLogin}
                      onChange={(e) => setRememberLogin(!rememeberLogin)}
                    />
                    Remember me
                  </p>
                  <p className="cursor-pointer">Need Help?</p>
                </div>
                <p className="my-4">
                  <span className="text-gray-600 mr-2">
                    Already subscribed to Cinemix?
                  </span>
                  <Link
                    to="/login"
                    className="text-orange-500 dark:text-white hover:underline"
                  >
                    Sign In
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
