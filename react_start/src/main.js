import Nav from './nav_burger'
import CenterBlock from './centerblock'
import SideBar from './sidebar'
import Bar from './bar'
import Footer from './footer'
import { createContext, useState } from 'react'

export const ThemeContext = createContext()

const themes = {
  dark: {
    background: '#383838',
    color: '#ffffff',
  },
  light: {
    background: '#ffffff',
    color: '#383838',
    navBackground: '#f6f5f3',
    burgerLine: '#383838',
  },
}

function Main() {
  const [theme, setLighTheme] = useState(themes.dark)

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <div className="wrapper" style={{ background: theme.background }}>
          <div className="container">
            <main className="main">
              <ThemeContext.Provider value={theme}>
                <Nav />
              </ThemeContext.Provider>
              <ThemeContext.Provider value={theme}>
                <CenterBlock />
              </ThemeContext.Provider>
              <button
                onClick={() => {
                  theme === themes.dark
                    ? setLighTheme(themes.light)
                    : setLighTheme(themes.dark)
                }}
              >
                press me up
              </button>
              <ThemeContext.Provider value={theme}>
                <SideBar />
              </ThemeContext.Provider>
            </main>
            <ThemeContext.Provider value={theme}>
              <Bar />
            </ThemeContext.Provider>
            <Footer />
          </div>
        </div>
      </ThemeContext.Provider>
    </>
  )
}

export default Main
