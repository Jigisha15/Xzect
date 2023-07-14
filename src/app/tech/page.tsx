import React from 'react'

import Navbar from '../components/Navbar'
import Middle from '../components/Middle'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div>
      <Navbar />
      <Middle
        top="Home / Services / Tech Consultancy"
        title="Tech Consultancy
        "
        info="Guiding Your Digital Journey: Trusted Tech Consultancy Services for Effective Planning, Implementation, and Optimization.
        "
        image="https://www.xzect.com/assets/images/featured/tech-consultancy.png"
      />
      <Footer />
    </div>
  )
}

export default page
