import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store/store";
import { fetchHomeMovies } from "../redux/features/home-slice";
import Loader from "./ui/Loader";
import { Link } from "react-router-dom";
import { BsFillPlayFill } from "react-icons/bs";

const Carousel = () => {
  const [imageIndex, setImageIndex] = useState<number>(0);
  const dispatch = useAppDispatch();
  const { movies, loading } = useAppSelector(state => state.home);

  const imagePath = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    dispatch(fetchHomeMovies());
  }, [dispatch]);

  useEffect(() => {
    const timeoutID = setTimeout(
      () => setImageIndex(prev => (prev >= movies.length - 1 ? 0 : prev + 1)),
      5000
    );

    return () => clearTimeout(timeoutID);
  }, [imageIndex, movies]);

  if (loading) {
    return (
      <section className="loading">
        <Loader />
      </section>
    );
  }
  return (
    <div className=" w-full h-full shadow-md overflow-hidden">
      <div
        className=" w-full h-full transition-all duration-500 whitespace-nowrap"
        style={{ transform: `translate3d(${-imageIndex * 100}%, 0, 0)` } as React.CSSProperties}
      >
        {movies?.map((item, index: number) => (
          <div
            key={item.id}
            className=" w-full h-full inline-block transition-all duration-1000"
            style={{
              background: `url('${imagePath + item?.backdrop_path}')`,
              opacity: imageIndex !== index ? 0.5 : 1,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <div className=" min-w-full min-h-full bg-black bg-opacity-80 hidden lg:flex items-center justify-center flex-col gap-5 p-10">
              <h2 className=" text-4xl font-bold text-center bg-gradient-to-bl from-primary-crimson font-[Montserrat] to-primary-blueviolet bg-clip-text text-transparent whitespace-pre-wrap">
                {item?.title}
              </h2>
              <Link to={`/movie/${item?.id}`}>
                <button className=" py-3 px-8 bg-primary-crimson text-white rounded-xl text-4xl">
                  <BsFillPlayFill />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
