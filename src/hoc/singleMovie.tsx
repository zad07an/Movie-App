import React, { useEffect } from "react";
import { Params, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/store/store";
import { fetchMovie } from "../redux/features/single-movie-slice";
import { DataProps } from "../utils/models";

interface SingleMovieProps {
  movie: DataProps | null;
  loading: boolean;
  error: boolean;
  imagePath: string;
}

const singleMovie = (Component: React.FC<SingleMovieProps>) => {
  return () => {
    const { movieID }: Readonly<Params<string>> = useParams();
    const dispatch = useAppDispatch();
    const { movie, loading, error } = useAppSelector(state => state.singleMovie);

    const imagePath = "https://image.tmdb.org/t/p/original";

    useEffect(() => {
      if (movieID) {
        dispatch(fetchMovie(movieID));
      }
    }, [dispatch]);

    return <Component movie={movie} loading={loading} error={error} imagePath={imagePath} />;
  };
};

export default singleMovie;
