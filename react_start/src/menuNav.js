import styles from './navBurger.module.css'
import { NavLink } from 'react-router-dom'
function MenuNav() {
  return (
    <div className={styles['nav__menu']}>
      <ul className={styles['menu__list']}>
        <li className={styles['menu__item']}>
          <NavLink className={styles['menu__link']} to="/main">
            Главное
          </NavLink>
        </li>
        <li className={styles['menu__item']}>
          <NavLink className={styles['menu__link']} to="/favorites">
            Мой плейлист
          </NavLink>
        </li>
        <li className={styles['menu__item']}>
          <NavLink className={styles['menu__link']} to="/">
            Выйти
          </NavLink>
        </li>
      </ul>
    </div>
  )
}
export default MenuNav
