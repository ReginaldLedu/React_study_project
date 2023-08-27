import { Outlet } from 'react-router-dom'
import Bar from './Components/bar/bar'
import { Provider } from 'react-redux'
import { store } from './Components/store/reducers/index'
import styles from './Components/bar/bar.module.css'

export const Layout = (
  /*eslint-disable*/ { startPlay, setStartPlay, setPlayProgress, playProgress }
) => {
  return (
    <>
      <Outlet />
      <div className={styles['bar']}>
        <Provider store={store}>
          <Bar
            startPlay={startPlay}
            setStartPlay={setStartPlay}
            playProgress={playProgress}
            setPlayProgress={setPlayProgress}
          ></Bar>
        </Provider>
      </div>
    </>
  )
}
