import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  modalIsOpen: false
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    modalAction: (state) => {
      state.modalIsOpen = !state.modalIsOpen
    }
  }
})

export const { modalAction } = uiSlice.actions

const uiReducer = uiSlice.reducer

export default uiReducer
