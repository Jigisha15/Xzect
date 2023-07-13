function Software({ image, lang }) {
  return (
    <div className="soft-card">
      <img
        src={image}
        alt=""
      />
      &nbsp;&nbsp;&nbsp;
      <h1>{lang}</h1>
    </div>
  )
}

export default Software
