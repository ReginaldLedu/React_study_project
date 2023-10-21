import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'


export const defaultToken = {
  defaultTokens: {},
}
export const tokenReducer = (state = defaultToken, action) => {
  switch (action.type) {
    case 'get tokens':
      return {
        ...state,
        defaultTokens: { ...state.defaultTokens, ...action.payload },
      }
    default:
      return state
  }
}
export const getTokenCreator = (payload) => ({ type: 'get tokens', payload })

export const store = configureStore({ reducer: tokenReducer })

export const defaultLogin = {
  defaultLogin: {},
}
export const loginReducer = (state = defaultLogin, action) => {
  switch (action.type) {
    case 'get login':
      return {
        ...state,
        defaultLogin: { ...state.defaultLogin, ...action.payload },
      }
    default:
      return state
  }
}
export const getLoginCreator = (payload) => ({ type: 'get login', payload })
export const loginStore = configureStore({ reducer: tokenReducer })

const initialState = {
  initialState: ' ',
}

export const refreshTokenSlice = createSlice({
  name: 'refreshTokenToolkit',
  initialState,
  reducers: {
    refresh: (state, action) => {
      state.token = action.payload
    },
  },
})

export const { refresh } = refreshTokenSlice.actions
export default refreshTokenSlice.reducer
