import React from 'react'

const Middle = ({ top, title, info, image }) => {
  return (
    <div className="middle-container">
      <div className="middle">
        <div className="m-left">
          <h3>{top}</h3>
          <h1>{title}</h1>
          <p>{info}</p>
          <button>Consult with an Expert</button>
        </div>
        <div className="m-right">
          <img
            src={image}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Middle
