import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import homeReducer from "../features/home-slice";
import singleMovieReducer from "../features/single-movie-slice";
import moviesReducer from "../features/movies-slice";
import carouselReducer from "../features/carousel-slice";
import searchReducer from "../features/search-slice";

const store = configureStore({
  reducer: {
    home: homeReducer,
    movies: moviesReducer,
    singleMovie: singleMovieReducer,
    carousel: carouselReducer,
    search: searchReducer
  }
});

export default store;

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
