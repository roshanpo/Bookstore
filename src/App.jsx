import React, { useState } from 'react'
import Home from './pages/Home'
import Navbar from './components/navbar'
import Announcement from './components/Announcement'
import './App.css'
import Slider from './components/Slider'
import Catagories from './components/Catagories'
import Products from './components/Products'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

export default function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <Announcement/>
    <Navbar/>
    <Slider/>
    <Catagories/>
    <Products/>
    <Newsletter/>
    <Footer/>
    </>
  )
}

