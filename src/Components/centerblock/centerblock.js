import Filter from './filter'
import styles from './centerblock.module.css'
import { useThemeContext } from '../main/main'
//import { NavLink } from 'react-router-dom'
//import { useSelector } from 'react-redux'
//import { Playlist } from './contentPlaylist'
//import { Playlist } from './contentPlaylistRTKWuery'
//import { Outlet } from 'react-router-dom'

function CenterBlock(/*eslint-disable*/ { startPlay, setStartPlay }) {
  const { theme } = useThemeContext()
  return (
    <>
      <div className={styles['centerblock__search']}>
        <svg className={styles['search__svg']}>
          {theme.color === '#ffffff' ? (
            <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
          ) : (
            <use xlinkHref="img/icon/sprite.svg#icon-search-light"></use>
          )}
        </svg>
        <input placeholder="Поиск" className={styles['search__text']}></input>
      </div>
      <h2 className={styles['centerblock__h2']} style={{ color: theme.color }}>
        Треки
      </h2>
      <Filter />
      <div className={styles['centerblock__content']}>
        <div
          className={`${styles['content__title']} ${styles['playlist__title']}`}
        >
          <div
            className={`${styles['playlist-title__col']} ${styles['col01']}`}
          >
            Треки
          </div>
          <div
            className={`${styles['playlist-title__col']} ${styles['col02']}`}
          >
            ИСПОЛНИТЕЛЬ
          </div>
          <div
            className={`${styles['playlist-title__col']} ${styles['col03']}`}
          >
            АЛЬБОМ
          </div>
          <div
            className={`${styles['playlist-title__col']} ${styles['col04']}`}
          >
            <svg className={styles['playlist-title__svg']}>
              <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
            </svg>
          </div>
        </div>

        {/* <Playlist startPlay={startPlay} setStartPlay={setStartPlay} />*/}
      </div>
    </>
  )
}

export default CenterBlock
