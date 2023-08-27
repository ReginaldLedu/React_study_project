import { NavLink } from 'react-router-dom'
import styles from './sidebar.module.css'
import { trackLists } from './tracks.js'

function Tracklist() {
  return (
    <div className={styles['sidebar__list']}>
      {trackLists.map((trackList) => (
        <div key={trackList.id} className={styles['sidebar__item']}>
          <NavLink
            className={styles['sidebar__link']}
            to={`/trackList/${trackList.id}`}
          >
            <img
              className={styles['sidebar__img']}
              src={trackList.src}
              alt={trackList.alt}
            ></img>
          </NavLink>
        </div>
      ))}
    </div>
  )
}

export default Tracklist
