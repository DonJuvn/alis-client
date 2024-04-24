import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: localStorage.getItem('userEmail') ?? null,
  isLoading: false,
  access_token: localStorage.getItem('accessToken') ?? null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.user = action.payload;
      localStorage.setItem('userEmail', action.payload);
    },
    setAccessToken: (state, action) => {
      state.access_token = action.payload;
      console.log(action.payload);
      localStorage.setItem('accessToken', action.payload);
    },
    isAdmin: (state, action) => {
      state.access_token = action.payload;
      console.log(action.payload);
      localStorage.setItem('isAdmin', action.payload);
    },
  },
});

export const { setEmail, setAccessToken, isAdmin } = userSlice.actions;

export default userSlice.reducer;
