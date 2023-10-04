import { useThemeContext } from '../main/main'
import styles from '../centerblock/centerblock.module.css'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTracks } from '../store/reducers/async'
//import { fetchGetAllFavorites } from '../store/reducers/async'
import { fetchRefreshTokens } from '../store/reducers/async'
//import { fetchaAccessToken } from '../store/reducers/async'
//import { renderTracks } from '../store/reducers/renderedTracks'

export function Wrapper({ /* eslint-disable */ children }) {
  const { theme } = useThemeContext()
  //const tracks = useSelector((state) => state.allTracksToolkit.initialState)
  const tokens = useSelector((state) => state.tokenReducer.defaultTokens)
  const login = useSelector((state) => state.loginReducer.defaultLogin)
  console.log(login)
  //useEffect(() => dispatch(fetchaAccessToken(login.email, login.username)), [])

  /*useEffect(() => {
    dispatch(fetchGetAllFavorites(`Bearer ${tokens.access}`))
  }, [])*/
  const renderedTracks = useSelector(
    (state) => state.renderedTracksToolkit.initialState
  )

  /*const allFavorites = useSelector(
    (state) => state.allFavoritesToolkit.initialState
  )*/
  const allFavorites = useSelector(
    (state) => state.allFavoritesToolkit.initialState
  )
  console.log(allFavorites)
  console.log(typeof allFavorites)
  //console.log(tokens)
  const dispatch = useDispatch()
  /*useEffect(() => {
    const fetchData = async () => {
      const data = dispatch(fetchTracks())
      console.log(data)
    }
    fetchData()
  }, [])*/

  useEffect(() => {
    dispatch(fetchTracks())
  }, [])

  console.log(renderedTracks)

  const refresh = (token) => {
    dispatch(fetchRefreshTokens(token))
  }
  useEffect(() => {
    refresh(tokens.refresh)
    console.log(refreshenedToken)
  }, [])
  const refreshenedToken = useSelector(
    (state) => state.refreshTokenToolkit.initialState
  )
  return (
    <div className={styles['wrapper']} style={{ background: theme.background }}>
      {children}
    </div>
  )
}
