import { allTracks } from './tracksfromapi'

import { getTokenCreator } from './tokenFromAPIReducer'
//import { refreshTokens } from './tokenFromAPIReducer'
import { getLoginCreator } from './tokenFromAPIReducer'
import { addToFavoritesActionCreator } from './getFavTrack'
import { removeFromFavoritesActionCreator } from './getFavTrack'
import { allFavoritesFromAPI } from './favoriteTracksFromAPI'
//import { AllFavoriteTracksActionCreator } from './tracksfromapi'
import { refresh } from './tokenFromAPIReducer'
import { getSelectionPlaylist } from './selectionPlaylist'
import { forEmptyTokens } from './favoriteTracksFromAPI'

export const fetchTracks = () => {
  return async function (dispatch) {
    const response = await fetch(
      'https://skypro-music-api.skyeng.tech/catalog/track/all/'
    )
    const data = await response.json()
    dispatch(allTracks(data))
    console.log(data)
  }
}
export const fetchSelectionTracks = (id) => {
  return async function (dispatch) {
    const response = await fetch(
      `https://skypro-music-api.skyeng.tech/catalog/selection/${id}/`
    )
    const data = await response.json()
    dispatch(getSelectionPlaylist(data.items))
    console.log(data)
  }
}

export const fetchLogin = (login, password) => {
  return function (dispatch) {
    fetch('https://skypro-music-api.skyeng.tech/user/login/', {
      method: 'POST',
      body: JSON.stringify({
        email: login,
        password: password,
      }),
      headers: {
        // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
        'content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((json) => dispatch(getLoginCreator(json)))
      .then((response) => console.log(response))
  }
}

export const fetchaAccessToken = (login, password) => {
  return function (dispatch) {
    fetch('https://skypro-music-api.skyeng.tech/user/token/', {
      method: 'POST',
      body: JSON.stringify({
        email: login,
        password: password,
      }),
      headers: {
        // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
        'content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((json) => dispatch(getTokenCreator(json)))
      .then((response) => console.log(response))
  }
}

export function fetchRefreshTokens(refreshToken) {
  return function (dispatch) {
    fetch('https://skypro-music-api.skyeng.tech/user/token/refresh/', {
      method: 'POST',
      body: JSON.stringify({
        refresh: refreshToken,
      }),
      headers: {
        // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
        'content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((json) => dispatch(refresh(json.access)))
      .then((response) => console.log(response))
  }
}

export function fetchRemoveFromFavorites(id, token) {
  return function (dispatch) {
    fetch(
      `https://skypro-music-api.skyeng.tech/catalog/track/${id}/favorite/`,
      {
        method: 'DELETE',
        body: JSON.stringify({
          id: id,
        }),
        headers: {
          'content-type': 'application/json',
          Authorization: token,
        },
      }
    )
      .then((response) => response.json())
      .then((json) => dispatch(removeFromFavoritesActionCreator(json)))
      .then((response) => console.log(response))
  }
}

export function fetchGetAllFavorites(token) {
  return function (dispatch) {
    fetch('https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/', {
      headers: {
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((json) =>
        json.code === 'token_not_valid'
          ? dispatch(forEmptyTokens)
          : dispatch(allFavoritesFromAPI(json))
      )
      .catch((error) => {
        dispatch(forEmptyTokens)
        alert(error)
      })
  }
}
/*export const fetchGetAllFavorites = (token) => {
  return async function (dispatch) {
    const response = await fetch(
      'https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/',
      {
        headers: {
          Authorization: token,
        },
      }
    )
    const data = await response.json()
    typeof data === 'object'
      ? dispatch(forEmptyTokens)
      : dispatch(AllFavoriteTracksActionCreator(data))
    console.log(data)
  }
}*/

export function addToFavorites(id, token) {
  return function (dispatch) {
    fetch(
      `https://skypro-music-api.skyeng.tech/catalog/track/${id}/favorite/`,
      {
        method: 'POST',
        body: JSON.stringify({
          id: id,
        }),
        headers: {
          'content-type': 'application/json',
          Authorization: token,
        },
      }
    )
      .then((response) => response.json())
      .then((json) => dispatch(addToFavoritesActionCreator(json)))
      .then((data) => console.log(data))
  }
}

export async function fetchRegister(loginState, passwordState) {
  const response = await fetch(
    'https://skypro-music-api.skyeng.tech/user/signup/',
    {
      method: 'POST',
      body: JSON.stringify({
        email: loginState,
        password: passwordState,
        username: loginState,
      }),
      headers: {
        // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
        'content-type': 'application/json',
      },
    }
  )
  const data = await response.json()
  console.log(data)
  return data
}
