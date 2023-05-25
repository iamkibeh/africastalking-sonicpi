import { createSlice } from '@reduxjs/toolkit'
import { getUserAsync } from '../authActions'

const initialState = {
  user: null,
  isAuth: false,
  isLoading: false,
  error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // setUser: (state, action) => {
    //   state.isLoading = false
    //   state.isAuth = true
    //   state.user = action.payload
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserAsync.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getUserAsync.fulfilled, (state, action) => {
      state.isLoading = false
      state.isAuth = true
      state.user = action.payload
    })

    builder.addCase(getUserAsync.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    })
  },
})

export const { setUser } = authSlice.actions

export default authSlice.reducer
