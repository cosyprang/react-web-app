import { useState } from 'react'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Nav from './components/Nav/Nav'
import SiteMenu from './components/SiteMenu/SiteMenu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
      {/* <About /> */}
      {/* <Portfolio /> */}
      {/* <Contact /> */}
      {/* <Nav /> */}
      {/* <SiteMenu /> */}
    </>
  )
}

export default App
