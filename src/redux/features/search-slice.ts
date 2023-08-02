import { createSlice } from "@reduxjs/toolkit";

interface SearchSliceProps {
  isOpen: boolean;
}

const initialState: SearchSliceProps = {
  isOpen: false
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    onOpen: state => {
      state.isOpen = true;
    },
    onClose: state => {
      state.isOpen = false;
    }
  }
});

export const { onOpen, onClose } = searchSlice.actions;
export default searchSlice.reducer;
