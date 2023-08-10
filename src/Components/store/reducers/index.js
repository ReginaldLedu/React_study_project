import { pulsationReducer } from './pulsationForCurrentPlayingItem'
import { reducer } from './currentPlayingItemShowReducer'
import { shuffleReducer } from './shuffle'

//import { defaultPulse } from './pulsationForCurrentPlayingItem'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
const rootReducer = combineReducers({
  pulsationReducer,
  reducer,
  shuffleReducer,
})
export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
})
