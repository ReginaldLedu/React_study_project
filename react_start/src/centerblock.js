import Filter from './filter'
import styles from './centerblock.module.css'
import { ThemeContext } from './main'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

function CenterBlock() {
  const theme = useContext(ThemeContext)
  return (
    <div className={styles['main__centerblock']}>
      <div className={styles['centerblock__search']}>
        <svg className={styles['search__svg']}>
          <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
        </svg>
        <input className={styles['search__text']}></input>
      </div>
      <h2 className={styles['centerblock__h2']}>Треки</h2>
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
                    <span className={styles['track__title-span']}></span>
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
                    <span className={styles['track__title-span']}></span>
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
                    <span className={styles['track__title-span']}></span>
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
                    <span className={styles['track__title-span']}>(Remix)</span>
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
                    <span className={styles['track__title-span']}>
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
                    <span className={styles['track__title-span']}>
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
                    <span className={styles['track__title-span']}>
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
                    <span className={styles['track__title-span']}></span>
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
                    <span className="track__title-span"></span>
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
                    <span className={styles['track__title-span']}></span>
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
                    <span className={styles['track__title-span']}></span>
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default CenterBlock
