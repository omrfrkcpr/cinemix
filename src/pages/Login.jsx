import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import GoogleIcon from "../assets/GoogleIcon";

const Login = () => {
  const [rememeberLogin, setRememberLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, signGoogleProvider } = useAuthContext();
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="w-full h-screen text-black dark:text-white">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1578849278619-e73505e9610f?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="///"
        />
        <div className="dark:bg-black/70 bg-black/30 fixed top-0 left-0 w-full h-screen" />

        <div className="fixed w-full px-4 py-24 z-20">
          <div className="max-w-[450px] h-[550px] mx-auto dark:bg-black/80 bg-white/80 rounded-lg">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-nsans-bold">Login</h1>

              <form
                onSubmit={handleFormSubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="email"
                  placeholder="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="password"
                  placeholder="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className="bg-orange-600 py-3 my-4 rounded font-nsans-bold">
                  Login
                </button>
                <button
                  onClick={signGoogleProvider}
                  className="btn-danger flex justify-between items-center"
                  type="button"
                >
                  Continue with Google
                  <GoogleIcon color="currentColor" />
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
                <p className="mt-5 mb-2">
                  <span className="text-gray-600 mr-2">New to Cinemix?</span>
                  <Link to="/signup" className="hover:underline">
                    Sign Up
                  </Link>
                </p>
                <p className="mt-0">
                  <span className="text-gray-600 mr-2">Forgot Password?</span>
                  <Link to="/reset" className="hover:underline">
                    Reset
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

export default Login;
