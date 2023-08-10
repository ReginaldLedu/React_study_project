import Filter from './filter'
import styles from './centerblock.module.css'
import { useThemeContext } from '../main/main'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

function CenterBlock() {
  const { theme } = useThemeContext()
  const position = useSelector((state) => state.reducer.currentPosition)
  const pulsation = useSelector((state) => state.pulsationReducer.pulsation)
  const range = useSelector((state) => state.shuffleReducer.defaultRange)

  function shuffled(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1))
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
  }
  const originalRange = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const forShuffled = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  shuffled(forShuffled)

  const shuffledRange = []
  for (let i = 0; i < forShuffled.length; i++) {
    shuffledRange.push(forShuffled[forShuffled[i]])
  }

  console.log(originalRange)
  console.log(shuffledRange)
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
                  Guilt {originalRange[i]}
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
                  Guilt {originalRange[i]}
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

  //shuffled range

  //const dispatch = useDispatch()
  /*if (range > 0) {
    dispatch({ type: 'shuffle', step: 1 })
    
  } else {
    dispatch({ type: 'default', step: 1 })
  }*/

  return (
    <div className={styles['main__centerblock']}>
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

        <div className={styles['content__playlist']}>
          {range === 0 ? originalPlaylist : shuffledPlayList}

          <>
            {/* <div className={styles['playlist__item']}>
            <div className={styles['playlist__track']}>
              <div id="1" className={styles['track__title']}>
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
          <div className={styles['playlist__item']}>
            <div className={styles['playlist__track']}>
              <div id="2" className={styles['track__title']}>
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
                <svg className={styles['track__time-svg']}>
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className={styles['track__time-text']}>4:44</span>
              </div>
            </div>
          </div>
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
                    to="/main"
                    style={{ color: theme.color }}
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
                  Ali Bakgor{' '}
                </NavLink>
              </div>
              <div className={styles['track__album']}>
                <a className={styles['track__album-link']}>I’m Fire</a>
              </div>
              <div className={styles['track__time']}>
                <svg className={styles['track__time-svg']}>
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className={styles['track__time-text']}>2:22</span>
              </div>
            </div>
          </div>
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
                    Non Stop
                    <span
                      className={styles['track__title-span']}
                      style={{ color: theme.trackSpan }}
                    >
                      (Remix)
                    </span>
                  </NavLink>
                </div>
              </div>
              <div className={styles['track__author']}>
                <NavLink
                  className={styles['track__author-link']}
                  style={{ color: theme.color }}
                  to="/main"
                >
                  Стоункат, Psychopath
                </NavLink>
              </div>
              <div className={styles['track__album']}>
                <a className={styles['track__album-link']}>Non Stop</a>
              </div>
              <div className={styles['track__time']}>
                <svg className={styles['track__time-svg']}>
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className={styles['track__time-text']}>4:12</span>
              </div>
            </div>
          </div>
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
                    Run Run
                    <span
                      className={styles['track__title-span']}
                      style={{ color: theme.trackSpan }}
                    >
                      (feat. AR/CO)
                    </span>
                  </NavLink>
                </div>
              </div>
              <div className={styles['track__author']}>
                <NavLink
                  className={styles['track__author-link']}
                  style={{ color: theme.color }}
                  to="/main"
                >
                  Jaded, Will Clarke, AR/CO
                </NavLink>
              </div>
              <div className={styles['track__album']}>
                <a className={styles['track__album-link']}>Run Run</a>
              </div>
              <div className={styles['track__time']}>
                <svg className={styles['track__time-svg']}>
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className={styles['track__time-text']}>2:54</span>
              </div>
            </div>
          </div>
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
                    Eyes on Fire
                    <span
                      className={styles['track__title-span']}
                      style={{ color: theme.trackSpan }}
                    >
                      (Zeds Dead Remix)
                    </span>
                  </NavLink>
                </div>
              </div>
              <div className={styles['track__author']}>
                <NavLink
                  className={styles['track__author-link']}
                  style={{ color: theme.color }}
                  to="/main"
                >
                  Blue Foundation, Zeds Dead
                </NavLink>
              </div>
              <div className={styles['track__album']}>
                <a className={styles['track__album-link']}>Eyes on Fire</a>
              </div>
              <div className={styles['track__time']}>
                <svg className={styles['track__time-svg']}>
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className={styles['track__time-text']}>5:20</span>
              </div>
            </div>
          </div>
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
                    Mucho Bien
                    <span
                      className={styles['track__title-span']}
                      style={{ color: theme.trackSpan }}
                    >
                      (Hi Profile Remix)
                    </span>
                  </NavLink>
                </div>
              </div>
              <div className={styles['track__author']}>
                <NavLink
                  className={styles['track__author-link']}
                  style={{ color: theme.color }}
                  to="/main"
                >
                  HYBIT, Mr. Black, Offer Nissim, Hi Profile
                </NavLink>
              </div>
              <div className={styles['track__album']}>
                <a className={styles['track__album-link']}>Mucho Bien</a>
              </div>
              <div className={styles['track__time']}>
                <svg className={styles['track__time-svg']}>
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className={styles['track__time-text']}>3:41</span>
              </div>
            </div>
          </div>
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
                    Knives n Cherries
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
                  minthaze
                </NavLink>
              </div>
              <div className={styles['track__album']}>
                <a className={styles['track__album-link']}>Captivating</a>
              </div>
              <div className={styles['track__time']}>
                <svg className={styles['track__time-svg']}>
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className={styles['track__time-text']}>1:48</span>
              </div>
            </div>
          </div>
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
                    How Deep Is Your Love
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
                  Calvin Harris, Disciples
                </NavLink>
              </div>
              <div className={styles['track__album']}>
                <a className={styles['track__album-link']}>
                  How Deep Is Your Love
                </a>
              </div>
              <div className={styles['track__time']}>
                <svg className={styles['track__time-svg']}>
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className={styles['track__time-text']}>3:32</span>
              </div>
            </div>
          </div>
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
                    Morena
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
                  Tom Boxer
                </NavLink>
              </div>
              <div className={styles['track__album']}>
                <a className={styles['track__album-link']}>
                  Soundz Made in Romania
                </a>
              </div>
              <div className={styles['track__time']}>
                <svg className={styles['track__time-svg']}>
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className={styles['track__time-text']}>3:36</span>
              </div>
            </div>
          </div>
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
                    Here we go
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
                  {' '}
                  Tom Boxer
                </NavLink>
              </div>
              <div className={styles['track__album']}>
                <a className={styles['track__album-link']}></a>
              </div>
              <div className={styles['track__time']}>
                <svg className={styles['track__time-svg']}>
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className={styles['track__time-text']}></span>
              </div>
            </div>
          </div>*/}
          </>
        </div>
      </div>
    </div>
  )
}

export default CenterBlock
