
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function Root() {
  const [dark, setDark] = useState(false)
  return (
    <div className={dark ? 'dark' : ''}>
      <button
        onClick={() => setDark(!dark)}
        className="fixed top-4 right-4 bg-secondary text-primary px-4 py-2 rounded-md shadow"
      >
        {dark ? '☀️ Ljust läge' : '🌙 Mörkt läge'}
      </button>
      <App />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
)
