'use client'

import React, { useState } from 'react'
import { RiMenu2Fill } from 'react-icons/ri'
import Image from 'next/image'

const Navbar = () => {
  const [click, setClick] = useState(false)
  console.log(click)

  const handleClick = () => {
    setClick(!click)
  }
  return (
    <>
      {/* NAVBAR */}
      <div className={click ? 'active' : 'nav'}>
        <div className="inner-nav">
          <span className="span">
            <Image
              height={38}
              width={38}
              src="	https://www.xzect.com/assets/images/xzect-logo.svg"
              alt=""
            />
            <a href="/">Xzect</a>
          </span>
          <button onClick={handleClick}>
            <RiMenu2Fill
              size={48}
              color="white"
            />
          </button>
        </div>
      </div>

      {/* dropdown */}
      <div className={click ? 'dropdown' : 'dropup'}>
        <div className="drop-one drops">
          <ul>
            <li
              style={{ fontWeight: 'bold', color: 'white', fontSize: '24px' }}
            >
              Popular
            </li>
            <li>Magento Development</li>
            <li>Wordpress Development</li>
            <li>Ecommerce</li>
            <li>Shopify</li>
            <li>NFT</li>
            <li>MVP</li>
            <li>Drones</li>
            <li>View all Popular</li>
          </ul>
        </div>
        <div className="drop-two drops">
          <ul>
            <li
              style={{ fontWeight: 'bold', color: 'white', fontSize: '24px' }}
            >
              Services
            </li>
            <li>Software & App Development</li>
            <li>Website Development & SEO</li>
            <li>Cloud Services</li>
            <li>Robotics & Automation</li>
            <li>3D Printing & prototyping</li>
            <li>Data Science & Analytics</li>
            <li>AI & Machine Learning</li>
            <li>IOT, AR & VR</li>
            <li>Blockchain</li>
            <li>Tech Consultancy</li>
            <li>Research & Development</li>
            <li>View all Services</li>
          </ul>
        </div>
        <div className="drop-three drops">
          <ul>
            <li
              style={{ fontWeight: 'bold', color: 'white', fontSize: '24px' }}
            >
              Industries
            </li>
            <li>eCommerce</li>
            <li>Hyperlocal</li>
            <li>Healthcare</li>
            <li>Finance</li>
            <li>Education</li>
            <li>Gaming</li>
            <li>Social Networking</li>
            <li>Agriculture</li>
            <li>Travel & Aviation</li>
            <li>Logistics</li>
            <li>Restaurant</li>
            <li>Real Estate</li>
            <li>View all Industries</li>
          </ul>
        </div>
        <div className="drop-four drops">
          <ul>
            <li
              style={{ fontWeight: 'bold', color: 'white', fontSize: '24px' }}
            >
              Resources
            </li>
            <li>About</li>
            <li>Tech Stark</li>
            <li>Contact Us</li>
            <li>Careers</li>
            <li>Webinars</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Legal Information</li>
            <li>Blog</li>
            <li>Youtube (@xzect_labs)</li>
            <li>Github (@xzect)</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
