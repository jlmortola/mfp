import React, { useEffect, useState } from 'react'
import { Redirect, Route, Router, Switch, useHistory } from 'react-router-dom'
import Header from 'components/Header'
import MarketingModule from 'components/MarketingModule'
import AuthModule from 'components/AuthModule'
import Dashboard from 'components/Dashboard'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'
import { createBrowserHistory } from 'history'

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

const history = createBrowserHistory()

const App = () => {
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    if(isAuth) history.push('/dashboard')
  }, [isAuth])

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <Header isAuth={isAuth} onSignOut={() => setIsAuth(false)}/>
        <Switch>
          <Route path="/auth">
            <AuthModule onSignIn={() => setIsAuth(true)}/>
          </Route>
          <Route path="/dashboard">
            {!isAuth && <Redirect to="/"/>}
            <Dashboard />
          </Route>
          <Route path="/" component={MarketingModule} />
        </Switch>
      </StylesProvider>
    </Router>
  )
}

export default App
