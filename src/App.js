import React, { useRef } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import SliderInfo from './components/SliderInfo'
import News from './components/News'
import Schedule from './components/Schedule'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import './App.css'

function App() {
  const twitter = useRef()
  return (
    <>
      <Navbar twitter={twitter} />
      <Header />
      <SliderInfo twitter={twitter} />
      <News />
      <Schedule />
      <Gallery />
      <Footer />
    </>
  )
}

export default App
