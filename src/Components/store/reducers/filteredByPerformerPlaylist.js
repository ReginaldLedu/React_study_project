import { createSlice } from '@reduxjs/toolkit'
export const initialState = {
  initialState: [],
}
export const FilteredPlaylistSlice = createSlice({
  name: 'filteredPlaylistToolkit',
  initialState,
  reducers: {
    filteredByPerformers: (state, action) => {
      state.initialState.push(action.payload)
    },
    filteredByPerformersClean: (state) => {
      state.initialState = []
    },
    
  },
})
export const { filteredByPerformers, filteredByPerformersClean } =
  FilteredPlaylistSlice.actions
export default FilteredPlaylistSlice.reducer
