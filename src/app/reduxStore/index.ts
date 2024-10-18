
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import dataReducer from './slices/dataSlice';
import { initializeAuth } from './actions/authActions';

const store = configureStore({
  reducer: {
    auth: authReducer,
    data: dataReducer,
  },
});
store.dispatch(initializeAuth());
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

