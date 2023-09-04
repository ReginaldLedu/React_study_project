import styles from './centerblock.module.css'
import { useEffect } from 'react'
//import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useThemeContext } from '../main/main'
import { NavLink } from 'react-router-dom'
import { fetchTracks } from '../store/reducers/async'
import { addToFavorites } from '../store/reducers/async'
//import { removeFromFavoritesActionCreator } from '../store/reducers/getFavTrack'
//import { fetchGetAllFavorites } from '../store/reducers/async'
//import { favTrackFromPlaylistActionCreator } from '../store/reducers/getFavTrack'

export function Playlist() {
  const dispatch = useDispatch()
  const { theme } = useThemeContext()
  const position = useSelector(
    (state) => state.currentPlayShowReducer.currentPosition
  )
  const pulsation = useSelector((state) => state.pulsationToolkit.pulsation)
  const range = useSelector((state) => state.shuffleReducer.defaultRange)
  const tracks = useSelector((state) => state.tracksReducer.defaultTracks)
  const tokens = useSelector((state) => state.tokenReducer.defaultTokens)
  /*const favTrack = useSelector(
    (state) => state.addToFavoritesReducer.defaultFavTracks
  )*/

  const allFavorites = useSelector(
    (state) => state.AllFavoriteTracksReducer.defaultAllFavoriteTracks
  )
  console.log(allFavorites)

  //const [liked, setLiked] = useState(false)
  /*function setLike() {
    if (liked === false) {
      setLiked(true)
    } else {
      setLiked(false)
      console.log(liked)
    }
  }*/

  function shuffled(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1))
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
  }

  useEffect(() => dispatch(fetchTracks()), [])

  const originalRange = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const forShuffled = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  shuffled(forShuffled)

  const shuffledRange = []

  for (let i = 0; i < forShuffled.length; i++) {
    shuffledRange.push(forShuffled[forShuffled[i]])
  }

  /*const addTrack = (track) => {
    const tr = {
      track,
      id: Date.now(),
    }
    dispatch({
      type: 'add to favorites from playlist',
      payload: tr,
    })
  }*/

  return (
    <div className={styles['content__playlist']}>
      {tracks.length > 0 ? (
        range === 0 ? (
          originalRange.map((track) => (
            <div
              key={originalRange.indexOf(track)}
              className={styles['playlist__item']}
            >
              <div className={styles['playlist__track']}>
                <div className={styles['track__title']}>
                  {position === originalRange.indexOf(track) ? (
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
                      {tracks[originalRange.indexOf(track)].name}
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
                    {tracks[originalRange.indexOf(track)].author}
                  </NavLink>
                </div>
                <div className={styles['track__album']}>
                  <a className={styles['track__album-link']}>
                    {tracks[originalRange.indexOf(track)].album}
                  </a>
                </div>
                <div className={styles['track__time']}>
                  <svg
                    className={styles['track__time-svg']}
                    alt="time"
                    onClick={(event) => {
                      event.target.classList.toggle(styles['liked'])
                      dispatch(
                        addToFavorites(
                          tracks[originalRange[track]].id,
                          `Bearer ${tokens.access}`
                        )
                      )
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
          shuffledRange.map((track) => (
            <div
              key={shuffledRange.indexOf(track)}
              className={styles['playlist__item']}
            >
              <div className={styles['playlist__track']}>
                <div className={styles['track__title']}>
                  {position === shuffledRange.indexOf(track) ? (
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
                      {tracks[shuffledRange[track]].name}
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
                    {tracks[shuffledRange[track]].author}
                  </NavLink>
                </div>
                <div className={styles['track__album']}>
                  <a className={styles['track__album-link']}>
                    {tracks[shuffledRange[track]].album}
                  </a>
                </div>
                <div className={styles['track__time']}>
                  <svg
                    className={styles['track__time-svg']}
                    alt="time"
                    onClick={(event) => {
                      event.target.classList.toggle(styles['liked'])
                      dispatch(
                        addToFavorites(
                          tracks[shuffledRange[track]].id,
                          `Bearer ${tokens.access}`
                        )
                      )
                    }}
                  >
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </svg>
                  <span className={styles['track__time-text']}>4:44</span>
                </div>
              </div>
            </div>
          ))
        )
      ) : (
        <div>треки отсутствуют</div>
      )}
    </div>
  )
}

/* <>
	<div className={styles['playlist__item']}>
	  <div className={styles['playlist__track']}>
		 <div className={styles['track__title']}>
			{position === 0 ? (
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
				 {range === 0
					? tracks[originalRange[0]].name
					: tracks[shuffledRange[0]].name}
				 <span
					className={styles['track__title-span']}
					style={{ color: theme.trackSpan }}
				 ></span>
			  </NavLink>
			</div>
		 </div>
		 <div className={styles['track__author']}>
			{range === 0 ? (
			  <NavLink
				 className={styles['track__author-link']}
				 style={{ color: theme.color }}
				 to="/main"
			  >
				 {tracks[originalRange[0]].author}
			  </NavLink>
			) : (
			  <NavLink
				 className={styles['track__author-link']}
				 style={{ color: theme.color }}
				 to="/main"
			  >
				 {tracks[shuffledRange[0]].author}
			  </NavLink>
			)}
		 </div>
		 <div className={styles['track__album']}>
			<a className={styles['track__album-link']}>
			  {range === 0
				 ? tracks[originalRange[0]].album
				 : tracks[shuffledRange[0]].album}
			</a>
		 </div>
		 <div className={styles['track__time']}>
			<svg
			  className={styles['track__time-svg']}
			  alt="time"
			  onClick={() => like()}
			>
			  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
			</svg>
			<span className={styles['track__time-text']}>4:44</span>
		 </div>
	  </div>
	</div>
	<div className={styles['playlist__item']}>
	  <div className={styles['playlist__track']}>
		 <div className={styles['track__title']}>
			{position === 1 ? (
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
				 {range === 0
					? tracks[originalRange[1]].name
					: tracks[shuffledRange[1]].name}
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
			  {range === 0
				 ? tracks[originalRange[1]].author
				 : tracks[shuffledRange[1]].author}
			</NavLink>
		 </div>
		 <div className={styles['track__album']}>
			<a className={styles['track__album-link']}>
			  {' '}
			  {range === 0
				 ? tracks[originalRange[1]].album
				 : tracks[shuffledRange[1]].album}
			</a>
		 </div>
		 <div className={styles['track__time']}>
			<svg
			  className={styles['track__time-svg']}
			  alt="time"
			  onClick={() => like()}
			>
			  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
			</svg>
			<span className={styles['track__time-text']}>4:44</span>
		 </div>
	  </div>
	</div>
	<div className={styles['playlist__item']}>
	  <div className={styles['playlist__track']}>
		 <div className={styles['track__title']}>
			{position === 2 ? (
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
				 {range === 0
					? tracks[originalRange[2]].name
					: tracks[shuffledRange[2]].name}
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
			  {range === 0
				 ? tracks[originalRange[2]].author
				 : tracks[shuffledRange[2]].author}
			</NavLink>
		 </div>
		 <div className={styles['track__album']}>
			<a className={styles['track__album-link']}>
			  {range === 0
				 ? tracks[originalRange[2]].album
				 : tracks[shuffledRange[2]].album}
			</a>
		 </div>
		 <div className={styles['track__time']}>
			<svg className={styles['track__time-svg']} alt="time">
			  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
			</svg>
			<span className={styles['track__time-text']}>4:44</span>
		 </div>
	  </div>
	</div>
	<div className={styles['playlist__item']}>
	  <div className={styles['playlist__track']}>
		 <div className={styles['track__title']}>
			{position === 3 ? (
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
				 {range === 0
					? tracks[originalRange[3]].name
					: tracks[shuffledRange[3]].name}
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
			  {range === 0
				 ? tracks[originalRange[3]].author
				 : tracks[shuffledRange[3]].author}
			</NavLink>
		 </div>
		 <div className={styles['track__album']}>
			<a className={styles['track__album-link']}>
			  {range === 0
				 ? tracks[originalRange[3]].album
				 : tracks[shuffledRange[3]].album}
			</a>
		 </div>
		 <div className={styles['track__time']}>
			<svg className={styles['track__time-svg']} alt="time">
			  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
			</svg>
			<span className={styles['track__time-text']}>4:44</span>
		 </div>
	  </div>
	</div>
	<div className={styles['playlist__item']}>
	  <div className={styles['playlist__track']}>
		 <div className={styles['track__title']}>
			{position === 4 ? (
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
				 {range === 0
					? tracks[originalRange[4]].name
					: tracks[shuffledRange[4]].name}
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
			  {range === 0
				 ? tracks[originalRange[4]].author
				 : tracks[shuffledRange[4]].author}
			</NavLink>
		 </div>
		 <div className={styles['track__album']}>
			<a className={styles['track__album-link']}>
			  {range === 0
				 ? tracks[originalRange[4]].album
				 : tracks[shuffledRange[4]].album}
			</a>
		 </div>
		 <div className={styles['track__time']}>
			<svg className={styles['track__time-svg']} alt="time">
			  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
			</svg>
			<span className={styles['track__time-text']}>4:44</span>
		 </div>
	  </div>
	</div>
	<div className={styles['playlist__item']}>
	  <div className={styles['playlist__track']}>
		 <div className={styles['track__title']}>
			{position === 5 ? (
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
				 {range === 0
					? tracks[originalRange[5]].name
					: tracks[shuffledRange[5]].name}
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
			  {range === 0
				 ? tracks[originalRange[5]].author
				 : tracks[shuffledRange[5]].author}
			</NavLink>
		 </div>
		 <div className={styles['track__album']}>
			<a className={styles['track__album-link']}>
			  {range === 0
				 ? tracks[originalRange[5]].album
				 : tracks[shuffledRange[5]].album}
			</a>
		 </div>
		 <div className={styles['track__time']}>
			<svg className={styles['track__time-svg']} alt="time">
			  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
			</svg>
			<span className={styles['track__time-text']}>4:44</span>
		 </div>
	  </div>
	</div>
	<div className={styles['playlist__item']}>
	  <div className={styles['playlist__track']}>
		 <div className={styles['track__title']}>
			{position === 6 ? (
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
				 {range === 0
					? tracks[originalRange[6]].name
					: tracks[shuffledRange[6]].name}
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
			  {range === 0
				 ? tracks[originalRange[6]].author
				 : tracks[shuffledRange[6]].author}
			</NavLink>
		 </div>
		 <div className={styles['track__album']}>
			<a className={styles['track__album-link']}>
			  {range === 0
				 ? tracks[originalRange[6]].album
				 : tracks[shuffledRange[6]].album}
			</a>
		 </div>
		 <div className={styles['track__time']}>
			<svg className={styles['track__time-svg']} alt="time">
			  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
			</svg>
			<span className={styles['track__time-text']}>4:44</span>
		 </div>
	  </div>
	</div>
	<div className={styles['playlist__item']}>
	  <div className={styles['playlist__track']}>
		 <div className={styles['track__title']}>
			{position === 7 ? (
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
				 {range === 0
					? tracks[originalRange[7]].name
					: tracks[shuffledRange[7]].name}
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
			  {range === 0
				 ? tracks[originalRange[7]].author
				 : tracks[shuffledRange[7]].author}
			</NavLink>
		 </div>
		 <div className={styles['track__album']}>
			<a className={styles['track__album-link']}>
			  {range === 0
				 ? tracks[originalRange[7]].album
				 : tracks[shuffledRange[7]].album}
			</a>
		 </div>
		 <div className={styles['track__time']}>
			<svg className={styles['track__time-svg']} alt="time">
			  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
			</svg>
			<span className={styles['track__time-text']}>4:44</span>
		 </div>
	  </div>
	</div>
	<div className={styles['playlist__item']}>
	  <div className={styles['playlist__track']}>
		 <div className={styles['track__title']}>
			{position === 8 ? (
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
				 {range === 0
					? tracks[originalRange[8]].name
					: tracks[shuffledRange[8]].name}
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
			  {range === 0
				 ? tracks[originalRange[8]].author
				 : tracks[shuffledRange[8]].author}
			</NavLink>
		 </div>
		 <div className={styles['track__album']}>
			<a className={styles['track__album-link']}>
			  {range === 0
				 ? tracks[originalRange[8]].album
				 : tracks[shuffledRange[8]].album}
			</a>
		 </div>
		 <div className={styles['track__time']}>
			<svg className={styles['track__time-svg']} alt="time">
			  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
			</svg>
			<span className={styles['track__time-text']}>4:44</span>
		 </div>
	  </div>
	</div>
	<div className={styles['playlist__item']}>
	  <div className={styles['playlist__track']}>
		 <div className={styles['track__title']}>
			{position === 9 ? (
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
				 {range === 0
					? tracks[originalRange[9]].name
					: tracks[shuffledRange[9]].name}
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
			  {range === 0
				 ? tracks[originalRange[9]].author
				 : tracks[shuffledRange[9]].author}
			</NavLink>
		 </div>
		 <div className={styles['track__album']}>
			<a className={styles['track__album-link']}>
			  {range === 0
				 ? tracks[originalRange[9]].album
				 : tracks[shuffledRange[9]].album}
			</a>
		 </div>
		 <div className={styles['track__time']}>
			<svg className={styles['track__time-svg']} alt="time">
			  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
			</svg>
			<span className={styles['track__time-text']}>4:44</span>
		 </div>
	  </div>
	</div>
	<div className={styles['playlist__item']}>
	  <div className={styles['playlist__track']}>
		 <div className={styles['track__title']}>
			{position === 10 ? (
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
				 {range === 0
					? tracks[originalRange[10]].name
					: tracks[shuffledRange[10]].name}
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
			  {range === 0
				 ? tracks[originalRange[10]].author
				 : tracks[shuffledRange[10]].author}
			</NavLink>
		 </div>
		 <div className={styles['track__album']}>
			<a className={styles['track__album-link']}>
			  {range === 0
				 ? tracks[originalRange[10]].album
				 : tracks[shuffledRange[10]].album}
			</a>
		 </div>
		 <div className={styles['track__time']}>
			<svg className={styles['track__time-svg']} alt="time">
			  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
			</svg>
			<span className={styles['track__time-text']}>4:44</span>
		 </div>
	  </div>
	</div>
			  </>*/
