function Card({ image, course }) {
  return (
    <div className="card">
      <img
        src={image}
        alt=""
      />
      <h1>{course}</h1>
      <a href="">Get Started</a>
    </div>
  )
}

export default Card
