import { combineReducers } from '@reduxjs/toolkit'

import uiReducer from './features/ui/uiSlice'
import userReducer from './features/user/userSlice'

const rootReducer = combineReducers({
  ui: uiReducer,
  user: userReducer
})

export default rootReducer
