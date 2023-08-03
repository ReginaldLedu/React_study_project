import Nav from '../nav/nav_burger'
import CenterBlock from '../centerblock/centerblock'
import SideBar from '../sidebar/sidebar'
import Bar from '../bar/bar'
import Footer from '../centerblock/footer'
import { useState, useContext } from 'react'
import { createContext } from 'react'

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

function Main() {
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
        <div className="wrapper" style={{ background: theme.background }}>
          <div className="container">
            <main className="main">
              <Nav />
              <CenterBlock />
              <SideBar />
            </main>
            <Bar />
            <Footer />
          </div>
        </div>
      </ContextTheme.Provider>
    </>
  )
}

export default Main
