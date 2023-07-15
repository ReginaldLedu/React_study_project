import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Main from './main'
import Login from './login'
import Registration from './registration'
import Favorites from './favorites'
import NotFound from './notFound'
import TracklistChosen from './trackListChosen'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/favorites" element={<Favorites />} />

        <Route path="/trackList/:id" element={<TracklistChosen />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
