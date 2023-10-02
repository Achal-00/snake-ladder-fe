import { createSlice } from "@reduxjs/toolkit";

const authUser = createSlice({
  name: "authUser",
  initialState: {
    user: null,
  },
  reducers: {
    LOGIN: (state, action) => {
      state.user = action.payload;
    },
    LOGOUT: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { LOGIN, LOGOUT } = authUser.actions;
export default authUser.reducer;
