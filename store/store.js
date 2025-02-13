import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from './slices/dashboardSlice';
import processReducer from './slices/processSlice';
import historyReducer from './slices/historySlice';
import maintenanceReducer from './slices/maintenanceSlice';

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    process: processReducer,
    history: historyReducer,
    maintenance: maintenanceReducer,
  },
});