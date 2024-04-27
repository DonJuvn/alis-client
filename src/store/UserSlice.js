import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user: {},
  isAuthorized: false,
  isLoading: false,
  access_token: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(authorizeUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(authorizeUser.fulfilled, (state, action) => {
        const { id, given_name = '', email = '' } = action.payload;
        state.isLoading = false;
        state.isAuthorized = true;
        console.log(action.payload);
        state.user = {
          id: id,
          email: email,
          given_name: given_name,
        };
      });
  },
});

export const authorizeUser = createAsyncThunk(
  'user/authorize',
  // eslint-disable-next-line no-unused-vars
  async (user, thunkAPI) => {
    const response = await axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
      {
        headers: {
          Authorization: `Bearer ${user.access_token}`,
          Accept: 'application/json',
        },
      },
    );

    return response.data;
  },
);

export const { setEmail, setAccessToken, isAdmin, setIsAuthorized } =
  userSlice.actions;

export default userSlice.reducer;
