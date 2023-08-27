import { fetchRegister } from '../store/reducers/async'
import styles from './login.module.css'
import { NavLink } from 'react-router-dom'
import { useRef, useState } from 'react'
function Registration() {
  const loginRef = useRef()
  const passwordRef = useRef()
  const [loginState, setLogin] = useState(null)
  const [passwordState, setPassword] = useState(null)
  function getLogin() {
    setLogin(loginRef.current.value)
    console.log(loginState)
  }
  function getPassword() {
    setPassword(passwordRef.current.value)
    console.log(passwordState)
  }

  return (
    <div className={styles['login__container']}>
      <div className={styles['login__logo']}>
        <img src="sky.svg"></img>
      </div>
      <input
        required
        ref={loginRef}
        onBlur={getLogin}
        type="text"
        className={styles['login__name']}
        placeholder="Логин"
      ></input>
      <input
        required
        type="text"
        ref={passwordRef}
        onBlur={getPassword}
        className={styles['login__password']}
        placeholder="Пароль"
      ></input>
      <input
        required
        type="text"
        className={styles['registration__password']}
        placeholder="Повторите пароль"
      ></input>
      <button
        className={styles['registration__button']}
        onClick={() => fetchRegister(loginState, passwordState)}
      >
        <NavLink className={styles['registration__button_text']} to="/">
          Зарегистрироваться
        </NavLink>
      </button>
    </div>
  )
}

export default Registration
