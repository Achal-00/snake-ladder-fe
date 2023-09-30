import { createSlice } from "@reduxjs/toolkit";

const playerOne = createSlice({
  name: "playerOne",
  initialState: {
    score: 1,
  },
  reducers: {
    SET_PLAYER_ONE_SCORE: (state, action) => {
      state.score = action.payload;
    },
  },
});

export const { SET_PLAYER_ONE_SCORE } = playerOne.actions;
export default playerOne.reducer;
