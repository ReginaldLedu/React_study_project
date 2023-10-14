import { useState } from 'react'
import { useEffect } from 'react'
import styles from './filter.module.css'
import { useThemeContext } from '../main/main'
import { useSelector, useDispatch } from 'react-redux'
import { renderTracks } from '../store/reducers/renderedTracks'
import { filterByPerformer } from '../store/reducers/performerFiltersSlice'
import {
  filteredByPerformers,
  filteredByPerformersClean,
} from '../store/reducers/filteredByPerformerPlaylist'
import { defaultFilter } from '../store/reducers/performerFiltersSlice'
import {
  addfilterByGenre,
  genreDefaultFilter,
} from '../store/reducers/genreFilterSlice'
import {
  filteredByGenres,
  filteredByGenresClean,
} from '../store/reducers/filteredByGenrePlaylist'

function Filter() {
  const [activeIndex, setActiveIndex] = useState(null)
  const [activeGenre, setActiveGenre] = useState(null)
  const [activeYear, setActiveYear] = useState(null)
  const { theme } = useThemeContext()
  const dispatch = useDispatch()

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
        onShow={(e) => {
          e.stopPropagation()
          dispatch(filteredByGenresClean())
          dispatch(genreDefaultFilter())

          activeIndex === null
            ? setActiveIndex('performer')
            : setActiveIndex(null)
          activeYear === 'year' ? setActiveYear(null) : console.log(activeYear)
          activeGenre === 'genre'
            ? setActiveGenre(null)
            : console.log(activeGenre)
        }}
      ></FiltersShow>
      <FiltersShow
        className={`${styles['filter__button']} ${styles['button-year']} ${styles['_btn-text']}`}
        title="году выпуска"
        isActive={activeYear === null}
        onShow={() => {
          activeYear === 'year' ? setActiveYear(null) : setActiveYear('year')
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
        onShow={(e) => {
          e.stopPropagation()
          dispatch(defaultFilter())
          dispatch(filteredByPerformersClean())

          activeGenre === null ? setActiveGenre('genre') : setActiveGenre(null)
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
  /* eslint-disable */ activeIndex,
  /* eslint-disable */ setActiveIndex,
}) {
  const { theme } = useThemeContext()

  return (
    <div
      className={`${styles['filter__button']} ${styles['_btn-text']}`}
      style={{ borderColor: theme.color, background: theme.background }}
      onClick={onShow}
    >
      {title}
      {isActive ? ' ' : List(isActive, title, activeIndex, setActiveIndex)}
      {isActive ? ' ' : Chosen(isActive)}
    </div>
  )
}

const Chosen = (isActive) => {
  const filtersFromSlice = useSelector(
    (state) => state.filterToolkit.initialState
  )
  const genreFilters = useSelector(
    (state) => state.genreFilterToolkit.initialState
  )
  const tracks = useSelector((state) => state.allTracksToolkit.initialState)
  const dispatch = useDispatch()
  return (
    <>
      {filtersFromSlice.length > 0 ? (
        <div
          className={styles['chosen']}
          onClick={(event) => {
            event.stopPropagation()
            dispatch(defaultFilter())
            dispatch(filteredByPerformersClean())
            dispatch(renderTracks(tracks))
            event.target.style.display = 'none'
          }}
        >
          {filtersFromSlice.length}
        </div>
      ) : genreFilters.length > 0 ? (
        <div
          className={styles['chosen']}
          onClick={(event) => {
            event.stopPropagation()
            dispatch(filteredByGenresClean())
            dispatch(genreDefaultFilter())
            dispatch(renderTracks(tracks))
            dispatch(defaultFilter())
            event.target.style.display = 'none'
          }}
        >
          {genreFilters.length}
        </div>
      ) : (
        ' '
      )}
    </>
  )
}

function List(isActive, title, activeIndex, setActiveIndex) {
  const tracks = useSelector((state) => state.allTracksToolkit.initialState)

  const renderedTracks = useSelector(
    (state) => state.renderedTracksToolkit.initialState
  )
  function sortByNew(arr) {
    const tracksWithDates = arr.filter(function (item) {
      return item.release_date !== null
    })
    const sortNew = (a, b) => {
      let dateA = new Date(a.release_date)
      let dateB = new Date(b.release_date)
      return dateB - dateA
    }
    return tracksWithDates.sort(sortNew)
  }
  function sortByOld(arr) {
    const tracksWithDates = arr.filter(function (item) {
      return item.release_date !== null
    })
    const sortOld = (a, b) => {
      let dateA = new Date(a.release_date)
      let dateB = new Date(b.release_date)
      return dateA - dateB
    }
    return tracksWithDates.sort(sortOld)
  }

  const dispatch = useDispatch()

  const performers = []
  const performersForFilter = (performers, tracks) => {
    for (let i = 0; i < tracks.length; i++) {
      if (!performers.includes(tracks[i].author))
        performers.push(tracks[i].author)
    }
    return performers
  }
  const genres = []
  const genresForFilter = (genres, tracks) => {
    for (let i = 0; i < tracks.length; i++) {
      if (!genres.includes(tracks[i].genre)) {
        genres.push(tracks[i].genre)
      }
    }
    return genres
  }
  const renderPlaylist = (tracks) => {
    dispatch(renderTracks(tracks))
  }
  const addFilterToSlice = (item) => {
    dispatch(filterByPerformer(item))
  }
  performersForFilter(performers, tracks)
  genresForFilter(genres, tracks)
  const filtersFromSlice = useSelector(
    (state) => state.filterToolkit.initialState
  )
  const genreFilters = useSelector(
    (state) => state.genreFilterToolkit.initialState
  )

  const filters = ['исполнителю', 'жанру', 'году выпуска']
  const { theme } = useThemeContext()
  const filteredByPerf = useSelector(
    (state) => state.filteredPlaylistToolkit.initialState
  )

  const filteredByGenreTracks = useSelector(
    (state) => state.filteredByGenrePlaylisToolkit.initialState
  )
  function addGenretoFilter(item) {
    if (genreFilters.find((genre) => genre === item) === undefined) {
      dispatch(addfilterByGenre(item))
    }
  }
  function renderFilteredByGenre(filtered) {
    for (let i = 0; i < filtered.length; i++) {
      if (
        filteredByGenreTracks.find((item) => item.id === filtered[i].id) ===
        undefined
      ) {
        dispatch(filteredByGenres(filtered[i]))
      }
    }
  }

  function renderFilteredByPerformer(filtered) {
    for (let i = 0; i < filtered.length; i++) {
      if (
        filteredByPerf.find((item) => item.id === filtered[i].id) === undefined
      ) {
        dispatch(filteredByPerformers(filtered[i]))
      }
    }
  }
  function addPerformerToFilter(item) {
    if (
      filtersFromSlice.find((performer) => performer === item) === undefined
    ) {
      addFilterToSlice(item)
    }
  }

  useEffect(() => {
    genreFilters.length > 0
      ? renderPlaylist(filteredByGenreTracks)
      : renderPlaylist(renderedTracks)
  }, [genreFilters])

  useEffect(() => {
    filtersFromSlice.length > 0
      ? renderPlaylist(filteredByPerf)
      : renderPlaylist(renderedTracks)
  }, [filtersFromSlice])

  return (
    <>
      {title === filters[0] ? (
        <div
          className={styles['filter__pop-up_wrapper']}
          style={{ borderColor: theme.color, background: theme.navBackground }}
        >
          <div
            className={styles['filter__pop-up']}
            style={{
              borderColor: theme.color,
              background: theme.navBackground,
            }}
          >
            {performers.map((item) => (
              <p
                style={{ color: theme.color }}
                key={item}
                onClick={(e) => {
                  e.stopPropagation()
                  addPerformerToFilter(item)
                  renderFilteredByPerformer(
                    tracks.filter(function (track) {
                      return track.author === item
                    })
                  )
                }}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      ) : title === filters[1] ? (
        <div
          className={styles['filter__pop-up_wrapper']}
          style={{ borderColor: theme.color, background: theme.navBackground }}
        >
          <div
            className={styles['filter__pop-up']}
            style={{
              borderColor: theme.color,
              background: theme.navBackground,
            }}
          >
            {genres.map((item) => (
              <p
                style={{ color: theme.color }}
                key={item}
                onClick={(e) => {
                  e.stopPropagation()
                  addGenretoFilter(item)
                  renderFilteredByGenre(
                    tracks.filter(function (track) {
                      return track.genre === item
                    })
                  )
                }}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      ) : title === filters[2] ? (
        <div
          className={styles['filter__pop-up_wrapper']}
          style={{ borderColor: theme.color, background: theme.navBackground }}
        >
          <div
            className={styles['filter__pop-up']}
            style={{
              borderColor: theme.color,
              background: theme.navBackground,
            }}
          >
            <p
              style={{ color: theme.color }}
              onClick={() => {
                renderPlaylist(sortByNew(renderedTracks))
              }}
            >
              Более новые
            </p>
            <p
              style={{ color: theme.color }}
              onClick={() => {
                renderPlaylist(sortByOld(renderedTracks))
              }}
            >
              Более старые
            </p>
            <p
              style={{ color: theme.color }}
              onClick={() => renderPlaylist(tracks)}
            >
              По умолчанию
            </p>
          </div>
        </div>
      ) : (
        ' '
      )}
    </>
  )
}

export default Filter
