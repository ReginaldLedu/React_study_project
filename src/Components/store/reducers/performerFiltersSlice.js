import { createSlice } from '@reduxjs/toolkit'
export const initialState = {
  initialState: [],
}

export const FilterSlice = createSlice({
  name: 'filterToolkit',
  initialState,
  reducers: {
    filterByPerformer: (state, action) => {
      state.initialState.push(action.payload)
    },
    defaultFilter: (state) => {
      state.initialState = []
    },
  },
})

export default FilterSlice.reducer
export const { filterByPerformer, defaultFilter } = FilterSlice.actions
