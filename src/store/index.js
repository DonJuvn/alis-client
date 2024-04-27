import { configureStore } from '@reduxjs/toolkit';

import userSlice from './UserSlice';
import ThemeSlice from './ThemeSlice';

export default configureStore({
  reducer: {
    user: userSlice,
    theme: ThemeSlice,
  },
});
