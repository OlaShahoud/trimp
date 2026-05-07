import { useState } from 'react'

import TopBanner from './components/TopBanner'
import Home from './components/Home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showBanner, setShowBanner] = useState(true)

  const handleCloseBanner = () => {
    setShowBanner(false)
  }

  return (
    <>
   
      <Home />
    </>
  )
}

export default App
