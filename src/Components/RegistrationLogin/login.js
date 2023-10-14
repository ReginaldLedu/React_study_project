import { useNavigate } from 'react-router-dom'
import styles from './login.module.css'
import { useState, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { fetchLogin, fetchaAccessToken } from '../store/reducers/async'
import { loginAndPasswordAddToReducer } from '../store/reducers/loginPasswordtoReduxToolkit'

export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [loginChange, setLoginChange] = useState(null)
  const [passwordChange, setPasswordChange] = useState(null)
  const [formValid, setFormValid] = useState(false)
  const logRef = useRef()
  const passRef = useRef()

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
        setLoginChange(logRef.current.value)
        break
      case 'password':
        setPasswordChange(passRef.current.value)
        break
    }
  }

  async function log(loginChange, passwordChange) {
    dispatch(fetchLogin(loginChange, passwordChange))
    dispatch(fetchaAccessToken(loginChange, passwordChange))
    dispatch(loginAndPasswordAddToReducer(loginChange))
    dispatch(loginAndPasswordAddToReducer(passwordChange))
  }

  return (
    <div className={styles['login__container']}>
      <div className={styles['login__logo']}>
        <img src="sky.svg"></img>
      </div>
      <input
        ref={logRef}
        name="login"
        type="text"
        className={styles['login__name']}
        placeholder="Логин"
        onChange={(event) => blurHandler(event)}
      ></input>
      <input
        ref={passRef}
        name="password"
        type="text"
        className={styles['login__password']}
        placeholder="Пароль"
        onChange={(event) => blurHandler(event)}
      ></input>
      <button
        className={styles['login__button']}
        disabled={!formValid}
        onClick={() => {
          log(loginChange, passwordChange).then(
            navigate('main', { replace: false })
          )
        }}
      >
        Войти
      </button>
      <button
        className={styles['registration__start']}
        onClick={() => {
          navigate('registration', { replace: false })
        }}
      >
        Зарегистрироваться
      </button>
    </div>
  )
}
