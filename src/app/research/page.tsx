import React from 'react'

import Navbar from '../components/Navbar'
import Middle from '../components/Middle'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div>
      <Navbar />
      <Middle
        top="Home / Services / Research and Development"
        title="Research and Development
        "
        info="Forging and Fueling Innovations: Empowering Industries through Cutting-Edge Research and Development Solutions for Breakthroughs, Differentiation, and Sustainable Success.
        "
        image="https://www.xzect.com/assets/images/featured/research-and-development.png"
      />
      <Footer />
    </div>
  )
}

export default page
