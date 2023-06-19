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
    <nav className={styles.mainNav}>
      <div className={styles.navLogo}>
        <img className={styles.logoImage} src="img/logo.png" alt="logo"></img>
      </div>
      <div className={styles.navBurger}
		onClick={toggleVisibility}>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
      </div>
      {menu && <MenuNav />}
    </nav>
  )
}
export default Nav
