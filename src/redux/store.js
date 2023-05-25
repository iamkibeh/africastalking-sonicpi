import { configureStore } from '@reduxjs/toolkit'

import userReducer from './features/authSlice/authSlice'

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    user: userReducer,
  },
})
