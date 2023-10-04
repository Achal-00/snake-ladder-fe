import { createSlice } from "@reduxjs/toolkit";

const statusMessageLogged = createSlice({
  name: "statusMessageLogged",
  initialState: {
    message: "YOUR TURN",
  },
  reducers: {
    SET_STATUS_MESSAGE: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const { SET_STATUS_MESSAGE } = statusMessageLogged.actions;
export default statusMessageLogged.reducer;
