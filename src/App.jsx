import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Startpage from './pages/startpage/Startpage'
import ProfilePage from './pages/profilePage/ProfilePage' // ta bort sedan 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Startpage />       återställ innan sista push */}
      <ProfilePage></ProfilePage>
    </>
  )
}

export default App
