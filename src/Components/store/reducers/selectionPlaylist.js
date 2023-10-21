import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  initialState: [],
}
export const selectionPlaylistSlice = createSlice({
  name: 'selectionPlaylistToolkit',
  initialState,
  reducers: {
    getSelectionPlaylist: (state, action) => {
      state.initialState = action.payload
    },
  },
})

export const { getSelectionPlaylist } = selectionPlaylistSlice.actions
export default selectionPlaylistSlice.reducer
