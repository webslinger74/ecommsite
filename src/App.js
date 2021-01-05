import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import Pages from './pages';

function App() {
  const {AboutPage} = Pages;
  
  return (
    <div>
      <AboutPage />
  <h4>comfy sloth starter</h4>
  </div>
  )
}

export default App
