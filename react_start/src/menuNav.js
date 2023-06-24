import styles from "./navBurger.module.css"
function MenuNav() {
  return (
    <div className={styles['nav__menu']}>
      <ul className={styles['menu__list']}>
        <li className={styles['menu__item']}>
          <a href="http://" className={styles['menu__link']}>
            Главное
          </a>
        </li>
        <li className={styles['menu__item']}>
          <a href="http://" className={styles['menu__link']}>
            Мой плейлист
          </a>
        </li>
        <li className={styles['menu__item']}>Войти</li>
      </ul>
    </div>
  )
}
export default MenuNav
