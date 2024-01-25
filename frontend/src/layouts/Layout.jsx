import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

const Layout = () => {
  return (
    <div className = "flex flex-col min-h-screen">
      <Header />
      <Hero/>
      <Footer/>
    </div>
  )
}

export default Layout
