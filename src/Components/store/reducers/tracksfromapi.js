import { configureStore } from '@reduxjs/toolkit'

export const defaultTracks = {
  defaultTracks: [],
}
export const tracksReducer = (state = defaultTracks, action) => {
  switch (action.type) {
    case 'add all tracks':
      return {
        ...state,
        defaultTracks: [...state.defaultTracks, ...action.payload],
      }
    case 'add track':
      return {
        ...state,
        defaultTracks: [...state.defaultTracks, action.payload],
      }

    default:
      return state
  }
}
export const addAllTracks = (payload) => ({ type: 'add all tracks', payload })
export const store = configureStore({ reducer: tracksReducer })

export const defaultAllFavoriteTrack = {
  defaultAllFavoriteTracks: [],
}

export const AllFavoriteTracksReducer = (
  state = defaultAllFavoriteTrack,
  action
) => {
  switch (action.type) {
    case 'get all favorite tracks':
      return {
        ...state,
        defaultAllFavoriteTracks: [...action.payload],
      }
    default:
      return state
  }
}
export const AllFavoriteTracksActionCreator = (payload) => ({
  type: 'get all favorite tracks',
  payload,
})
