import styles from './navBurger.module.css'
import { NavLink } from 'react-router-dom'
import { useThemeContext } from '../main/main'

function MenuNav() {
  const { toggleTheme } = useThemeContext()
  const { theme } = useThemeContext()

  return (
    <div className={styles['nav__menu']}>
      <ul className={styles['menu__list']}>
        <li className={styles['menu__item']}>
          <NavLink
            className={styles['menu__link']}
            to="/main"
            style={{ color: theme.color }}
          >
            Главное
          </NavLink>
        </li>

        <li className={styles['menu__item']}>
          <NavLink
            className={styles['menu__link']}
            to="/favorites"
            style={{ color: theme.color }}
          >
            Мой плейлист
          </NavLink>
        </li>

        <li className={styles['menu__item']}>
          <NavLink
            className={styles['menu__link']}
            to="/"
            style={{ color: theme.color }}
          >
            Выйти
          </NavLink>
        </li>

        <li className={styles['menu__item']} onClick={toggleTheme}>
          {theme.color === '#ffffff' ? (
            <img src="dark.svg" className={styles['menu__icon']}></img>
          ) : (
            <img src="light.svg" className={styles['menu__icon']}></img>
          )}
        </li>
      </ul>
    </div>
  )
}
export default MenuNav
