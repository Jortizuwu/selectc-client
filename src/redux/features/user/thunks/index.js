import { createAsyncThunk } from '@reduxjs/toolkit'

export const authUser = createAsyncThunk('auth', (user, thunkAPI) => {
  try {
    return user
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    console.log(message)
    return thunkAPI.rejectWithValue()
  }
})
