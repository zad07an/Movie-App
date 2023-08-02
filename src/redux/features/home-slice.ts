import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { DataProps } from "../../utils/models";
import axios from "axios";

interface HomeSliceProps {
  movies: DataProps[];
  loading: boolean;
  error: boolean;
}

const initialState: HomeSliceProps = {
  movies: [],
  loading: false,
  error: false
};

export const fetchHomeMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&page=1`
      );
      return data.results;
    } catch (err) {
      rejectWithValue(err);
      throw err;
    }
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchHomeMovies.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchHomeMovies.fulfilled, (state, { payload }: PayloadAction<DataProps[]>) => {
      state.movies = payload;
      state.loading = false;
    });
    builder.addCase(fetchHomeMovies.rejected, state => {
      state.error = true;
    });
  }
});

export const {} = homeSlice.actions;
export default homeSlice.reducer;
