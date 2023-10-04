import styles from './sidebar.module.css'
import Tracklist from './trackList'
import { Provider } from 'react-redux'
import { store } from '../store/reducers/index'
function SideBar() {
  return (
    <div className={styles['main__sidebar']}>
      <div className={styles['sidebar__personal']}>
        <p className={styles['sidebar__personal-name']}>Sergey.Ivanov</p>
        <div className={styles['sidebar__avatar']}></div>
      </div>
      <div className={styles['sidebar__block']}>
        <Provider store={store}>
          <Tracklist></Tracklist>
        </Provider>
      </div>
    </div>
  )
}
export default SideBar
