import React from 'react'
import ReactDOM from 'react-dom/client'
import SignupPage from './pages/signupPage/SignupPage.jsx'
import './index.css'
import './pages/signupPage/SignupPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SignupPage />
  </React.StrictMode>,
)