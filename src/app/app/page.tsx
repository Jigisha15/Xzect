'use client'

import Navbar from '../components/Navbar'
import Middle from '../components/Middle'
import Footer from '../components/Footer'

const Print = () => {
  return (
    <div>
      <Navbar />
      <Middle
        top="Home / Services / Software and App Development"
        title="Software and App Development"
        info="Transfrom Your Digital Landscape: Empower Your Vision with our Cutting-Edge Software and App Development Solutions"
        image="https://www.xzect.com/assets/images/featured/software-and-app-dev.png"
      />
      <Footer />
    </div>
  )
}

export default Print
