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

/*export const AllFavoriteTracksReducer = (
  state = defaultAllFavoriteTrack,
  action
) => {
  switch (action.type) {
    case 'get all favorite tracks':
      return {
        ...state,
        defaultAllFavoriteTracks: [...action.payload],
      }
    case 'for empty tokens':
      return {
        state,
      }
    default:
      return state
  }
}
export const EmptyTokenFavTracks = (state) => ({
  type: 'for empty tokens',
  state,
})
export const AllFavoriteTracksActionCreator = (payload) => ({
  type: 'get all favorite tracks',
  payload,
})*/
