import Image from 'next/image'

function Card({ image, course, to }) {
  return (
    <div className="card">
      <Image
        width={'280'}
        height={'180'}
        src={image}
        alt=""
      />
      <h1>{course}</h1>
      <a href={to}>Get Started</a>
    </div>
  )
}

export default Card
