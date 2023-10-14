import { useThemeContext } from '../main/main'
import axios from 'axios'
import styles from '../centerblock/centerblock.module.css'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchLogin, fetchGetAllFavorites } from '../store/reducers/async'
import { getTokenCreator } from '../store/reducers/tokenFromAPIReducer'

export function Wrapper({ /* eslint-disable */ children }) {
  const { theme } = useThemeContext()
  const dispatch = useDispatch()
  const tokens = useSelector((state) => state.tokenReducer.defaultTokens)
  const loginAndPasswordFromLocalReducer = useSelector(
    (state) => state.loginPasswordToolkit.initialState
  )
  console.log(loginAndPasswordFromLocalReducer)
  const login = useSelector((state) => state.loginReducer.defaultLogin)
  console.log(login)

  useEffect(() => {
    dispatch(
      fetchLogin(
        loginAndPasswordFromLocalReducer[0],
        loginAndPasswordFromLocalReducer[1]
      )
    )
  }, [])

  useEffect(() => {
    axios
      .post(
        'https://skypro-music-api.skyeng.tech/user/token/',
        {
          email: loginAndPasswordFromLocalReducer[0],
          password: loginAndPasswordFromLocalReducer[1],
        },
        {
          headers: {
            // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
            'content-type': 'application/json',
          },
        }
      )
      .then(function (response) {
        dispatch(getTokenCreator(response.data))
        fetchGetAllFavorites(`Bearer ${response.data.access}`)
      })
  }, [])

  const renderedTracks = useSelector(
    (state) => state.renderedTracksToolkit.initialState
  )

  const allFavorites = useSelector(
    (state) => state.allFavoritesToolkit.initialState
  )
  console.log(allFavorites)
  console.log(typeof allFavorites)
  console.log(renderedTracks)

  return (
    <div className={styles['wrapper']} style={{ background: theme.background }}>
      {children}
    </div>
  )
}
