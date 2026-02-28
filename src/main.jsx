// main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> {/* यहाँ भित्र अरु कुनै <BrowserRouter> हुनु हुँदैन */}
  </React.StrictMode>,
)
