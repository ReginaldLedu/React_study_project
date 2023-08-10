import { configureStore } from '@reduxjs/toolkit'
export const defaultRange = {
  defaultRange: 0,
}
export const shuffleReducer = (state = defaultRange, action) => {
  switch (action.type) {
    case 'shuffle':
      return { ...state, defaultRange: state.defaultRange + 1 }
    case 'default':
      return { ...state, defaultRange: state.defaultRange }
    default:
      return state
  }
}
export const store = configureStore({ reducer: shuffleReducer })
