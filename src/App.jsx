import { useState } from 'react'
import './App.css'
import Startpage from './pages/startpage/Startpage'
import ProfilePage from './pages/profilePage/ProfilePage' // ta bort sedan 

function App() {

  return (
    <>
      {/* <Startpage />       återställ innan merge till main */}
      <ProfilePage></ProfilePage> {/** Ta bort */}
    </>
  )
}

export default App;