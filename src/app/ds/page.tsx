import React from 'react'

import Navbar from '../components/Navbar'
import Middle from '../components/Middle'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div>
      <Navbar />
      <Middle
        top="Home / Services / Data Science & Analytics"
        title="Data Science & Analytics
        "
        info="Unlocking Data Potential: Driving Business Success with Strategic Advantage and Growth through Data Science and Analytics Solutions.
        "
        image="https://www.xzect.com/assets/images/featured/data-science-and-analytics.png"
      />
      <Footer />
    </div>
  )
}

export default page
