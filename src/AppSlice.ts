import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  isMobile: boolean;
};
const initialState: InitialState = {
  isMobile: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    checkScreenWidth: (state, action) => {
      if (action.payload <= 500) {
        state.isMobile = true;
      } else {
        state.isMobile = false;
      }
    },
  },
});

export const { checkScreenWidth } = appSlice.actions;
export default appSlice.reducer;
