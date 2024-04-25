import { useState } from 'react'
import './App.css'
import Startpage from './pages/startpage/Startpage'
import SignupPage from './pages/signupPage/SignupPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Startpage />
    </>
  )
}

export default App