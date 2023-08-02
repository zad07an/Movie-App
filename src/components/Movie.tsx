import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { DataProps } from "../utils/models";
import useAnimatedComponent from "../hooks/useAnimatedComponent";

interface MovieProps {
  movie: DataProps;
}

const Movie: React.FC<MovieProps> = ({ movie }) => {
  const imagePath = "https://image.tmdb.org/t/p/original";
  const movieRef = useRef<HTMLAnchorElement | null>(null);

  useAnimatedComponent(movieRef, "opacity-100");

  return (
    <Link
      ref={movieRef}
      to={`/movie/${movie.id}`}
      className=" min-h-fit text-center cursor-pointer overflow-hidden border border-primary-gray rounded-md pb-3 opacity-0 shadow-md transition-all duration-500"
    >
      <div className=" w-full overflow-hidden">
        <img
          src={imagePath + movie?.poster_path}
          alt="Image"
          className=" w-full h-full object-contain"
        />
      </div>
      <div className=" min-h-16 flex items-center justify-center px-3 ">
        <p className=" text-xl font-semibold">{movie?.title}</p>
      </div>
    </Link>
  );
};

export default Movie;
