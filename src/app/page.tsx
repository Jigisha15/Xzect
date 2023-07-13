import { RiMenu2Fill } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'

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

      {/* FOOTER */}
    </div>
  )
}
