import { configureStore } from '@reduxjs/toolkit'

export const defaultPulse = {
  pulsation: 'currentPlay',
}
export const pulsationReducer = (state = defaultPulse, action) => {
  switch (action.type) {
    case 'pulsatioinStart':
      return { ...state, pulsation: 'currentPlayPulse' }
    case 'pulsationStop':
      return { ...state, pulsation: 'currentPlay' }
    default:
      return state
  }
}

export const pulsationStore = configureStore({ reducer: pulsationReducer })
