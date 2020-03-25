import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import './index.scss'
import './vendor/normalize.scss'

const main = document.querySelector('[react-app]')

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  main
)
