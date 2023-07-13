import Card from './components/Card'
import data from './data/Data'

import { RiMenu2Fill } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'

import { CgFacebook } from 'react-icons/cg'
import { BsInstagram } from 'react-icons/bs'
import { BiLogoLinkedin } from 'react-icons/bi'
import { BsTwitter } from 'react-icons/bs'
import { FaPinterestP } from 'react-icons/fa'
import { BsYoutube } from 'react-icons/bs'

export default function Home() {
  return (
    <div>
      {/* <h1>Shree Ganesh</h1> */}

      {/* NAVBAR */}
      <div className="nav">
        <div className="inner-nav">
          <span className="span">
            <img
              src="	https://www.xzect.com/assets/images/xzect-logo.svg"
              alt=""
            />
            <h1>Xzect</h1>
          </span>
          <button>
            <RiMenu2Fill
              size={48}
              color="white"
            />
          </button>
        </div>
      </div>

      {/* LANDING PAGE  */}
      <div className="landing">
        <div className="left">
          <div className="left-top">
            <span style={{ color: '#BD1052' }}>Build, </span>
            <span style={{ color: '#5e76fd' }}>test, </span>
            <span style={{ color: '#A2A2A2' }}>and </span>
            <br />
            <span style={{ color: '#019267' }}>
              execute your <br /> ideas{' '}
            </span>
            <span style={{ color: '#A2A2A2' }}>with our </span> <br />
            <span style={{ color: '#F1AE50' }}>
              innovative <br />
              solutions
            </span>
            <span style={{ color: '#5e76fd' }}>.</span>
          </div>

          <div className="left-bottom">
            <button className="chat-btn1">
              <BsWhatsapp
                color="white"
                size={30}
              />
              &nbsp;&nbsp; Chat now on Whatsapp
            </button>
            <button className="chat-btn2">Explore Our Services</button>
          </div>
        </div>
        <div className="right">
          <img
            src="https://www.xzect.com/assets/images/xzect-logo.svg"
            alt=""
          />
        </div>
      </div>

      {/* CUSTOM SOLUTIONS */}
      <div className="middle">
        <h1>Customised Solutions for All Your Business Needs</h1>
        <h4>
          Take Your Business to the Next Level with Our Industry-Leading
          Services
        </h4>
        <div className="card-container">
          {data.map((items, index) => (
            <div
              className="card-inner"
              key={index}
            >
              <Card
                course={items.course}
                image={items.image}
              />
            </div>
          ))}
        </div>
      </div>

      {/* SOFTWARES */}

      {/* FOOTER */}
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
                <li className="fb">
                  <CgFacebook
                    size={30}
                    style={{ marginTop: '13px' }}
                  />
                </li>
                <li className="ig">
                  <BsInstagram size={20} />
                </li>
                <li className="lk">
                  <BiLogoLinkedin size={20} />
                </li>
                <li className="tw">
                  <BsTwitter size={20} />
                </li>
                <li className="pt">
                  <FaPinterestP size={20} />
                </li>
                <li className="yt">
                  <BsYoutube size={20} />
                </li>
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
    </div>
  )
}
