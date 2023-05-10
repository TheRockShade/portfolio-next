import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface GlobalState {
  isMenuOpen: boolean;
}

const initialState: GlobalState = {
  isMenuOpen: false,
};

export const globalSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { toggleMenu } = globalSlice.actions;

export default globalSlice.reducer;
