import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  modalIsOpen: false,
  dropMenu: false,
  sidebar: {
    isOpen: false,
    isHover: false,
  },
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    modalAction: (state) => {
      state.modalIsOpen = !state.modalIsOpen
    },
    dropMenuAction: (state) => {
      state.dropMenu = !state.dropMenu
    },
    sibarBarAction: (state) => {
      state.sidebar.isOpen = !state.sidebar.isOpen
    },
  },
})

export const { modalAction, dropMenuAction } = uiSlice.actions

const uiReducer = uiSlice.reducer

export default uiReducer
