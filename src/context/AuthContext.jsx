import React, { createContext, useContext, useEffect, useState } from "react";
import { toastErrorNotify, toastSuccessNotify } from "../helpers/toastNotify";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  signInWithPopup,
  sendPasswordResetEmail,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth, db } from "../auth/firebase";
import { doc, setDoc } from "firebase/firestore";

const AuthContext = createContext();

// context provider

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const userObserver = () => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  };

  useEffect(() => {
    userObserver();
  }, []);

  const signup = async (email, password, displayName) => {
    try {
      //? yeni bir kullanıcı oluşturmak için kullanılan firebase metodu
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      //? kullanıcı profilini güncellemek için kullanılan firebase metodu
      await updateProfile(auth.currentUser, {
        displayName: displayName,
      });

      await setDoc(doc(db, "users", email), {
        favShows: [],
      });

      navigate("/");
      toastSuccessNotify("You are successfully registered!");
      console.log(userCredential);
    } catch (error) {
      toastErrorNotify(error.message);
    }
  };

  const login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
    toastSuccessNotify("Logged in!");
  };

  const signGoogleProvider = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      // await setDoc(doc(db, "users", provider.email), {
      //   favShows: [],
      // });
      navigate("/");
      toastSuccessNotify("Logged in!");
    } catch (err) {
      toastErrorNotify(err.message);
    }
  };

  const logout = () => {
    signOut(auth);
    toastSuccessNotify("Logged out!");
  };

  const resetPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      toastSuccessNotify("Password reset email sent successfully.");
    } catch (error) {
      toastErrorNotify("Error sending password reset email:", error.message);
    } finally {
      navigate("/login");
    }
  };

  const values = {
    user,
    signup,
    login,
    logout,
    resetPassword,
    signGoogleProvider,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

// consumer with custom hook
export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default AuthContextProvider;
