import { configureStore } from '@reduxjs/toolkit'
export const favTrackFromPlaylist = {
  defaultFavTrackFromPlaylist: [],
}
export const favTrackFromPlaylistReducer = (
  state = favTrackFromPlaylist,
  action
) => {
  switch (action.type) {
    case 'add to favorites from playlist':
      return {
        ...state,
        defaultFavTrackFromPlaylist: [
          ...state.defaultFavTrackFromPlaylist,
          action.payload,
        ],
      }
    default:
      return state
  }
}
export const favTrackFromPlaylistActionCreator = (payload) => ({
  type: 'add to favorites',
  payload,
})

export const defaultFavTrack = {
  defaultFavTracks: {},
}
export const addToFavoritesReducer = (state = defaultFavTrack, action) => {
  switch (action.type) {
    case 'add to favorites':
      return {
        ...state,
        defaultFavTracks: { ...state.defaultFavTracks, ...action.payload },
      }
    case 'remove from favorites':
      return {
        ...state,
        defaultFavTracks: { ...state.defaultFavTracks, ...action.payload },
      }

    default:
      return state
  }
}
export const addToFavoritesActionCreator = (payload) => ({
  type: 'add to favorites',
  payload,
})
export const removeFromFavoritesActionCreator = (payload) => ({
  type: 'remove from favorites',
  payload,
})
export const store = configureStore({ reducer: addToFavoritesReducer })
