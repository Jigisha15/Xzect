import React from 'react'

import Navbar from '../components/Navbar'
import Middle from '../components/Middle'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div>
      <Navbar />
      <Middle
        top="Home / Services / IOT, AR and VR"
        title="IOT, AR and VR
        "
        info="Immersive Technologies for a Connected Future: Explore the Convergence of IoT, AR, and VR for Enhanced and Futuristic Experiences.

        "
        image="https://www.xzect.com/assets/images/featured/iot-ar-vr.png"
      />
      <Footer />
    </div>
  )
}

export default page
