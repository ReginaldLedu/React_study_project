import { pulsationSlice } from './pulsationForCurrentPlayingItem'
import { currentPlayShowReducer } from './currentPlayingItemShowReducer'
import { shuffleReducer } from './shuffle'
import { tracksReducer } from './tracksfromapi'
import { tokenReducer } from './tokenFromAPIReducer'
import { loginReducer } from './tokenFromAPIReducer'
import { addToFavoritesReducer } from './getFavTrack'
import { AllFavoriteTracksReducer } from './tracksfromapi'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
//import { addToFavoritesSlice } from './getFavTrack'

//import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  //favoritesToolkit: addToFavoritesSlice.reducer,
  currentPlayShowReducer,
  pulsationToolkit: pulsationSlice.reducer,
  shuffleReducer,
  tokenReducer,
  tracksReducer,
  loginReducer,
  addToFavoritesReducer,
  AllFavoriteTracksReducer,
})
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),

  /*middleware: [thunk],*/
})
