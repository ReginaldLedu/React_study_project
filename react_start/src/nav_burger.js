import { useState } from 'react'
import MenuNav from './menuNav'

function Nav() {
  const menuState = useState(false)
  const menu = menuState[0]
  const menuHide = menuState[1]
  function toggleVisibility() {
    menuHide(!menu)
  }
  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src="img/logo.png" alt="logo"></img>
      </div>
      <div className="nav__burger burger" onClick={toggleVisibility}>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
      </div>
      {menu && <MenuNav />}
    </nav>
  )
}
export default Nav
