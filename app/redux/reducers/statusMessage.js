import { createSlice } from "@reduxjs/toolkit";

const statusMessage = createSlice({
  name: "statusMessage",
  initialState: {
    message: "YOUR TURN",
  },
  reducers: {
    SET_STATUS_MESSAGE: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const { SET_STATUS_MESSAGE } = statusMessage.actions;
export default statusMessage.reducer;
