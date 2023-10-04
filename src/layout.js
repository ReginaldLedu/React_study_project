import { Outlet } from 'react-router-dom'
import Bar from './Components/bar/bar'
import { Provider } from 'react-redux'
import { store } from './Components/store/reducers/index'
import styles from './Components/bar/bar.module.css'

export const Layout = (
  /*eslint-disable*/ {
    startPlay,
    setStartPlay,
    setPlayProgress,
    playProgress,
    position,
  }
) => {
  return (
    <>
      <Provider store={store}>
        <Outlet
        />
      </Provider>
      {position.name !== undefined ? (
        <Provider store={store}>
          <div className={styles['bar']}>
            <Bar
              startPlay={startPlay}
              setStartPlay={setStartPlay}
              playProgress={playProgress}
              setPlayProgress={setPlayProgress}
              position={position}
            ></Bar>
          </div>
        </Provider>
      ) : (
        ' '
      )}
    </>
  )
}
