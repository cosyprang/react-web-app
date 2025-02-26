import { useState } from 'react'
// import Home from './pages/Home'
import SiteMenu from './components/SiteMenu/SiteMenu'
import SiteContent from './components/SiteContent/SiteContent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SiteMenu />
      <SiteContent />
    </>
  )
}

export default App
