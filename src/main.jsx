import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SpotifyEmbed from './SpotifyEmbed.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <SpotifyEmbed />
  </React.StrictMode>,
)
