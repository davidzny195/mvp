import { configureStore } from '@reduxjs/toolkit';
import userReducer from './state';

const store = configureStore({
  reducer: {
    globalData: userReducer,
  },
});

export default store;
