import { createSlice } from "@reduxjs/toolkit";

const playerTwo = createSlice({
  name: "playerTwo",
  initialState: {
    score: 1,
  },
  reducers: {
    SET_PLAYER_TWO_SCORE: (state, action) => {
      state.score = action.payload;
    },
  },
});

export const { SET_PLAYER_TWO_SCORE } = playerTwo.actions;
export default playerTwo.reducer;
