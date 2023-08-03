import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Main from './Components/main/main'
import Login from './Components/RegistrationLogin/login'
import Registration from './Components/RegistrationLogin/registration'
import Favorites from './Components/sidebar/favorites'
import NotFound from './notFound'
import TracklistChosen from './Components/sidebar/trackListChosen'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="main" element={<Main />} />
        <Route path="registration" element={<Registration />} />
        <Route path="favorites" element={<Favorites />} />

        <Route path="trackList/:id" element={<TracklistChosen />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
