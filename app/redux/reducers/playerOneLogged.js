import { createSlice } from "@reduxjs/toolkit";

const playerOneLogged = createSlice({
  name: "playerOneLogged",
  initialState: {
    score: 1,
  },
  reducers: {
    SET_PLAYER_ONE_SCORE: (state, action) => {
      state.score = action.payload;
    },
  },
});

export const { SET_PLAYER_ONE_SCORE } = playerOneLogged.actions;
export default playerOneLogged.reducer;
