import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  modal: {
    modalIsOpen: false,
    title: '',
  },
  dropMenu: false,
  collapse: { click: false, hover: false },
  isCollapse: false,
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    modalAction: (state, action) => {
      state.modal.modalIsOpen = !state.modal.modalIsOpen
      state.modal.title = action.payload
    },
    dropMenuAction: (state) => {
      state.dropMenu = !state.dropMenu
    },
    onToggleCollapse: (state) => {
      state.collapse = {
        ...state.collapse,
        click: !state.collapse.click,
      }
      state.isCollapse = state.collapse.click && !state.collapse.hover
    },
    handleHoverEnter: (state) => {
      state.collapse = { ...state.collapse, hover: false }
      state.isCollapse = !state.collapse.hover
    },
    handleHoverLeave: (state) => {
      state.collapse = { ...state.collapse, hover: true }
      state.isCollapse = !state.collapse.hover
    },
    handleRest: (state) => {
      state.collapse = { click: false, hover: false }
      state.isCollapse = state.collapse.click && !state.collapse.hover
    },
  },
})

export const {
  modalAction,
  dropMenuAction,
  handleHoverEnter,
  handleHoverLeave,
  handleRest,
  onToggleCollapse,
} = uiSlice.actions

const uiReducer = uiSlice.reducer

export default uiReducer
