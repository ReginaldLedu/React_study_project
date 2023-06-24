import { useState } from 'react'
import MenuNav from './menuNav'
import styles from "./navBurger.module.css"
console.log(styles)

function Nav() {
  const menuState = useState(false)
  const menu = menuState[0]
  const menuHide = menuState[1]
  function toggleVisibility() {
    menuHide(!menu)
  }
  return (
    <nav className={styles['main__nav']}>
      <div className={styles['nav__logo']}>
        <img className={styles['logo__image']} src="img/logo.png" alt="logo"></img>
      </div>
      <div className={styles['nav__burger']}
		onClick={toggleVisibility}>
        <span className={styles['burger__line']}></span>
        <span className={styles['burger__line']}></span>
        <span className={styles['burger__line']}></span>
      </div>
      {menu && <MenuNav />}
    </nav>
  )
}
export default Nav
