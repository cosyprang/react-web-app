import { useState } from 'react'
// import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Home /> */}
      {/* <About /> */}
      <Portfolio />
    </>
  )
}

export default App
