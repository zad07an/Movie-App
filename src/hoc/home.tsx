import React, { useEffect, ReactNode, useMemo } from "react";
import { fetchHomeMovies } from "../redux/features/home-slice";
import { useAppDispatch, useAppSelector } from "../redux/store/store";
import Movie from "../components/Movie";

interface HomeProps {
  memoizedMovies: ReactNode;
  moviesLength: number;
  loading: boolean;
  error: boolean;
}

const home = (Component: React.FC<HomeProps>) => {
  return () => {
    const { movies, loading, error } = useAppSelector(state => state.home);
    const dispatch = useAppDispatch();

    const memoizedMovies = useMemo(() => {
      return movies?.map(movie => <Movie key={movie.id} movie={movie} />);
    }, [movies]);

    useEffect(() => {
      dispatch(fetchHomeMovies());
    }, [dispatch]);

    return (
      <Component
        memoizedMovies={memoizedMovies}
        moviesLength={movies?.length}
        loading={loading}
        error={error}
      />
    );
  };
};

export default home;
