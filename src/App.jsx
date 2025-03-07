import { useState } from 'react'
import Contact from './pages/Contact'
import Home from './pages/Home'
import SiteMenu from './components/SiteMenu/SiteMenu'
import About from './components/About/AboutContent'
import Portfolio from './components/Portfolio/PortfolioContent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
      {/* <About />  Finished*/}
      {/* <Portfolio /> Finished*/}
      {/* <Contact /> */}
      {/* <SiteMenu /> */}
    </>
  )
}

export default App
