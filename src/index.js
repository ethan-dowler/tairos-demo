import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import './index.scss'
import './vendor/normalize.scss'

const body = document.querySelector('body')

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  body
)
