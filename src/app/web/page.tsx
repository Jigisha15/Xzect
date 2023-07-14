import React from 'react'

import Navbar from '../components/Navbar'
import Middle from '../components/Middle'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div>
      <Navbar />
      <Middle
        top="Home / Services / Website Development & SEO"
        title="Website Development & SEO"
        info="Crafting Your Online Presence: Amplify Your Reach with Our Website Development and SEO Strategies for Enhanced Visibility and Engagement."
        image="https://www.xzect.com/assets/images/featured/website-dev-and-seo.png"
      />
      <Footer />
    </div>
  )
}

export default page
