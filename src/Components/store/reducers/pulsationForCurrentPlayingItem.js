import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pulsation: 'currentPlay',
}
export const pulsationSlice = createSlice({
  name: 'pulsationToolkit',
  initialState,
  reducers: {
    pulsationStart: (state) => {
      state.pulsation = 'currentPlayPulse'
    },
    pulsationStop: (state) => {
      state.pulsation = 'currentPlay'
    },
  },
})

export const { pulsationStop, pulsationStart } = pulsationSlice.actions
export default pulsationSlice.reducer
