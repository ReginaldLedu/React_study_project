export default Favorites

import Nav from '../nav/nav_burger'
import CenterBlock from '../centerblock/centerblock'
import SideBar from '../sidebar/sidebar'
import { Wrapper } from '../main/wrapper'
import Footer from '../centerblock/footer'
import { useState, useContext } from 'react'
import { createContext } from 'react'
import { Provider } from 'react-redux'
import { store } from '../store/reducers/index'
import { PlaylistForFavorites } from '../centerblock/favoritesPlaylist'
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

  if (!theme) return themes.dark

  return theme
}

function Favorites(
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

  return (
    <>
      <ContextTheme.Provider value={{ theme, toggleTheme }}>
        <Provider store={store}>
          <Wrapper>
            <div className="container">
              <main className="main">
                <Nav />
                <div className={styles['main__centerblock']}>
                  <Provider store={store}>
                    <CenterBlock />
                    <PlaylistForFavorites
                      startPlay={startPlay}
                      setStartPlay={setStartPlay}
                      playProgress={playProgress}
                      setPlayProgress={setPlayProgress}
                    />
                  </Provider>
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
