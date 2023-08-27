import { pulsationReducer } from './pulsationForCurrentPlayingItem'
import { reducer } from './currentPlayingItemShowReducer'
import { shuffleReducer } from './shuffle'
import { tracksReducer } from './tracksfromapi'
import { tokenReducer } from './tokenFromAPIReducer'
import { loginReducer } from './tokenFromAPIReducer'
import { addToFavoritesReducer } from './getFavTrack'
import { AllFavoriteTracksReducer } from './tracksfromapi'
import { favTrackFromPlaylistReducer } from './getFavTrack'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import thunk from 'redux-thunk'
const rootReducer = combineReducers({
  pulsationReducer,
  reducer,
  shuffleReducer,
  tokenReducer,
  tracksReducer,
  loginReducer,
  addToFavoritesReducer,
  AllFavoriteTracksReducer,
  favTrackFromPlaylistReducer,
})
export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
})
