import React from 'react'

import Navbar from '../components/Navbar'
import Middle from '../components/Middle'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div>
      <Navbar />
      <Middle
        top="Home / services / blockchain Develpoment Service"
        title="Blockchain Development Services
        "
        info="Building a Decentralized Future: Empowering Trust, Security, and Efficiency through the Power of Blockchain Technology.
        "
        image="https://www.xzect.com/assets/images/featured/blockchain.png"
      />
      <Footer />
    </div>
  )
}

export default page
