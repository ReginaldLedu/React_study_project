import styles from './login.module.css'
import { NavLink } from 'react-router-dom'

function Registration() {
  return (
    <div className={styles['login__container']}>
      <div className={styles['login__logo']}>
        <img src="sky.svg"></img>
      </div>
      <input
        required
        type="text"
        className={styles['login__name']}
        placeholder="Логин"
      ></input>
      <input
        required
        type="text"
        className={styles['login__password']}
        placeholder="Пароль"
      ></input>
      <input
        required
        type="text"
        className={styles['registration__password']}
        placeholder="Повторите пароль"
      ></input>
      <button className={styles['registration__button']}>
        <NavLink className={styles['registration__button_text']} to="/">
          Зарегистрироваться
        </NavLink>
      </button>
    </div>
  )
}

export default Registration
