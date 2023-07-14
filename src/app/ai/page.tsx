import React from 'react'

import Navbar from '../components/Navbar'
import Middle from '../components/Middle'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div>
      <Navbar />
      <Middle
        top="Home / Services / AI and Machine Learning"
        title="AI and Machine Learning
        "
        info="Forging Ahead into the Advanced Era: Unlocking Hidden Patterns and Opportunities by Harnessing AI & Machine Learning for Accurate Predictions and Strategic Business Advancements.
        "
        image="https://www.xzect.com/assets/images/featured/ai-and-machine-learning.png"
      />
      <Footer />
    </div>
  )
}

export default page
