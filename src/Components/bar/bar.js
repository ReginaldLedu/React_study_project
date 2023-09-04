import styles from './bar.module.css'
import { useRef, useEffect } from 'react'
import { useThemeContext } from '../main/main'
import { useDispatch, useSelector } from 'react-redux'
import { addToFavorites } from '../store/reducers/async'
import { pulsationStart } from '../store/reducers/pulsationForCurrentPlayingItem'
import { pulsationStop } from '../store/reducers/pulsationForCurrentPlayingItem'

function Bar(
  /*eslint-disable*/ { startPlay, setStartPlay, playProgress, setPlayProgress }
) {
  const playRef = useRef(null)
  const progressRef = useRef(null)
  const animationRef = useRef()
  const progressInsert = useRef(null)
  const { theme } = useThemeContext()
  const dispatch = useDispatch()
  const position = useSelector(
    (state) => state.currentPlayShowReducer.currentPosition
  )
  const range = useSelector((state) => state.shuffleReducer.defaultRange)
  const currentPlayShow = () => {
    if (position === -1) {
      dispatch({ type: 'forward', step: 1 })
    } else {
      dispatch({ type: 'samePlace', step: 0 })
    }
  }

  /*const pulsatioinStart = () => {
    dispatch({ type: 'pulsatioinStart', step: 1 })
  }*/

  /*const pulsatioinStop = () => {
    dispatch({ type: 'pulsationStop', step: 1 })
  }*/

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
        setPlayProgress(time)
      }
      currentPlayShow()
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
    ;() => setPlayProgress(seconds)
  })

  const changeRange = () => {
    playRef.current.currentTime = progressInsert.current.value
    progressInsert.current.style.setProperty(
      '--seek-before-width',
      `${(progressInsert.current.value / playRef.current.duration) * 100}%`
    )
  }

  const stopPlaying = () => {
    ;() => setPlayProgress(playProgress)
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
      forward()
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

  //redux

  console.log(position)

  const back = () => {
    if (position > 0 && position <= 11) {
      stopPlaying()
      dispatch({ type: 'back', step: 1 })
    } else dispatch({ type: 'default', step: 0 })
  }

  const shuffle = () => {
    stopPlaying()
    if (range === 0) {
      dispatch({ type: 'shuffle', step: 1 })
    } else dispatch({ type: 'default' })
    console.log(range)
  }

  const forward = () => {
    if (position >= 0 && position < 10) {
      stopPlaying()
      dispatch({ type: 'forward', step: 1 })
    } else dispatch({ type: 'default', step: 0 })
    console.log('works')
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
              <audio ref={playRef} src="track.mp3"></audio>
              {startPlay.startPlay === true ? (
                <img src="img/icon/stop.svg"></img>
              ) : (
                <svg className={styles['player__btn-play-svg']}>
                  <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                </svg>
              )}
            </div>
            <div
              className={styles['player__btn-next']}
              onClick={() => {
                forward()
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
                  Ты та...
                </a>
              </div>
              <div className={styles['track-play__album']}>
                <a className={styles['track-play__album-link']} href="http://">
                  Баста
                </a>
              </div>
            </div>
            <div className={styles['track-play__like-dis']}>
              <div
                className={`${styles['track-play__like']} ${styles['_btn-icon']}`}
                onClick={() => addToFavorites()}
              >
                <svg className={styles['track-play__like-svg']}>
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
              </div>
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
