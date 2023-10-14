import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  initialState: [],
}

export const LoginPasswordSlice = createSlice({
  name: 'loginPasswordToolkit',
  initialState,
  reducers: {
    loginAndPasswordAddToReducer: (state, action) => {
      state.initialState.push(action.payload)
    },
  },
})

export const { loginAndPasswordAddToReducer } = LoginPasswordSlice.actions
export default LoginPasswordSlice.reducer
