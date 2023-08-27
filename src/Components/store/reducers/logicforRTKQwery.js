import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { configureStore } from '@reduxjs/toolkit'

export const tracksApi = createApi({
  reducerPath: 'tracksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://painassasin.online/catalog/track/all/',
  }),
  endpoints: (build) => ({ getTracks: build.query({ query: () => 'tracks' }) }),
})

export const { useGetTracksQuery } = tracksApi
export const tracksStore = configureStore({
  reducer: {
    [tracksApi.reducerPath]: tracksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tracksApi.middleware),
})
