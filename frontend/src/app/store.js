import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import messageReducer from '../features/messages/messageSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    message: messageReducer,
  },
});
