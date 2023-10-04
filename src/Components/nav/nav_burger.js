import { useState } from 'react'
import MenuNav from './menuNav'
import styles from './navBurger.module.css'
import { useThemeContext } from '../main/main'

export const Nav = (
  /*eslint-disable*/ { startPlay, setStartPlay, setPlayProgress, playProgress }
) => {
  const menuState = useState(false)
  const menu = menuState[0]
  const menuHide = menuState[1]
  function toggleVisibility() {
    menuHide(!menu)
  }
  const { theme } = useThemeContext()

  return (
    <nav
      className={styles['main__nav']}
      style={{ background: theme.navBackground }}
    >
      <div className={styles['nav__logo']}>
        <img
          className={styles['logo__image']}
          src="img/logo.png"
          alt="logo"
        ></img>
      </div>
      <div className={styles['nav__burger']} onClick={toggleVisibility}>
        <span
          className={styles['burger__line']}
          style={{ background: theme.burgerLine }}
        ></span>
        <span
          className={styles['burger__line']}
          style={{ background: theme.burgerLine }}
        ></span>
        <span
          className={styles['burger__line']}
          style={{ background: theme.burgerLine }}
        ></span>
      </div>

      {menu && (
        <MenuNav
          startPlay={startPlay}
          setStartPlay={setStartPlay}
          playProgress={playProgress}
          setPlayProgress={setPlayProgress}
        />
      )}
    </nav>
  )
}
export default Nav
