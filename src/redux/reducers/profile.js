import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
};

const profile = createSlice({
  name: "profile",
  initialState,
  reducers: {
    datas: (state, action) => {
      state.data = action.payload;
    },
    removeData: (state) => {
      state.data = null;
    },
  },
});

export const { datas, removeData } = profile.actions;
export default profile.reducer;
