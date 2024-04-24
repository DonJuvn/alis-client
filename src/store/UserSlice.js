import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: localStorage.getItem('userEmail') ?? null,
  isAuthorized: localStorage.getItem('isAuthorized') ?? false,
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
    setIsAuthorized: (state, action) => {
      state.isAuthorized = action.payload;
      console.log(action.payload);
      localStorage.setItem('isAuthorized', action.payload);
    },
  },
});

export const { setEmail, setAccessToken, isAdmin, setIsAuthorized } =
  userSlice.actions;

export default userSlice.reducer;
