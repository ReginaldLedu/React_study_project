import styles from './bar.module.css'
import { useRef, useState, useEffect } from 'react'

function Bar() {
  const [startPlay, setStartPlay] = useState(false)
  const [playProgress, setPlayProgress] = useState(null)
  const playRef = useRef(null)
  const progressRef = useRef(null)
  const animationRef = useRef()
  const progressInsert = useRef(null)
  const play = () => {
    playRef.current.play()
    animationRef.current = requestAnimationFrame(whilePlaying)
    progressRef.current.style.display = 'none'
    setStartPlay(true)
    let time = playRef.current.currentTime
    setPlayProgress(time)
    console.log(time)
  }
  useEffect(() => {
    const seconds = Math.floor(playRef.current.duration)
    setPlayProgress(seconds)
    console.log(playProgress)
  })
  const changeRange = () => {
    playRef.current.currentTime = progressInsert.current.value
    progressInsert.current.style.setProperty(
      '--seek-before-width',
      `${(progressInsert.current.value / playRef.current.duration) * 100}%`
    )
  }

  const changePlayerCurrentTime = () => {
    progressInsert.current.style.setProperty(
      '--seek-before-width',
      `${(progressInsert.current.value / playRef.current.duration) * 100}%`
    )
  }

  const whilePlaying = () => {
    progressInsert.current.value = playRef.current.currentTime
    changePlayerCurrentTime()
    animationRef.current = requestAnimationFrame(whilePlaying)
  }

  return (
    <div className={styles['bar__content']}>
      {startPlay && (
        <input
          type="range"
          defaultValue="0"
          className={styles['bar__player-progress']}
          name="range"
          ref={progressInsert}
          onChange={changeRange}
          style={{ color: 'purple', height: '5px', width: '100%' }}
        ></input>
      )}
      <div ref={progressRef} className={styles['bar__player-progress']}></div>
      <div className={styles['bar__player-block']}>
        <div className={styles['bar__player']}>
          <div className={styles['player__controls']}>
            <div className={styles['player__btn-prev']}>
              <svg className={styles['player__btn-prev-svg']}>
                <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
              </svg>
            </div>
            {startPlay && (
              <div
                className={styles['player__btn-play']}
                onClick={() => {
                  playRef.current.pause()
                  cancelAnimationFrame(animationRef.current)
                }}
              >
                <img src="img/icon/stop.svg"></img>
              </div>
            )}
            <div className={styles['player__btn-play']} onClick={play}>
              <audio ref={playRef} src="track.mp3"></audio>
              <svg className={styles['player__btn-play-svg']}>
                <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
              </svg>
            </div>
            <div className={styles['player__btn-next']}>
              <svg className={styles['player__btn-next-svg']}>
                <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
              </svg>
            </div>
            <div className={styles['player__btn-repeat']}>
              <svg className={styles['player__btn-repeat-svg']}>
                <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
              </svg>
            </div>
            <div className={styles['player__btn-shuffle']}>
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
