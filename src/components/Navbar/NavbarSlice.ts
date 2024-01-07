import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  isMobile: boolean;
};
const initialState: InitialState = {
  isMobile: false,
};

const navSlice = createSlice({
  name: "nav",
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

export const { checkScreenWidth } = navSlice.actions;
export default navSlice.reducer;
