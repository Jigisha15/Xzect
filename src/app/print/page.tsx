import React from 'react'

import Navbar from '../components/Navbar'
import Middle from '../components/Middle'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div>
      <Navbar />
      <Middle
        top="Home / Services / 3D Printing & Prototyping"
        title="3D Printing & Prototyping
        "
        info="Redefining Manufacturing: Explore the Boundless Potential of 3D Printing and Prototyping to Bring Ideas to Life
        "
        image="https://www.xzect.com/assets/images/featured/3d-printing-and-prototyping.png"
      />
      <Footer />
    </div>
  )
}

export default page
