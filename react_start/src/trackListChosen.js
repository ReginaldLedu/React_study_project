import { useParams } from 'react-router-dom'
import styles from './sidebar.module.css'
import { trackLists } from './tracks.js'

function TracklistChosen() {
  const params = useParams()
  const trackList = trackLists.find((tracklist) => tracklist.id === params.id)
  return (
    <div key={trackList.id} className={styles['sidebar__item']}>
      Вы выбрали плэйлист {trackList.trackList}
    </div>
  )
}

export default TracklistChosen
