import styles from './bar.module.css'
import { useRef, useState, useEffect } from 'react'
import { useThemeContext } from '../main/main'
import { useDispatch, useSelector } from 'react-redux'

function Bar() {
  const [startPlay, setStartPlay] = useState(false)
  const [playProgress, setPlayProgress] = useState(null)
  console.log(playProgress)
  const playRef = useRef(null)
  const progressRef = useRef(null)
  const animationRef = useRef()
  const progressInsert = useRef(null)
  const { theme } = useThemeContext()
  const range = useSelector((state) => state.shuffleReducer.defaultRange)
  const currentPlayShow = () => {
    if (position === -1) {
      dispatch({ type: 'forward', step: 1 })
    } else {
      dispatch({ type: 'samePlace', step: 0 })
    }
  }

  const pulsatioinStart = () => {
    dispatch({ type: 'pulsatioinStart', step: 1 })
  }
  const pulsatioinStop = () => {
    dispatch({ type: 'pulsationStop', step: 1 })
  }

  const play = () => {
    if (startPlay) {
      playRef.current.pause()
      cancelAnimationFrame(animationRef.current)
      pulsatioinStop()
      setStartPlay(false)
      return
    } else {
      playRef.current.play()
      animationRef.current = requestAnimationFrame(whilePlaying)
      pulsatioinStart()
      progressRef.current.style.visibility = 'hidden'
      setStartPlay(true)
      let time = playRef.current.currentTime
      setPlayProgress(time)
      currentPlayShow()
    }
  }

  useEffect(() => {
    const seconds = Math.floor(playRef.current.duration)
    setPlayProgress(seconds)
  })

  const changeRange = () => {
    playRef.current.currentTime = progressInsert.current.value
    progressInsert.current.style.setProperty(
      '--seek-before-width',
      `${(progressInsert.current.value / playRef.current.duration) * 100}%`
    )
  }

  const stopPlaying = () => {
    setPlayProgress(playProgress)
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
    progressInsert.current.value = playRef.current.currentTime
    changePlayerCurrentTime()
    autoPlayNextTrack()
    animationRef.current = requestAnimationFrame(whilePlaying)
  }

  //redux
  const dispatch = useDispatch()
  const position = useSelector((state) => state.reducer.currentPosition)
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
    } else dispatch({ type: 'default', step: 1 })
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
      {startPlay && (
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
            <div className={styles['player__btn-play']} onClick={play}>
              <audio ref={playRef} src="track.mp3"></audio>
              {startPlay ? (
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
