import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import { StylesProvider } from '@material-ui/core/styles'

import Signin from 'components/Signin'
import Signup from 'components/Signup'

const App = ({ history, onSignIn }) => (
  <StylesProvider>
    <Router history={history}>
      <Switch>
        <Route path="/auth/signin">
          <Signin onSignIn={onSignIn}/>
        </Route>
        <Route path="/auth/signup">
          <Signup onSignIn={onSignIn}/>
        </Route>
        <Route />
      </Switch>
    </Router>
  </StylesProvider>
)

export default App
