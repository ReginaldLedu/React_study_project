import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  initialState: [],
}

export const renderedTracksSlice = createSlice({
  name: 'renderedTracksToolkit',
  initialState,
  reducers: {
    renderTracks: (state, action) => {
      state.initialState = action.payload
    },
    getDefault: (state) => {
      state.initialState = []
    },
    shuffled: (state) => {
      state.initialState = state.initialState.sort(() => Math.random() - 0.5)
    },
  },
})

export const { renderTracks, getDefault, shuffled } =
  renderedTracksSlice.actions
export default renderedTracksSlice.reducer
