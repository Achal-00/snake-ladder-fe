import { createSlice } from "@reduxjs/toolkit";

const processStatus = createSlice({
  name: "processStatus",
  initialState: {
    status: false,
  },
  reducers: {
    SET_PROCESS_STATUS: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { SET_PROCESS_STATUS } = processStatus.actions;
export default processStatus.reducer;
