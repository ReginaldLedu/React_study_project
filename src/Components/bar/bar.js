import styles from './bar.module.css'
import { useRef, useEffect } from 'react'
import { useThemeContext } from '../main/main'
import { useDispatch, useSelector } from 'react-redux'
import { addToFavorites } from '../store/reducers/async'
import { pulsationStart } from '../store/reducers/pulsationForCurrentPlayingItem'
import { pulsationStop } from '../store/reducers/pulsationForCurrentPlayingItem'
import { setCurrentPlay } from '../store/reducers/currentPlayingItemShowReducer'
import { fetchRemoveFromFavorites } from '../store/reducers/async'
import { allFavoritesLike } from '../store/reducers/favoriteTracksFromAPI'
import { allFavoritesDis } from '../store/reducers/favoriteTracksFromAPI'

function Bar(
  /*eslint-disable*/ { startPlay, setStartPlay, playProgress, setPlayProgress }
) {
  const allFavorites = useSelector(
    (state) => state.allFavoritesToolkit.initialState
  )

  const renderedTracks = useSelector(
    (state) => state.renderedTracksToolkit.initialState
  )

  const tracks = useSelector((state) => state.allTracksToolkit.initialState)
  const playRef = useRef(null)
  const progressRef = useRef(null)
  const animationRef = useRef()
  const progressInsert = useRef(null)
  const { theme } = useThemeContext()
  const dispatch = useDispatch()
  const tokens = useSelector((state) => state.tokenReducer.defaultTokens)
  console.log(tokens)
  const position = useSelector(
    (state) => state.currentPlayingToolkit.initialState
  )
  const range = useSelector((state) => state.shuffleReducer.defaultRange)
  const song = allFavorites.filter(function (item) {
    return item.id === position.id
  })
  console.log(song)

  const pulsationStartLaunch = () => {
    dispatch(pulsationStart())
  }
  const pulsationStopLaunch = () => {
    dispatch(pulsationStop())
  }

  const start = () => {
    setStartPlay({ ...startPlay, startPlay: true })
  }
  const stop = () => {
    setStartPlay({ ...startPlay, startPlay: false })
    dispatch(pulsationStop())
    playRef.current.pause()
  }

  const play = () => {
    console.log(startPlay)
    if (startPlay.startPlay === false) {
      start()
      playRef.current.play()
      animationRef.current = requestAnimationFrame(whilePlaying)
      pulsationStartLaunch()
      progressRef.current.style.visibility = 'hidden'
      let time = playRef.current.currentTime
      ;() => {
        setPlayProgress({ ...playProgress, playProgress: time })
      }
    } else {
      stop()
      playRef.current.pause()
      cancelAnimationFrame(animationRef.current)
      pulsationStopLaunch()
      return
    }
  }

  useEffect(() => {
    const seconds = Math.floor(playRef.current.duration)
    ;() => setPlayProgress({ ...playProgress, playProgress: seconds })
  })

  useEffect(() => {
    start()
    playRef.current.play()
    animationRef.current = requestAnimationFrame(whilePlaying)
    pulsationStartLaunch()
    progressRef.current.style.visibility = 'hidden'
    let time = playRef.current.currentTime
    ;() => {
      setPlayProgress({ ...playProgress, playProgress: time })
    }
  }, [position])

  const changeRange = () => {
    playRef.current.currentTime = progressInsert.current.value
    progressInsert.current.style.setProperty(
      '--seek-before-width',
      `${(progressInsert.current.value / playRef.current.duration) * 100}%`
    )
  }

  const stopPlaying = () => {
    setStartPlay({ ...startPlay, startPlay: false })
    playRef.current.pause()
    dispatch(pulsationStop())
    ;() => setPlayProgress({ ...playProgress, playProgress: playProgress })
    playRef.current.currentTime = 0
  }

  const changePlayerCurrentTime = () => {
    progressInsert.current.style.setProperty(
      '--seek-before-width',
      `${(progressInsert.current.value / playRef.current.duration) * 100}%`
    )
  }

  const autoPlayNextTrack = () => {
    if (progressInsert.current.value === '100') {
      playRef.current.currentTime = 0
      progressInsert.current.value = playRef.current.currentTime
      changePlayerCurrentTime()
    }
  }

  const whilePlaying = () => {
    if (progressInsert.current !== null) {
      progressInsert.current.value = playRef.current.currentTime
      changePlayerCurrentTime()
      autoPlayNextTrack()
      animationRef.current = requestAnimationFrame(whilePlaying)
    }
  }

  const back = () => {
    const count = renderedTracks.indexOf(position)
    console.log(renderedTracks[count + 1])
    if (renderedTracks[count - 1]) {
      dispatch(setCurrentPlay(renderedTracks[count - 1]))
    } else {
      dispatch(setCurrentPlay(renderedTracks[0]))
    }
  }

  const shuffle = () => {
    stopPlaying()
    if (range === 0) {
      dispatch({ type: 'shuffle', step: 1 })
    } else if (range > 0) {
      dispatch({ type: 'default' })
    }
    console.log(range)
  }
  const setCurrentPlayTrack = (track) => {
    dispatch(setCurrentPlay(track))
    console.log(position)
  }

  const forward = (position) => {
    const count = renderedTracks.indexOf(position)
    console.log(renderedTracks[count + 1])
    if (renderedTracks[count + 1]) {
      dispatch(setCurrentPlay(renderedTracks[count + 1]))
    } else {
      dispatch(setCurrentPlay(renderedTracks[0]))
    }
  }

  return (
    <div className={styles['bar__content']} id={position}>
      {startPlay.startPlay === true ? (
        <input
          type="range"
          defaultValue="0"
          className={styles['bar__player-progress']}
          name="range"
          ref={progressInsert}
          onChange={changeRange}
          style={{
            background: theme.barProgress,
            color: 'purple',
            height: '5px',
            width: '100%',
          }}
        ></input>
      ) : (
        ''
      )}
      <div
        ref={progressRef}
        className={styles['bar__player-progress']}
        style={{
          background: theme.barProgress,
        }}
      ></div>
      <div className={styles['bar__player-block']}>
        <div className={styles['bar__player']}>
          <div className={styles['player__controls']}>
            <div
              className={styles['player__btn-prev']}
              onClick={() => {
                back()
              }}
            >
              <svg className={styles['player__btn-prev-svg']}>
                <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
              </svg>
            </div>
            <div className={styles['player__btn-play']} onClick={() => play()}>
              <audio ref={playRef} src={position.track_file}></audio>
              {startPlay.startPlay === true ? (
                <img src={'img/icon/stop.svg'}></img>
              ) : (
                <svg className={styles['player__btn-play-svg']}>
                  <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                </svg>
              )}
            </div>
            <div
              className={styles['player__btn-next']}
              onClick={() => {
                forward(position)
              }}
            >
              <svg className={styles['player__btn-next-svg']}>
                <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
              </svg>
            </div>
            <div className={styles['player__btn-repeat']}>
              <svg className={styles['player__btn-repeat-svg']}>
                <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
              </svg>
            </div>
            <div className={styles['player__btn-shuffle']} onClick={shuffle}>
              <svg className={styles['player__btn-shuffle-svg']}>
                <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
              </svg>
            </div>
          </div>
          <div className={styles['player__track-play']}>
            <div className={styles['track-play__contain']}>
              <div className={styles['track-play__image']}>
                <svg className={styles['track-play__svg']}>
                  <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                </svg>
              </div>
              <div className={styles['track-play__author']}>
                <a className={styles['track-play__author-link']} href="http://">
                  {position.name}
                </a>
              </div>
              <div className={styles['track-play__album']}>
                <a className={styles['track-play__album-link']} href="http://">
                  {position.author}
                </a>
              </div>
            </div>
            <div className={styles['track-play__like-dis']}>
              {allFavorites.find((item) => item.id === position.id) !==
              undefined ? (
                <div
                  className={`${styles['track-play__like']} ${styles['_btn-icon']}`}
                  onClick={(event) => {
                    event.target.classList.toggle(styles['disliked'])
                    dispatch(
                      fetchRemoveFromFavorites(
                        position.id,
                        `Bearer ${tokens.access}`
                      )
                    )
                    dispatch(allFavoritesDis(position.id))
                  }}
                >
                  <svg
                    className={styles['track-play__like-svg']}
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
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
                </div>
              ) : (
                <div
                  className={`${styles['track-play__like']} ${styles['_btn-icon']}`}
                  onClick={(event) => {
                    event.target.classList.toggle(styles['liked'])
                    dispatch(
                      addToFavorites(position.id, `Bearer ${tokens.access}`)
                    )
                    dispatch(allFavoritesLike(position))
                  }}
                >
                  <svg
                    className={styles['track-play__like-svg']}
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.00046 1.95884H8.02203C8.95392 1.14488 11.413 -0.13111 13.6132 1.47046C16.9678 3.91234 13.9025 9.20312 8.02203 12.7031H8.00046M8.00052 1.95884H7.97895C7.04706 1.14488 4.58794 -0.13111 2.38775 1.47046C-0.966814 3.91234 2.09846 9.20312 7.97895 12.7031H8.00052"
                      stroke="#ACACAC"
                    />
                  </svg>
                </div>
              )}
              <div
                className={`${styles['track-play__dislike']} ${styles['_btn-icon']}`}
              >
                <div className={styles['track-play__dislike-svg']}>
                  <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles['bar__volume-block']}>
          <div className={styles['volume__content']}>
            <div className={styles['volume__image']}>
              <svg className={styles['volume__svg']} alt="volume">
                <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
              </svg>
            </div>
            <div className={styles['volume__progress']}>
              <input
                className={styles['volume__progress-line']}
                type="range"
                name="range"
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Bar
