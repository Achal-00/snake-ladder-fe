import { createSlice } from "@reduxjs/toolkit";

const dice = createSlice({
  name: "dice",
  initialState: {
    value: 1,
  },
  reducers: {
    SET_VALUE: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { SET_VALUE } = dice.actions;
export default dice.reducer;
