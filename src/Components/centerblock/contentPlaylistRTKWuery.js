import styles from './centerblock.module.css'
//import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useThemeContext } from '../main/main'
import { NavLink } from 'react-router-dom'
//import { fetchTracks } from '../store/reducers/async'
//import { addAllTracks } from '../store/reducers/tracksfromapi'
import { useGetTracksQuery } from '../store/reducers/logisforRTKQwery'

export function Playlist() {
  const data = useGetTracksQuery()
//const dispatch = useDispatch()
  const { theme } = useThemeContext()
  const position = useSelector((state) => state.reducer.currentPosition)
  const pulsation = useSelector((state) => state.pulsationReducer.pulsation)
  const range = useSelector((state) => state.shuffleReducer.defaultRange)
  const tracks = useSelector((state) => state.tracksReducer.defaultTracks)

  function shuffled(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1))
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
  }
  //useEffect(() => dispatch(fetchTracks(), []))

  const originalRange = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const forShuffled = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  shuffled(forShuffled)

  const shuffledRange = []
  for (let i = 0; i < forShuffled.length; i++) {
    shuffledRange.push(forShuffled[forShuffled[i]])
  }

  const originalPlaylist = []
  for (let i = 0; i < 11; i++) {
    if (i === position) {
      originalPlaylist.push(
        <div className={styles['playlist__item']}>
          <div className={styles['playlist__track']}>
            <div className={styles['track__title']}>
              <div className={styles[`${pulsation}`]}></div>
              <div className={styles['track__title-image']}>
                <svg className={styles['track__title-svg']}>
                  <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                </svg>
              </div>
              <div className={styles['track__title-text']}>
                <NavLink
                  className={styles['track__title-link']}
                  style={{ color: theme.color }}
                  to="/main"
                >
                  Guilt
                  <span
                    className={styles['track__title-span']}
                    style={{ color: theme.trackSpan }}
                  ></span>
                </NavLink>
              </div>
            </div>
            <div className={styles['track__author']}>
              <NavLink
                className={styles['track__author-link']}
                style={{ color: theme.color }}
                to="/main"
              >
                Nero
              </NavLink>
            </div>
            <div className={styles['track__album']}>
              <a className={styles['track__album-link']}>Welcome Reality</a>
            </div>
            <div className={styles['track__time']}>
              <svg className={styles['track__time-svg']} alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
              </svg>
              <span className={styles['track__time-text']}>4:44</span>
            </div>
          </div>
        </div>
      )
    } else {
      originalPlaylist.push(
        <div className={styles['playlist__item']}>
          <div className={styles['playlist__track']}>
            <div className={styles['track__title']}>
              <div className={styles['track__title-image']}>
                <svg className={styles['track__title-svg']}>
                  <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                </svg>
              </div>
              <div className={styles['track__title-text']}>
                <NavLink
                  className={styles['track__title-link']}
                  style={{ color: theme.color }}
                  to="/main"
                >
                  Guilt
                  <span
                    className={styles['track__title-span']}
                    style={{ color: theme.trackSpan }}
                  ></span>
                </NavLink>
              </div>
            </div>
            <div className={styles['track__author']}>
              <NavLink
                className={styles['track__author-link']}
                style={{ color: theme.color }}
                to="/main"
              >
                Nero
              </NavLink>
            </div>
            <div className={styles['track__album']}>
              <a className={styles['track__album-link']}>Welcome Reality</a>
            </div>
            <div className={styles['track__time']}>
              <svg className={styles['track__time-svg']} alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
              </svg>
              <span className={styles['track__time-text']}>4:44</span>
            </div>
          </div>
        </div>
      )
    }
  }
  const shuffledPlayList = []
  for (let i = 0; i < 11; i++) {
    if (i === position) {
      shuffledPlayList.push(
        <div className={styles['playlist__item']}>
          <div className={styles['playlist__track']}>
            <div className={styles['track__title']}>
              <div className={styles[`${pulsation}`]}></div>
              <div className={styles['track__title-image']}>
                <svg className={styles['track__title-svg']}>
                  <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                </svg>
              </div>
              <div className={styles['track__title-text']}>
                <NavLink
                  className={styles['track__title-link']}
                  style={{ color: theme.color }}
                  to="/main"
                >
                  Guilt {shuffledRange[i]}
                  <span
                    className={styles['track__title-span']}
                    style={{ color: theme.trackSpan }}
                  ></span>
                </NavLink>
              </div>
            </div>
            <div className={styles['track__author']}>
              <NavLink
                className={styles['track__author-link']}
                style={{ color: theme.color }}
                to="/main"
              >
                Nero
              </NavLink>
            </div>
            <div className={styles['track__album']}>
              <a className={styles['track__album-link']}>Welcome Reality</a>
            </div>
            <div className={styles['track__time']}>
              <svg className={styles['track__time-svg']} alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
              </svg>
              <span className={styles['track__time-text']}>4:44</span>
            </div>
          </div>
        </div>
      )
    } else {
      shuffledPlayList.push(
        <div className={styles['playlist__item']}>
          <div className={styles['playlist__track']}>
            <div className={styles['track__title']}>
              <div className={styles['track__title-image']}>
                <svg className={styles['track__title-svg']}>
                  <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                </svg>
              </div>
              <div className={styles['track__title-text']}>
                <NavLink
                  className={styles['track__title-link']}
                  style={{ color: theme.color }}
                  to="/main"
                >
                  Guilt {shuffledRange[i]}
                  <span
                    className={styles['track__title-span']}
                    style={{ color: theme.trackSpan }}
                  ></span>
                </NavLink>
              </div>
            </div>
            <div className={styles['track__author']}>
              <NavLink
                className={styles['track__author-link']}
                style={{ color: theme.color }}
                to="/main"
              >
                Nero
              </NavLink>
            </div>
            <div className={styles['track__album']}>
              <a className={styles['track__album-link']}>Welcome Reality</a>
            </div>
            <div className={styles['track__time']}>
              <svg className={styles['track__time-svg']} alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
              </svg>
              <span className={styles['track__time-text']}>4:44</span>
            </div>
          </div>
        </div>
      )
    }
  }

  /* let promise = new Promise(function () {
    fetch('https://painassasin.online/catalog/track/all/')
      .then((response) => response.json())
      .then((json) => dispatch(addAllTracks(json)))
      .then(console.log(tracks))
  })

  promise.then(() => {
    console.log(tracks)
  })*/

  return (
    <div
      className={styles['content__playlist']}
      onClick={() => {
        console.log(tracks)
        console.log(typeof tracks)
      }}
    >
      {range === 0 ? originalPlaylist : shuffledPlayList}
      {data.length > 0 ? (
        <div className={styles['playlist__item']}>
          {data[originalRange[0]].name}
        </div>
      ) : (
        <div>треки отсутствуют</div>
      )}
    </div>
  )
}
