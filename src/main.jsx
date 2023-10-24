import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js'
ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='container'>
    <App />
  </div>,
)