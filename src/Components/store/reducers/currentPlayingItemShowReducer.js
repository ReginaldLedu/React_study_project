//import { configureStore } from '@reduxjs/toolkit'

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  initialState: {},
}
export const currentPlaySlice = createSlice({
  name: 'currentPlayingToolkit',
  initialState,
  reducers: {
    setCurrentPlay: (state, action) => {
      state.initialState = action.payload
    },
    setCurrentPlayStop: (state) => {
      state.initialState = 'stop'
    },
    setDefaultPosition: (state) => {
      state.initialState = {}
    },
  },
})
export const { setCurrentPlayStop, setCurrentPlay, setDefaultPosition } =
  currentPlaySlice.actions
export default currentPlaySlice.reducer
