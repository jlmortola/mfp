import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from 'components/Header'
import MarketingModule from 'components/MarketingModule'

const App = () => (
  <BrowserRouter>
    <Header />
    <MarketingModule />
  </BrowserRouter>
)

export default App
