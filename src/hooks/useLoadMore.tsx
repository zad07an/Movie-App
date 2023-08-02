import { useEffect, useCallback } from "react";
import { useAppDispatch } from "../redux/store/store";
import { fetchMovies, increasePageNumber } from "../redux/features/movies-slice";

const useLoadMore = (page: number) => {
  const dispatch = useAppDispatch();

  const handleLoadMore = useCallback(() => {
    dispatch(increasePageNumber());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchMovies(page));
  }, [dispatch, page]);

  return handleLoadMore;
};

export default useLoadMore;
