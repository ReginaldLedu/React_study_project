import { pulsationSlice } from './pulsationForCurrentPlayingItem'
//import { currentPlayShowReducer } from './currentPlayingItemShowReducer'
import { currentPlaySlice } from './currentPlayingItemShowReducer'
import { shuffleReducer } from './shuffle'
//import { tracksReducer } from './tracksfromapi'
import { tokenReducer } from './tokenFromAPIReducer'
import { loginReducer } from './tokenFromAPIReducer'
import { addToFavoritesReducer } from './getFavTrack'
import { allFavoritesSlice } from './favoriteTracksFromAPI'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { refreshTokenSlice } from './tokenFromAPIReducer'
import { allTracksSlice } from './tracksfromapi'
import { renderedTracksSlice } from './renderedTracks'
import { selectionPlaylistSlice } from './selectionPlaylist'
import { FilterSlice } from './performerFiltersSlice'
import { FilteredPlaylistSlice } from './filteredByPerformerPlaylist'
import { GenreFilterSlice } from './genreFilterSlice'
import { FilteredByGenrePlaylistSlice } from './filteredByGenrePlaylist'
//import { AllFavoriteTracksReducer } from './tracksfromapi'

const rootReducer = combineReducers({
  filteredByGenrePlaylisToolkit: FilteredByGenrePlaylistSlice.reducer,
  genreFilterToolkit: GenreFilterSlice.reducer,
  filteredPlaylistToolkit: FilteredPlaylistSlice.reducer,
  filterToolkit: FilterSlice.reducer,
  selectionPlaylistToolkit: selectionPlaylistSlice.reducer,
  renderedTracksToolkit: renderedTracksSlice.reducer,
  allTracksToolkit: allTracksSlice.reducer,
  refreshTokenToolkit: refreshTokenSlice.reducer,
  pulsationToolkit: pulsationSlice.reducer,
  shuffleReducer,
  currentPlayingToolkit: currentPlaySlice.reducer,
  tokenReducer,
  //tracksReducer,
  //AllFavoriteTracksReducer,
  loginReducer,
  addToFavoritesReducer,
  allFavoritesToolkit: allFavoritesSlice.reducer,
})
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})
