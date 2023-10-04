import { createSlice } from '@reduxjs/toolkit'
export const initialState = {
  initialState: [],
}
export const FilteredByGenrePlaylistSlice = createSlice({
  name: 'filteredByGenrePlaylisToolkit',
  initialState,
  reducers: {
    filteredByGenres: (state, action) => {
      state.initialState.push(action.payload)
    },
    filteredByGenresClean: (state) => {
      state.initialState = []
    },
    
  },
})
export const { filteredByGenres, filteredByGenresClean } =
FilteredByGenrePlaylistSlice.actions
export default FilteredByGenrePlaylistSlice.reducer
