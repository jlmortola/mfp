import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

export const mount = (element) => {
  if (element) ReactDOM.render(<App />, element)
}

if (process.env.NODE_ENV === 'development') mount(document.getElementById('marketing-dev'))
