import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const event = createSlice({
  name: "event",
  initialState,
  reducers: {
    loadEvent: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { loadEvent } = event.actions;
export default event.reducer;
