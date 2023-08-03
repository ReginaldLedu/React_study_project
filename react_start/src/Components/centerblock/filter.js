import { useState } from 'react'
import { performers } from './performers.js'
import { genres } from './performers.js'
import { years } from './performers.js'
import styles from './filter.module.css'
import { useThemeContext } from '../main/main'


function Filter() {
  const [activeIndex, setActiveIndex] = useState(null)
  const [activeGenre, setActiveGenre] = useState(null)
  const [activeYear, setActiveYear] = useState(null)
  const { theme } = useThemeContext()
  return (
    <div
      className={styles['centerblock__filter']}
      style={{ color: theme.color }}
    >
      <div className={styles['filter__title']}>Искать по:</div>
      <FiltersShow
        className={`${styles['filter__button']} ${styles['button-author']} ${styles['_btn-text']}`}
        title="исполнителю"
        isActive={activeIndex === null}
        onShow={() => {
          setActiveIndex('performer')

          activeIndex === 'performer'
            ? setActiveIndex(null)
            : console.log(activeIndex)
          activeYear === 'year' ? setActiveYear(null) : console.log(activeYear)
          activeGenre === 'genre'
            ? setActiveGenre(null)
            : console.log(activeGenre)
          activeIndex === 'performer'
            ? setActiveIndex(null)
            : console.log(activeIndex)
        }}
      ></FiltersShow>
      <FiltersShow
        className={`${styles['filter__button']} ${styles['button-year']} ${styles['_btn-text']}`}
        title="году выпуска"
        isActive={activeYear === null}
        onShow={() => {
          setActiveYear('year')

          activeYear === 'year' ? setActiveYear(null) : console.log(activeYear)
          activeGenre === 'genre'
            ? setActiveGenre(null)
            : console.log(activeGenre)
          activeIndex === 'performer'
            ? setActiveIndex(null)
            : console.log(activeIndex)
        }}
      ></FiltersShow>
      <FiltersShow
        className={`${styles['filter__button']} ${styles['button-genre']} ${styles['_btn-text']}`}
        title="жанру"
        isActive={activeGenre === null}
        onShow={() => {
          setActiveGenre('genre')

          activeGenre === 'genre'
            ? setActiveGenre(null)
            : console.log(activeYear)
          activeYear === 'year' ? setActiveYear(null) : console.log(activeYear)
          activeIndex === 'performer'
            ? setActiveIndex(null)
            : console.log(activeIndex)
        }}
      ></FiltersShow>
    </div>
  )
}

function FiltersShow({
  /* eslint-disable */ title,
  /* eslint-disable */ isActive,
  /* eslint-disable */ onShow,
}) {
  const { theme } = useThemeContext()
  return (
    <div
      className={`${styles['filter__button']} ${styles['_btn-text']}`}
      style={{ borderColor: theme.color, background: theme.background }}
      onClick={onShow}
    >
      {' '}
      {title}
      {isActive ? ' ' : List(title)}
    </div>
  )
}

function List(title) {
  const filters = ['исполнителю', 'жанру', 'году выпуска']
  const { theme } = useThemeContext()
  if (title === filters[0]) {
    return (
      <div
        className={styles['filter__pop-up']}
        style={{ borderColor: theme.color, background: theme.navBackground }}
      >
        <p>{performers[0]} </p>
        <p>{performers[1]}</p>
        <p>{performers[2]}</p>
        <p>{performers[3]}</p>
        <p>{performers[4]}</p>
      </div>
    )
  } else if (title === filters[1]) {
    return (
      <div
        className={styles['filter__pop-up']}
        style={{ borderColor: theme.color, background: theme.navBackground }}
      >
        <p>{genres[0]} </p>
        <p>{genres[1]}</p>
        <p>{genres[2]}</p>
        <p>{genres[3]}</p>
        <p>{genres[4]}</p>
      </div>
    )
  } else if (title === filters[2]) {
    const [checked, setChecked] = useState(true)
    function changeCheckbox() {
      setChecked(!checked)
    }
    return (
      <div
        className={styles['filter__pop-up-year']}
        style={{ borderColor: theme.color, background: theme.navBackground }}
      >
        <label>
          <input
            id="new"
            type="radio"
            checked={checked}
            onChange={changeCheckbox}
          ></input>
          {years[0]}
        </label>
        <label>
          <input
            id="old"
            type="radio"
            checked={!checked}
            onChange={changeCheckbox}
          ></input>
          {years[1]}
        </label>
      </div>
    )
  }
}

export default Filter
