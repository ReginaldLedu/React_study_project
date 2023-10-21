import { createSlice } from '@reduxjs/toolkit'
export const initialState = {
  initialState: [],
}

export const GenreFilterSlice = createSlice({
  name: 'genreFilterToolkit',
  initialState,
  reducers: {
    addfilterByGenre: (state, action) => {
      state.initialState.push(action.payload)
    },
    genreDefaultFilter: (state) => {
      state.initialState = []
    },
  },
})

export default GenreFilterSlice.reducer
export const { addfilterByGenre, genreDefaultFilter } = GenreFilterSlice.actions
