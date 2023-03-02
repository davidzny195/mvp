import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  currentUser: { userId: 1 },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { updateCurrentUser } = userSlice.actions;
export default userSlice.reducer;
