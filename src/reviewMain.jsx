import React from 'react'
import ReactDOM from 'react-dom/client'
import ReviewPage from './pages/reviewpage/ReviewPage.jsx'
import './index.css'
import './pages/reviewpage/ReviewPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReviewPage />
  </React.StrictMode>,
)
