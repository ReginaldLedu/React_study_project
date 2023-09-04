import { addAllTracks } from './tracksfromapi'
import { getTokenCreator } from './tokenFromAPIReducer'
import { getLoginCreator } from './tokenFromAPIReducer'
import { addToFavoritesActionCreator } from './getFavTrack'
import { removeFromFavoritesActionCreator } from './getFavTrack'
import { AllFavoriteTracksActionCreator } from './tracksfromapi'

export const fetchTracks = () => {
  return function (dispatch) {
    fetch('https://painassasin.online/catalog/track/all/')
      .then((response) => response.json())
      .then((json) => dispatch(addAllTracks(json)))
  }
}
export const fetchLogin = (login, password) => {
  return function (dispatch) {
    fetch('https://painassasin.online/user/login/', {
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
      .then((data) => console.log(data))
  }
}

export const fetchaAccessToken = (login, password) => {
  return function (dispatch) {
    fetch('https://painassasin.online/user/token/', {
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

export function fetchRemoveFromFavorites(id, token) {
  return function (dispatch) {
    fetch(`https://painassasin.online/catalog/track/${id}/favorite/`, {
      method: 'DELETE',
      body: JSON.stringify({
        id: id,
      }),
      headers: {
        'content-type': 'application/json',
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((json) => dispatch(removeFromFavoritesActionCreator(json)))
      .then((response) => console.log(response))
  }
}

export function fetchGetAllFavorites(token) {
  return function (dispatch) {
    fetch('https://painassasin.online/catalog/track/favorite/all/', {
      headers: {
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((json) => dispatch(AllFavoriteTracksActionCreator(json)))
      .then((data) => console.log(data))
  }
}

export function addToFavorites(id, token) {
  return function (dispatch) {
    fetch(`https://painassasin.online/catalog/track/${id}/favorite/`, {
      method: 'POST',
      body: JSON.stringify({
        id: id,
      }),
      headers: {
        'content-type': 'application/json',
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((json) => dispatch(addToFavoritesActionCreator(json)))
      .then((data) => console.log(data))
  }
}

export async function fetchRegister(loginState, passwordState) {
  const response = await fetch('https://painassasin.online/user/signup/', {
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
  })
  const data = await response.json()
  console.log(data)
  return data
}
