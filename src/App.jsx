import { useState } from 'react'
import './App.css'
import Startpage from './pages/startpage/Startpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Startpage />
    </>
  )
}

export default App;