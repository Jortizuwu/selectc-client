import { createSelector, createSlice } from '@reduxjs/toolkit'
import { authUser } from './thunks'

export const initialState = {
  currentUser: null,
  isLoading: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUser: (state, action) => {
      state.currentUser = action.payload
    },
    removeUser: (state) => {
      state.currentUser = null
    },
  },
  extraReducers: {
    [authUser.pending]: (state) => {
      state.isLoading = true
    },
    [authUser.fulfilled]: (state, action) => {
      state.isLoading = false
      state.currentUser = action.payload
    },
    [authUser.rejected]: (state) => {
      state.isLoading = false
      state.currentUser = null
    },
  },
})

export const { saveUser, removeUser } = userSlice.actions

const selectUser = (state) => state.user

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
)
export const selectIsLoadingUser = createSelector(
  [selectUser],
  (user) => user.isLoading
)

const userReducer = userSlice.reducer

export default userReducer
