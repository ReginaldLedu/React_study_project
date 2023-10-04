import Nav from '../nav/nav_burger'
import CenterBlock from '../centerblock/centerblock'
import SideBar from '../sidebar/sidebar'
import { Playlist } from '../centerblock/contentPlaylist'
import Footer from '../centerblock/footer'
//import { Wrapper } from './wrapper'
import { useState, useContext, useEffect } from 'react'
import { createContext } from 'react'
import { Provider } from 'react-redux'
import { store } from '../store/reducers/index'
import styles from '../centerblock/centerblock.module.css'
import { Wrapper } from './wrapper'
import { renderTracks } from '../store/reducers/renderedTracks'
import { useSelector, useDispatch } from 'react-redux'
//import { fetchTracks } from '../store/reducers/async'

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
  console.log(position)
  const dispatch = useDispatch()
  const tracks = useSelector((state) => state.allTracksToolkit.initialState)
  useEffect(() => {
    dispatch(renderTracks(tracks))
  })
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
