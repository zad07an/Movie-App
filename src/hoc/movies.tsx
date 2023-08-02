import React, { useMemo, ReactNode } from "react";
import { useAppSelector } from "../redux/store/store";
import useLoadMore from "../hooks/useLoadMore";
import Movie from "../components/Movie";

interface MoviesProps {
  memoizedMovies: ReactNode;
  moviesLength: number;
  loading: boolean;
  error: boolean;
  handleLoadMore: () => void;
}

const movies = (Component: React.FC<MoviesProps>) => {
  return () => {
    const { movies, loading, error, page } = useAppSelector(state => state.movies);

    const handleLoadMore = useLoadMore(page);

    const memoizedMovies = useMemo(() => {
      return movies?.map(movie => <Movie key={movie.id} movie={movie} />);
    }, [movies]);

    return (
      <Component
        memoizedMovies={memoizedMovies}
        moviesLength={movies?.length}
        loading={loading}
        error={error}
        handleLoadMore={handleLoadMore}
      />
    );
  };
};

export default movies;
