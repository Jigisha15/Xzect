'use client'

import React from 'react'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Card from './components/Card'
import Software from './components/Software'

import data from './data/Data'
import softwares from './data/Software'

import { BsWhatsapp } from 'react-icons/bs'

export default function Home() {
  return (
    <div>
      {/* <h1>Shree Ganesh</h1> */}

      {/* NAVBAR AND DROPDOWN */}
      <Navbar />

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
      <div className="main-middle">
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
                to={items.to}
              />
            </div>
          ))}
        </div>
      </div>

      {/* SOFTWARES */}
      <div className="software">
        <h1>Leverage our software & hardware expertise</h1>
        <p>
          <span>
            Use our services and tech expertise to create disruptive products &
            solutions that can revolutionize your <br />
          </span>
          <span>
            business and stay ahead with evolving technological advancements.
          </span>
        </p>
        <div className="software-container">
          {softwares.map((item, i) => (
            <div
              className="soft-inner"
              key={i}
            >
              <Software
                image={item.image}
                lang={item.lang}
                to={item.to}
              />
            </div>
          ))}
        </div>
        <button>Explore Our Entire Tech Stack</button>
      </div>

      {/* LOWER */}
      {/* FOOTER */}
      <Footer />
    </div>
  )
}
