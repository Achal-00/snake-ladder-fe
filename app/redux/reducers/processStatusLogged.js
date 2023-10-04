import { createSlice } from "@reduxjs/toolkit";

const processStatusLogged = createSlice({
  name: "processStatusLogged",
  initialState: {
    status: false,
  },
  reducers: {
    SET_PROCESS_STATUS: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { SET_PROCESS_STATUS } = processStatusLogged.actions;
export default processStatusLogged.reducer;
