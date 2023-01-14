import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home'
import About from './components/About'
import Blog from './components/Blog'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App cursor-default w-screen font-publicSans">

      <Navbar />
      <Home />
      <About />
      <Blog />
      <Footer/>
    </div>
  )
}

export default App
