import React from 'react'

import Navbar from '../components/Navbar'
import Middle from '../components/Middle'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div>
      <Navbar />
      <Middle
        top="Home / Services / Robotics & Automation"
        title="Robotics & Automation
        "
        info="Revolutionize Your Industry: Build a Smarter Future with Seamless Processes and Advanced Operations Powered by Robotics and Automation Technology

        "
        image="https://www.xzect.com/assets/images/featured/robotics-and-automation.png"
      />
      <Footer />
    </div>
  )
}

export default page
