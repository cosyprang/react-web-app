import { useState } from 'react'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Nav from './components/Nav/Nav'
import SiteMenu from './components/SiteMenu/SiteMenu'
import About from './components/About/AboutContent'
import Portfolio from './components/Portfolio/PortfolioContent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Home /> Finished */}
      {/* <About />  Finished*/}
      <Portfolio />
      {/* <Contact /> */}
      {/* <Nav /> */}
      {/* <SiteMenu /> */}
    </>
  )
}

export default App
