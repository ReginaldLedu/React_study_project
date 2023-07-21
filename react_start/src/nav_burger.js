import { useContext, useState } from 'react'
import MenuNav from './menuNav'
import styles from './navBurger.module.css'
import { ThemeContext } from './main'

export const Nav = () => {
  const menuState = useState(false)
  const menu = menuState[0]
  const menuHide = menuState[1]
  function toggleVisibility() {
    menuHide(!menu)
  }
  const theme = useContext(ThemeContext)

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

      {menu && <MenuNav />}
    </nav>
  )
}
export default Nav
