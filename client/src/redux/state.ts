import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: { userId: 1 },
};

const globalDataSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { updateCurrentUser } = globalDataSlice.actions;
export default globalDataSlice.reducer;
