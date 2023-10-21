import Nav from '../nav/nav_burger'
import axios from 'axios'
import CenterBlock from '../centerblock/centerblock'
import SideBar from '../sidebar/sidebar'
import { Playlist } from '../centerblock/contentPlaylist'
import Footer from '../centerblock/footer'
import { useState, useContext, useEffect } from 'react'
import { createContext } from 'react'
import { Provider } from 'react-redux'
import { store } from '../store/reducers/index'
import styles from '../centerblock/centerblock.module.css'
import { Wrapper } from './wrapper'
import { renderTracks } from '../store/reducers/renderedTracks'
import { useSelector, useDispatch } from 'react-redux'
import { shuffled } from '../store/reducers/renderedTracks'
import { allTracks } from '../store/reducers/tracksfromapi'


export const themes = {
  dark: {
    background: 'black',
    color: '#ffffff',
    navBackground: '#1c1c1c',
    burgerLine: '#ffffff',
    trackSpan: '#4e4e4e',
    barProgress: '#2e2e2e',
  },
  light: {
    background: '#ffffff',
    color: '#383838',
    navBackground: '#f6f5f3',
    burgerLine: '#383838',
    trackSpan: '#b1b1b1',
    barProgress: '#d9d9d9',
  },
}

export const ContextTheme = createContext({
  theme: themes.dark,
  toggleTheme: () => {
    console.log(themes)
  },
})

export const useThemeContext = () => {
  const theme = useContext(ContextTheme)

  if (!theme) return themes.dark

  return theme
}

function Main(
  /*eslint-disable*/ { startPlay, setStartPlay, playProgress, setPlayProgress }
) {
  const [theme, setLighTheme] = useState(themes.dark)
  const toggleTheme = () => {
    if (theme !== themes.dark) {
      setLighTheme(themes.dark)
      return
    } else {
      setLighTheme(themes.light)
    }
  }
  const position = useSelector(
    (state) => state.currentPlayingToolkit.initialState
  )
  const renderedTracks = useSelector(
    (state) => state.renderedTracksToolkit.initialState
  )
  const loginAndPasswordFromLocalReducer = useSelector(
    (state) => state.loginPasswordToolkit.initialState
  )
  const tokens = useSelector((state) => state.tokenReducer.defaultTokens)
  const range = useSelector((state) => state.shuffleReducer.defaultRange)
  console.log(position)
  const dispatch = useDispatch()
  const tracks = useSelector((state) => state.allTracksToolkit.initialState)
  useEffect(() => {
    axios
      .get('https://skypro-music-api.skyeng.tech/catalog/track/all/')
      .then(function (response) {
        dispatch(allTracks(response.data))
        dispatch(renderTracks(response.data))
      })
  }, [])
  console.log(tracks)

  useEffect(() => {
    dispatch(shuffled(renderedTracks))
  }, [range])

  return (
    <>
      <ContextTheme.Provider value={{ theme, toggleTheme }}>
        <Provider store={store}>
          <Wrapper>
            <div className="container">
              <main className="main">
                <Nav
                  startPlay={startPlay}
                  setStartPlay={setStartPlay}
                  playProgress={playProgress}
                  setPlayProgress={setPlayProgress}
                />
                <div className={styles['main__centerblock']}>
                  {/*<Provider store={store}>*/}
                  <CenterBlock />
                  <Playlist startPlay={startPlay} setStartPlay={setStartPlay} />
                  {/*</Provider>*/}
                </div>
                <Provider store={store}>
                  <SideBar />
                </Provider>
              </main>
              <Footer />
            </div>
          </Wrapper>
        </Provider>
      </ContextTheme.Provider>
    </>
  )
}

export default Main
// <div className="wrapper" style={{ background: theme.background }}>
