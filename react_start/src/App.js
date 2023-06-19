//import './App.css'

//import styles from './css/style.css'
//console.log(styles); 
import Nav from './nav_burger'
import CenterBlock from './centerblock'
import SideBar from './sidebar'
import Bar from './bar'
import Footer from './footer'


function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <Nav />
          <CenterBlock />
          <SideBar />
        </main>
        <Bar />
        <Footer />
      </div>
    </div>
  )
}

export default App
