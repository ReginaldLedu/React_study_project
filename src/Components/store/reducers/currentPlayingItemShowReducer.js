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
      //state.initialState = action.payload.name
      state.initialState = action.payload
    },
    setCurrentPlayStop: (state) => {
      state.initialState = 'stop'
    },
  },
})
export const { setCurrentPlay } = currentPlaySlice.actions
export default currentPlaySlice.reducer
