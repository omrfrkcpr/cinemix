import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { toastErrorNotify, toastWarnNotify } from "../helpers/toastNotify";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const SearchForm = ({ setShow }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();

  const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${
    import.meta.env.VITE_TMDB_KEY
  }&query=`;

  const getSearchMovie = async () => {
    try {
      const { data } = await axios(searchUrl + searchTerm);
      navigate(`/details/${data.results[0].id}`);
      if (!location.pathname.includes("/details")) {
        setShow(false);
      }
      setSearchTerm("");
    } catch (error) {
      toastErrorNotify(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user && searchTerm.trim()) {
      getSearchMovie();
    } else if (!user) {
      toastWarnNotify("Please log in");
    } else {
      toastWarnNotify("Please enter a movie name!");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex justify-center p-2 gap-2">
      <input
        type="search"
        name="query"
        className="w-[200px] h-10 my-1 rounded-md px-4 text-black outline-none"
        placeholder="Search a movie..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="text-black dark:text-white bg-slate-200 dark:bg-slate-900 rounded-md px-2">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
