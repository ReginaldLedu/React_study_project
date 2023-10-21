import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  initialState: [],
}
export const allFavoritesSlice = createSlice({
  name: 'allFavoritesToolkit',
  initialState,
  reducers: {
    allFavoritesFromAPI: (state, action) => {
      state.initialState = action.payload
    },
    allFavoritesDis: (state, action) => {
      state.initialState = state.initialState.filter(function (item) {
        return item.id !== action.payload
      })
    },
    allFavoritesLike: (state, action) => {
      state.initialState.push(action.payload)
      console.log(state.initialState)
    },
    forEmptyTokens: () => {
      return []
    },
  },
})
export const {
  allFavoritesFromAPI,
  allFavoritesDis,
  allFavoritesLike,
  forEmptyTokens,
} = allFavoritesSlice.actions
export default allFavoritesSlice.reducer
