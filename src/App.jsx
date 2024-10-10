import React from 'react'
import Navbar from './navbar'
import Home from './Home'
import Events from './Events'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'

function App() {
  return (
    <div>
      <Navbar/>
      <div id="home-section">
        <Home />
      </div>
      <div id="events-section">
        <Events />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App