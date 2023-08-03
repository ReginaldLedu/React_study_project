import { useNavigate } from 'react-router-dom'
import styles from './login.module.css'
import { useState } from 'react'
import { useEffect } from 'react'

function Login() {
  const navigate = useNavigate()
  const [loginChange, setLoginChange] = useState(false)
  const [passwordChange, setPasswordChange] = useState(false)
  const [formValid, setFormValid] = useState(false)

  useEffect(() => {
    if (loginChange && passwordChange) {
      setFormValid(true)
    } else {
      setFormValid(false)
    }
  })

  const blurHandler = (event) => {
    switch (event.target.name) {
      case 'login':
        setLoginChange(true)
        break
      case 'password':
        setPasswordChange(true)
        break
    }
  }

  return (
    <div className={styles['login__container']}>
      <div className={styles['login__logo']}>
        <img src="sky.svg"></img>
      </div>
      <input
        name="login"
        type="text"
        className={styles['login__name']}
        placeholder="Логин"
        onBlur={(event) => blurHandler(event)}
      ></input>
      <input
        name="password"
        type="text"
        className={styles['login__password']}
        placeholder="Пароль"
        onBlur={(event) => blurHandler(event)}
      ></input>
      <button
        className={styles['login__button']}
        disabled={!formValid}
        onClick={() => navigate('main', { replace: false })}
      >
        Войти
      </button>
      <button
        className={styles['registration__start']}
        onClick={() => navigate('registration', { replace: false })}
      >
        Зарегистрироваться
      </button>
    </div>
  )
}
export default Login
