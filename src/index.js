import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import './index.css'
import './vendor/normalize.css'

const main = document.querySelector('[react-app]')

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  main
)
