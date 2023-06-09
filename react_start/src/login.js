function userData() {}

function Login() {
  return (
    <div className="login">
      <input className="login__name" label="Логин"></input>
      <input className="login__password" label="Пароль"></input>
      <button className="login__button" onClick={userData}>
        Войти
      </button>
      <button className="registration__button"></button>
    </div>
  )
}
export default Login
