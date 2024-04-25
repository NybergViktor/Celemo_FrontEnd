import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Startpage from './pages/startpage/Startpage'
import LoginPage from "./pages/LoginPage/LoginPage"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Startpage /> */}
      <LoginPage />
    

    </>
  )
}

export default App
