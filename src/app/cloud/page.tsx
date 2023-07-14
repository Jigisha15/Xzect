import React from 'react'

import Navbar from '../components/Navbar'
import Middle from '../components/Middle'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div>
      <Navbar />
      <Middle
        top="Home / Services / Cloud Services"
        title="Cloud Services
        "
        info="Seamless Cloud Solutions for Modern Businesses: Drive Growth and Efficiency of your Business with Comprehensive Services and Scalable Infrastructure.
        "
        image="https://www.xzect.com/assets/images/featured/cloud-services.png"
      />
      <Footer />
    </div>
  )
}

export default page
