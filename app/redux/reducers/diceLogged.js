import { createSlice } from "@reduxjs/toolkit";

const diceLogged = createSlice({
  name: "diceLogged",
  initialState: {
    value: 1,
  },
  reducers: {
    SET_VALUE: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { SET_VALUE } = diceLogged.actions;
export default diceLogged.reducer;
