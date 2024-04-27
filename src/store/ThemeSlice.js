import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedTheme: 'dark',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.selectedTheme = action.payload;
      state.themes.palette.mode = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
