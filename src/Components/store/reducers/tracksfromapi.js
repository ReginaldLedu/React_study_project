import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  initialState: [],
}
export const allTracksSlice = createSlice({
  name: 'allTracksToolkit',
  initialState,
  reducers: {
    allTracks: (state, action) => {
      state.initialState = action.payload
    },
  },
})
export const { allTracks, allTracksDis } = allTracksSlice.actions
export default allTracksSlice.reducer

export const defaultAllFavoriteTrack = {
  defaultAllFavoriteTracks: [],
}
