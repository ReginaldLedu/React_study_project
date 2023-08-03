import styles from './sidebar.module.css'
import Tracklist from './trackList'

function SideBar() {
  return (
    <div className={styles['main__sidebar']}>
      <div className={styles['sidebar__personal']}>
        <p className={styles['sidebar__personal-name']}>Sergey.Ivanov</p>
        <div className={styles['sidebar__avatar']}></div>
      </div>
      <div className={styles['sidebar__block']}>
        <Tracklist></Tracklist>
      </div>
    </div>
  )
}
export default SideBar
