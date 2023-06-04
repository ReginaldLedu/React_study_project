import './App.css'
import Nav from './nav_burger'
import CenterBlock from './centerblock'
import SideBar from './sidebar'
import Bar from './bar'

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <Nav />
          <CenterBlock />
          <SideBar />
          <Bar />
        </main>
      </div>
    </div>
  )
}

export default App
