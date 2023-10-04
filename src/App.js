import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './Components/main/main'
import Login from './Components/RegistrationLogin/login'
import Registration from './Components/RegistrationLogin/registration'
import Favorites from './Components/sidebar/favorites'
import NotFound from './notFound'
import TracklistChosen from './Components/sidebar/trackListChosen'
import { Layout } from './layout'
import { useState } from 'react'
import { Provider } from 'react-redux'
import { store } from './Components/store/reducers/index'
import { useSelector } from 'react-redux'
function App() {
  const [startPlay, setStartPlay] = useState({ startPlay: false })
  //const [playProgress, setPlayProgress] = useState(0)
  const [playProgress, setPlayProgress] = useState({ playProgress: 0 })
  const position = useSelector(
    (state) => state.currentPlayingToolkit.initialState
  )
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path=""
          element={
            <Provider store={store}>
              <Layout
                startPlay={startPlay}
                setStartPlay={setStartPlay}
                playProgress={playProgress}
                setPlayProgress={setPlayProgress}
                position={position}
              ></Layout>
            </Provider>
          }
        >
          <Route
            path="main"
            element={
              <Provider store={store}>
                <Main
                  startPlay={startPlay}
                  setStartPlay={setStartPlay}
                  playProgress={playProgress}
                  setPlayProgress={setPlayProgress}
                />
              </Provider>
            }
          />
          <Route
            path="trackList/:id"
            element={
              <Provider store={store}>
                <TracklistChosen
                  startPlay={startPlay}
                  setStartPlay={setStartPlay}
                  playProgress={playProgress}
                  setPlayProgress={setPlayProgress}
                />
              </Provider>
            }
          />

          <Route
            path="favorites"
            element={
              <Provider store={store}>
                <Favorites
                  startPlay={startPlay}
                  setStartPlay={setStartPlay}
                  playProgress={playProgress}
                  setPlayProgress={setPlayProgress}
                  position={position}
                />
              </Provider>
            }
          />
        </Route>

        <Route
          index
          path="/"
          element={
            <Provider store={store}>
              <Login />
            </Provider>
          }
        />

        <Route path="registration" element={<Registration />} />
        {/*<Route
          path=""
          element={
            <Layout
              startPlay={startPlay}
              setStartPlay={setStartPlay}
              playProgress={playProgress}
              setPlayProgress={setPlayProgress}
              position={position}
            ></Layout>
          }
			></Route>*/}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
