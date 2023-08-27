import styles from './centerblock.module.css'
import { useEffect } from 'react'
//import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useThemeContext } from '../main/main'
import { NavLink } from 'react-router-dom'
//import { fetchTracks } from '../store/reducers/async'
//import { addToFavorites } from '../store/reducers/async'
import { removeFromFavoritesActionCreator } from '../store/reducers/getFavTrack'
import { fetchGetAllFavorites } from '../store/reducers/async'

export function PlaylistForFavorites() {
  useEffect(() => dispatch(fetchGetAllFavorites(`Bearer ${tokens.access}`)), [])

  const dispatch = useDispatch()
  const { theme } = useThemeContext()
  const position = useSelector((state) => state.reducer.currentPosition)
  const pulsation = useSelector((state) => state.pulsationReducer.pulsation)
  //const range = useSelector((state) => state.shuffleReducer.defaultRange)
  //const tracks = useSelector((state) => state.tracksReducer.defaultTracks)
  const tokens = useSelector((state) => state.tokenReducer.defaultTokens)
  const fav = useSelector(
    (state) => state.addToFavoritesReducer.defaultFavTracks
  )

  let favorites = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const allFavorites = useSelector(
    (state) => state.AllFavoriteTracksReducer.defaultAllFavoriteTracks
  )
  //favorites = allFavorites
  // const [liked, setLiked] = useState(false)
  /* function setLike() {
    if (liked === false) {
      setLiked(true)
    } else {
      setLiked(false)
      console.log(liked)
    }
  }*/

  return (
    <div
      className={styles['content__playlist']}
      /*onClick={() => {
        {
          dispatch(fetchGetAllFavorites(`Bearer ${tokens.access}`))
          console.log(tokens.refresh)
        }
      }}*/
    >
      {allFavorites.length > 0 ? (
        allFavorites.map((track) => (
          <div
            key={allFavorites.indexOf(track)}
            className={styles['playlist__item']}
          >
            <div className={styles['playlist__track']}>
              <div className={styles['track__title']}>
                {position === favorites.indexOf(track) ? (
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
                    {allFavorites[favorites.indexOf(track)].name}
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
                  {allFavorites[favorites.indexOf(track)].author}
                </NavLink>
              </div>
              <div className={styles['track__album']}>
                <a className={styles['track__album-link']}>
                  {allFavorites[favorites.indexOf(track)].album}
                </a>
              </div>
              <div className={styles['track__time']}>
                <svg
                  className={styles['track__time-svg']}
                  alt="time"
                  onClick={() => {
                    console.log(fav)
                    dispatch(
                      removeFromFavoritesActionCreator(
                        allFavorites[favorites.indexOf(track)].id,
                        `Bearer ${tokens.access}`
                      )
                    )
                    console.log(fav)
                    //dispatch(fetchGetAllFavorites(`Bearer ${tokens.access}`))
                    console.log(allFavorites)
                  }}
                >
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
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
