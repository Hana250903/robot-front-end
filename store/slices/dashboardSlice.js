import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalStamps: 0,
  errorCount: 0,
  status: 'Đang chờ',
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    updateStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { updateStatus } = dashboardSlice.actions;
export default dashboardSlice.reducer;
