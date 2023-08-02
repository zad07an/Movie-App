import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DataProps } from "../../utils/models";
import axios from "axios";

interface MoviesSliceProps {
  movies: DataProps[];
  loading: boolean;
  error: boolean;
  page: number;
}

const initialState: MoviesSliceProps = {
  movies: [],
  loading: false,
  error: false,
  page: 1
};

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (page: number, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&page=${
          page || 1
        }`
      );
      return data.results;
    } catch (err) {
      rejectWithValue(err);
      throw err;
    }
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    increasePageNumber: state => {
      state.page++;
    }
  },
  extraReducers(builder) {
    builder.addCase(fetchMovies.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, { payload }: PayloadAction<DataProps[]>) => {
      state.loading = false;
      state.movies.push(...payload);
    });
    builder.addCase(fetchMovies.rejected, state => {
      state.error = true;
    });
  }
});

export const { increasePageNumber } = moviesSlice.actions;
export default moviesSlice.reducer;
