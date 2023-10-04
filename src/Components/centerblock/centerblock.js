import Filter from './filter'
import styles from './centerblock.module.css'
import { useThemeContext } from '../main/main'
import { useSelector, useDispatch } from 'react-redux'
import { useRef } from 'react'
import { renderTracks } from '../store/reducers/renderedTracks'

function CenterBlock() {
  const dispatch = useDispatch()
  const tracks = useSelector((state) => state.allTracksToolkit.initialState)
  const { theme } = useThemeContext()
  const renderPlaylist = (tracks) => {
    dispatch(renderTracks(tracks))
  }

  const onChange = () => {
    if (searchRef.current.value !== '') {
      const filtered = tracks.filter(function (track) {
        return (
          track.author
            .toLowerCase()
            .indexOf(searchRef.current.value.toLowerCase()) > -1 ||
          track.name
            .toLowerCase()
            .indexOf(searchRef.current.value.toLowerCase()) > -1 ||
          track.genre
            .toLowerCase()
            .indexOf(searchRef.current.value.toLowerCase()) > -1 ||
          track.album
            .toLowerCase()
            .indexOf(searchRef.current.value.toLowerCase()) > -1
        )
      })
      console.log(typeof searchRef.current.value)
      renderPlaylist(filtered)
    } else {
      renderPlaylist([])
    }
  }

  const searchRef = useRef()
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
        <input
          onChange={() => onChange()}
          ref={searchRef}
          placeholder="Поиск"
          className={styles['search__text']}
        ></input>
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
      </div>
    </>
  )
}

export default CenterBlock
