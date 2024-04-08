import React, { useState } from "react";
import { createImageUrl } from "../services/movieServices";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { db } from "../auth/firebase";
import { toastInfoNotify, toastWarnNotify } from "../helpers/toastNotify";

const MovieCol = ({ movie }) => {
  const [like, setLike] = useState(false);
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const { title, backdrop_path, poster_path } = movie;

  const markFavShow = async () => {
    const userEmail = user?.email;

    if (userEmail) {
      const userDoc = doc(db, "users", userEmail);
      setLike(!like);
      await updateDoc(userDoc, {
        favShows: arrayUnion({ ...movie }),
      });
      toastInfoNotify("Added successfully to favorite movies 🎦");
    } else {
      toastWarnNotify("Login to save a movie");
    }
  };

  // console.log(movie);

  const handleIconClick = (e) => {
    e.stopPropagation();
    markFavShow();
  };

  const handleMovieClick = () => {
    navigate(`/details/${movie.id}`, { state: { movie } });
  };

  return (
    <div
      className="relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block rounded-lg overflow-hidden cursor-pointer m-2"
      onClick={handleMovieClick}
    >
      <img
        className="w-full h-40 block object-cover object-top"
        src={createImageUrl(backdrop_path ?? poster_path, "w500")}
        alt={title}
      />

      <div className="absolute top-0 left-0 w-full h-40 bg-black/80 opacity-0 hover:opacity-100">
        <p className="whitespace-normal text-xs md:text-sm text-center flex justify-center items-center h-full font-nsans-bold">
          {movie.title}
        </p>

        <div className="cursor-pointer" onClick={handleIconClick}>
          {like ? (
            <FaHeart
              size={20}
              className="absolute top-2 left-2 text-gray-300"
            />
          ) : (
            <FaRegHeart
              size={20}
              className="absolute top-2 left-2 text-gray-300"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieCol;
