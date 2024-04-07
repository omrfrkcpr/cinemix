import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { ShareFat } from "@phosphor-icons/react";

const Reset = () => {
  const [email, setEmail] = useState("");

  const { resetPassword } = useAuthContext();
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await resetPassword(email);
      navigate("/login");
      setTimeout(() => {
        setEmail("");
      }, 1000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full h-screen text-black dark:text-white">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src="https://images.unsplash.com/photo-1578849278619-e73505e9610f?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="///"
      />
      <div className="dark:bg-black/70 bg-black/30 fixed top-0 left-0 w-full h-screen" />

      <div className="fixed w-full px-4 py-24 z-20">
        <div className="max-w-[450px] h-[600px] mx-auto dark:bg-black/80 bg-white/80 rounded-lg">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="header-responsive  font-nsans-bold text-center">
              Reset Password
            </h1>

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
              <button className="bg-orange-600 hover:bg-orange-700 py-3 my-6 rounded font-nsans-bold flex items-center justify-center gap-3">
                Send me a reset link{" "}
                <ShareFat size={32} color="#ad0000" weight="fill" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reset;
