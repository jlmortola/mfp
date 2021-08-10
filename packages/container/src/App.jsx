import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from 'components/Header'
import MarketingModule from 'components/MarketingModule'
import AuthModule from 'components/AuthModule'

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/auth" component={AuthModule} />
      <Route path="/" component={MarketingModule} />
    </Switch>
  </BrowserRouter>
)

export default App
