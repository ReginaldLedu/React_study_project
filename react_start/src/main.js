import Nav from './nav_burger'
import CenterBlock from './centerblock'
import SideBar from './sidebar'
import Bar from './bar'
import Footer from './footer'

function Main() {
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

export default Main
