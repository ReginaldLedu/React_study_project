import styles from './centerblock.module.css'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useThemeContext } from '../main/main'
import { NavLink } from 'react-router-dom'
import { fetchRemoveFromFavorites } from '../store/reducers/async'
import { fetchGetAllFavorites } from '../store/reducers/async'

export function PlaylistForFavorites() {
  const allFavorites = useSelector(
    (state) => state.AllFavoriteTracksReducer.defaultAllFavoriteTracks
  )
  console.log(allFavorites)
  const dispatch = useDispatch()

  const [favTracks, setFavTracks] = useState([])
  console.log(setFavTracks)
  const favoritePlayListCreation = () => {
    dispatch(fetchGetAllFavorites(`Bearer ${tokens.access}`))
    for (let i = 0; i < allFavorites.length; i++) {
      favTracks.push(allFavorites[i])
    }
    console.log(favTracks)
  }

  useEffect(() => favoritePlayListCreation(), [])

  const { theme } = useThemeContext()
  const position = useSelector(
    (state) => state.currentPlayShowReducer.currentPosition
  )
  const pulsation = useSelector((state) => state.pulsationToolkit.pulsation)

  const tokens = useSelector((state) => state.tokenReducer.defaultTokens)
  const fav = useSelector(
    (state) => state.addToFavoritesReducer.defaultFavTracks
  )

  return (
    <div className={styles['content__playlist']}>
      {allFavorites.length > 0 ? (
        favTracks.map((track) => (
          <div
            key={favTracks.indexOf(track)}
            className={styles['playlist__item']}
          >
            <div className={styles['playlist__track']}>
              <div className={styles['track__title']}>
                {position === favTracks.indexOf(track) ? (
                  <div className={styles[`${pulsation}`]}></div>
                ) : (
                  ' '
                )}
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
                    {track.name}
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
                  {track.author}
                </NavLink>
              </div>
              <div className={styles['track__album']}>
                <a className={styles['track__album-link']}>{track.album}</a>
              </div>
              <div className={styles['track__time']}>
                <svg
                  className={styles['track__time-svg']}
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => {
                    favTracks.filter(function (item) {
                      return item.id !== track.id
                    })
                    console.log(fav)

                    dispatch(
                      fetchRemoveFromFavorites(
                        track.id,
                        `Bearer ${tokens.access}`
                      )
                    )

                    console.log(allFavorites)
                  }}
                >
                  <path
                    d="M8.02203 12.7031C13.9025 9.20312 16.9678 3.91234 13.6132 1.47046C11.413 -0.13111 8.95392 1.14488 8.02203 1.95884H8.00052H8.00046H7.97895C7.04706 1.14488 4.58794 -0.13111 2.38775 1.47046C-0.966814 3.91234 2.09846 9.20312 7.97895 12.7031H8.00046H8.00052H8.02203Z"
                    fill="#B672FF"
                  />
                  <path
                    d="M8.00046 1.95884H8.02203C8.95392 1.14488 11.413 -0.13111 13.6132 1.47046C16.9678 3.91234 13.9025 9.20312 8.02203 12.7031H8.00046M8.00052 1.95884H7.97895C7.04706 1.14488 4.58794 -0.13111 2.38775 1.47046C-0.966814 3.91234 2.09846 9.20312 7.97895 12.7031H8.00052"
                    stroke="#B672FF"
                  />
                </svg>
                <span className={styles['track__time-text']}>4:44</span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <></>
      )}
    </div>
  )
}
