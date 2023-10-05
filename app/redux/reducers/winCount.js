import { createSlice } from "@reduxjs/toolkit";

const winCount = createSlice({
  name: "winCount",
  initialState: {
    value: 0,
  },
  reducers: {
    SET_WIN_COUNT: (state, action) => {
      state.value = action.payload;
    },
    INCREMENT_WIN_COUNT: (state) => {
      state.value += 1;
    },
  },
});

export const { SET_WIN_COUNT, INCREMENT_WIN_COUNT } = winCount.actions;
export default winCount.reducer;
