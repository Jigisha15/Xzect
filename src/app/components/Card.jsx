function Card({ image, course, to }) {
  return (
    <div className="card">
      <img
        src={image}
        alt=""
      />
      <h1>{course}</h1>
      <a href={to}>Get Started</a>
    </div>
  )
}

export default Card
