import { configureStore } from '@reduxjs/toolkit'

export const defaultState = {
  currentPosition: -1,
}
export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'forward':
      return { ...state, currentPosition: state.currentPosition + 1 }
    case 'back':
      return { ...state, currentPosition: state.currentPosition - 1 }
    case 'default':
      return { ...state, currentPosition: 0 }
    case 'samePlace':
      return { ...state, currentPosition: state.currentPosition }
    default:
      return state
  }
}
export const store = configureStore({ reducer: reducer })
