import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  initialState: ' ',
}
export const logPassSlice = createSlice({
  name: 'logPassToolkit',
  initialState,
  reducers: {
    logPass: (state, action) => {
      state.initialState = action.payload
    },
  },
})

export const { logPass } = logPassSlice.actions
export default logPassSlice.reducer
