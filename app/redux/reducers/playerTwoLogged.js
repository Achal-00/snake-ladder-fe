import { createSlice } from "@reduxjs/toolkit";

const playerTwoLogged = createSlice({
  name: "playerTwoLogged",
  initialState: {
    score: 1,
  },
  reducers: {
    SET_PLAYER_TWO_SCORE: (state, action) => {
      state.score = action.payload;
    },
  },
});

export const { SET_PLAYER_TWO_SCORE } = playerTwoLogged.actions;
export default playerTwoLogged.reducer;
