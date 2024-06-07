import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user: {},
  isAuthorized: false,
  isLoading: true,
  access_token: null,
};

export const authorizeUser = createAsyncThunk(
  'user/authorize',
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

    return { ...response.data, access_token: user.access_token };
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(authorizeUser.fulfilled, (state, action) => {
      const { id, given_name = '', email = '', access_token } = action.payload;
      state.isLoading = false;
      state.isAuthorized = true;
      state.user = {
        id: id,
        email: email,
        given_name: given_name,
      };
      state.access_token = access_token;
    });
  },
});

export const { setEmail, setAccessToken, isAdmin, setIsAuthorized } = userSlice.actions;

export default userSlice.reducer;
