import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory, createMemoryHistory } from 'history'
import App from './App'

export const mount = (element, { defaultHistory, initialPath, onNavigate }) => {
  const history = defaultHistory || createMemoryHistory({
    initialEntries: [initialPath]
  })

  if (onNavigate) history.listen(onNavigate)
  
  if (element) ReactDOM.render(<App history={history} />, element)

  return ({
    onParentNavigate: ({ pathname: nextPathname }) => {
      if (history.location.pathname !== nextPathname) history.push(nextPathname)
    }
  })
}

if (process.env.NODE_ENV === 'development') mount(document.getElementById('auth-dev'), { defaultHistory: createBrowserHistory() })
