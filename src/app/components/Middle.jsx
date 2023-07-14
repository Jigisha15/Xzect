import React from 'react'
import Image from 'next/image'

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
          <Image
            width={280}
            height={400}
            src={image}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Middle
