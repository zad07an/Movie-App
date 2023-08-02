import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DataProps } from "../../utils/models";
import axios from "axios";

interface CarouselSliceProps {
  data: DataProps[];
  loading: boolean;
  error: boolean;
}

const initialState: CarouselSliceProps = {
  data: [],
  loading: false,
  error: false
};

export const fetchData = createAsyncThunk("carousel/fetchData", async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}`
    );
    return await data.result;
  } catch (err) {
    rejectWithValue(err);
  }
});

const carouselSlice = createSlice({
  name: "carousel",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchData.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, { payload }: PayloadAction<DataProps[]>) => {
      state.data = payload;
      state.loading = false;
    });
    builder.addCase(fetchData.rejected, state => {
      state.error = true;
    });
  }
});

export const {} = carouselSlice.actions;
export default carouselSlice.reducer;
