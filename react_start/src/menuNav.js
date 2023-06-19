import styles from "./navBurger.module.css"
function MenuNav() {
  return (
    <div className={styles.navMenu}>
      <ul className={styles.menuList}>
        <li className={styles.menuItem}>
          <a href="http://" className={styles.menuLink}>
            Главное
          </a>
        </li>
        <li className={styles.menuItem}>
          <a href="http://" className={styles.menuLink}>
            Мой плейлист
          </a>
        </li>
        <li className={styles.menuItem}>Войти</li>
      </ul>
    </div>
  )
}
export default MenuNav
