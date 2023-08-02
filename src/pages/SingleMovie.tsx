import React, { memo } from "react";
import Loader from "../components/ui/Loader";
import singleMovie from "../hoc/singleMovie";

const SingleMovie: React.FC = singleMovie(
  memo(({ movie, loading, error, imagePath }) => {
    if (loading) {
      return (
        <section className="loading">
          <Loader />
        </section>
      );
    }
    if (error) {
      return (
        <section className="error">
          <h2 className=" text-2xl text-gray font-semibold">Sorry, something went wrong.</h2>
        </section>
      );
    }
    return (
      <section className={`custom-container gap-5`}>
        <div className=" w-full grid md:grid-cols-[1fr_2fr] gap-10">
          <div className=" md:w-fit w-[400px] flex justify-self-center overflow-hidden">
            <img src={imagePath + movie?.poster_path} alt="" className=" w-full object-contain" />
          </div>
          <div className=" flex items-start flex-col gap-5">
            <div className=" w-full flex items-start flex-col gap-3">
              <div className=" w-full flex items-center justify-between">
                <div className=" flex items-center gap-4">
                  <h2 className=" text-3xl text-slate-200 font-semibold font-[Montserrat]">
                    {movie?.title}
                  </h2>
                  {movie?.adult ? <p className=" text-xl text-primary-crimson">18+</p> : null}
                </div>
                <div className=" flex items-center gap-2">
                  <p>Language:</p>
                  <span className=" text-primary-blueviolet uppercase font-semibold">
                    {movie?.original_language}
                  </span>
                </div>
              </div>
              <div className=" flex items-center justify-start gap-4">
                <div className=" px-4 py-1 text-sm font-semibold flex items-center justify-center rounded-md text-white bg-green-500">
                  Released
                </div>
                <p className=" text-sm">{movie?.release_date}</p>
              </div>
            </div>
            <div>
              <p>{movie?.overview}</p>
            </div>
            <div className=" flex items-center justify-start gap-4">
              <p>Votes count: {movie?.vote_count}</p>
              <p>Votes average: {movie?.vote_average}</p>
              <p>Popularity: {movie?.popularity}</p>
            </div>
          </div>
        </div>
      </section>
    );
  })
);

export default SingleMovie;
