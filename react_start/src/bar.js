function Bar() {
  return (
    <div className="bar__content">
      <div className="bar__player-progress"></div>
      <div className="bar__player-block">
        <div className="bar__player player">
          <div className="player__controls">
            <div className="player__btn-prev">
              <svg className="player__btn-prev-svg"></svg>
            </div>
            <div className="player__btn-play _btn">
              <svg className="player__btn-play-svg"></svg>
            </div>
            <div className="player__btn-next">
              <svg className="player__btn-next-svg"></svg>
            </div>
            <div className="player__btn-repeat _btn-icon">
              <svg className="player__btn-repeat-svg"></svg>
            </div>
            <div className="player__btn-shuffle _btn-icon">
              <svg className="player__btn-shuffle-svg"></svg>
            </div>
          </div>
          <div className="player__track-play track-play">
            <div className="track-play__contain">
              <div className="track-play__image">
                <svg className="track-play__svg"></svg>
              </div>
              <div className="track-play__author">
                <a className="track-play__author-link" href="http://">
                  Ты та...
                </a>
              </div>
              <div className="track-play__album">
                <a className="track-play__album-link" href="http://">
                  Баста
                </a>
              </div>
            </div>
            <div className="track-play__like-dis">
              <div className="track-play__like _btn-icon">
                <svg className="track-play__like-svg"></svg>
              </div>
              <div className="track-play__dislike _btn-icon">
                <div className="track-play__dislike-svg"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="bar__volume-block volume">
          <div className="volume__content">
            <div className="volume__image">
              <svg className="volume__svg" alt="volume"></svg>
            </div>
            <div className="volume__progress _btn">
              <input
                className="volume__progress-line _btn"
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
