import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DataProps } from "../../utils/models";
import axios from "axios";

interface SingleMovieProps {
  movie: DataProps | null;
  loading: boolean;
  error: boolean;
}

const initialState: SingleMovieProps = {
  movie: null,
  loading: false,
  error: false
};

export const fetchMovie = createAsyncThunk(
  "singleMovie/fetchMovie",
  async (movieID: string, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieID}?api_key=${import.meta.env.VITE_API_KEY}`
      );
      return data;
    } catch (err) {
      rejectWithValue(err);
      throw err;
    }
  }
);

const singleMovieSlice = createSlice({
  name: "singleMovie",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchMovie.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchMovie.fulfilled, (state, { payload }: PayloadAction<DataProps>) => {
      state.movie = payload;
      state.loading = false;
    });
    builder.addCase(fetchMovie.rejected, state => {
      state.error = true;
    });
  }
});

export const {} = singleMovieSlice.actions;
export default singleMovieSlice.reducer;
