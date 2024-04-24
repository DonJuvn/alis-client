import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isLoading: false,
};

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    whoAmi: state => {
      return state.user;
    },
  },
});

export const { setUser, whoAmi } = userSlice.actions;

export default userSlice.reducer;
