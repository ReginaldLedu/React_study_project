import { useParams } from 'react-router-dom'
import { trackLists } from './tracks.js'
import Nav from '../nav/nav_burger'
import CenterBlock from '../centerblock/centerblock'
import SideBar from '../sidebar/sidebar'
import Footer from '../centerblock/footer'
import { useState, useContext } from 'react'
import { createContext } from 'react'
import { Provider } from 'react-redux'
import { store } from '../store/reducers/index'
import { Playlist } from '../centerblock/contentPlaylist.js'
import styles from '../centerblock/centerblock.module.css'

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
  console.log(theme.color)
  console.log(theme.background)
  if (!theme) return themes.dark

  return theme
}

function TracklistChosen(/*eslint-disable*/ { startPlay, setStartPlay }) {
  const params = useParams()
  const trackList = trackLists.find((tracklist) => tracklist.id === params.id)
  const [theme, setLighTheme] = useState(themes.dark)
  const toggleTheme = () => {
    if (theme !== themes.dark) {
      setLighTheme(themes.dark)
      return
    } else {
      setLighTheme(themes.light)
    }
  }
  return (
    <div key={trackList.id}>
      <ContextTheme.Provider value={{ theme, toggleTheme }}>
        <div className="wrapper" style={{ background: theme.background }}>
          <div className="container">
            <main className="main">
              <Nav />
              <div className={styles['main__centerblock']}>
                <Provider store={store}>
                  <CenterBlock />
                  <Playlist startPlay={startPlay} setStartPlay={setStartPlay} />
                </Provider>
              </div>
              <SideBar />
            </main>
            <Footer />
          </div>
        </div>
      </ContextTheme.Provider>
    </div>
  )
}

export default TracklistChosen
