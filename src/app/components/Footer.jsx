import React from 'react'

import { CgFacebook } from 'react-icons/cg'
import { BsInstagram } from 'react-icons/bs'
import { BiLogoLinkedin } from 'react-icons/bi'
import { BsTwitter } from 'react-icons/bs'
import { FaPinterestP } from 'react-icons/fa'
import { BsYoutube } from 'react-icons/bs'

const Footer = () => {
  return (
    <>
      {/* LOWER */}
      <div className="lower">
        <div className="bgi"></div>
        <div className="bg-text">
          <h1>Innovate. Validate. Launch</h1>
          <h2>
            <span>Let's transform your idea into reality with our</span>
            <span>MVP develpoment services.</span>
          </h2>
          <button>Book a free consultation!</button>
        </div>
      </div>

      <div className="footer">
        <div className="footer-inner">
          <div className="footer-one">
            <h1>Xzect Labs Pvt. Ltd.</h1>
            <p className="p1">
              Xzect provides a diverse array of services that enable both
              businesses and individuals to bring their vision to life . Our
              specialties include software development, website design and SEO,
              cloud services, robotics and automation, 3D printing and
              prototyping, data science and analytics, AI and machine learning,
              IOT, AR and VR, blockchain, and other tech-related services. Our
              team of experienced professionals is available to assist with the
              design and development of new products, exploration of robotics
              and automation possibilities, or any other requirements.
            </p>
            <p className="p2">
              Registered Address: 203, 2-A/3, Asaf Ali Road, Delhi - 110002
            </p>
            <p className="p2">CIN: U72200DL2022PTC408714</p>
            <p className="p2">GST: 07AAACX4373J1Z2</p>

            <span className="social">
              <ul>
                <a
                  className="fb"
                  href="https://facebook.com"
                  target="_blank"
                >
                  <CgFacebook
                    size={30}
                    style={{ marginTop: '13px' }}
                  />
                </a>
                <a
                  className="ig"
                  href="https://instagram.com"
                  target="_blank"
                >
                  <BsInstagram size={20} />
                </a>
                <a
                  className="lk"
                  href="https://linkedin.com"
                  target="_blank"
                >
                  <BiLogoLinkedin size={20} />
                </a>
                <a
                  className="tw"
                  href="https://twitter.com"
                  target="_blank"
                >
                  <BsTwitter size={20} />
                </a>
                <a
                  className="pt"
                  href="https://pinterest.com"
                  target="_blank"
                >
                  <FaPinterestP size={20} />
                </a>
                <a
                  className="yt"
                  href="https://youtube.com"
                  target="_blank"
                >
                  <BsYoutube size={20} />
                </a>
              </ul>
            </span>
          </div>

          <div className="footer-two lists">
            <ul>
              <li
                style={{ fontWeight: '600', color: 'white', fontSize: '24px' }}
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

          <div className="footer-three lists">
            <ul>
              <li
                style={{ fontWeight: '600', color: 'white', fontSize: '24px' }}
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

          <div className="footer-four lists">
            <ul>
              <li
                style={{ fontWeight: '600', color: 'white', fontSize: '24px' }}
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
      </div>
    </>
  )
}

export default Footer
