function Software({ to, image, lang }) {
  return (
    <a
      href={to}
      className="soft-card"
      target="_blank"
    >
      <img
        src={image}
        alt=""
      />
      &nbsp;&nbsp;&nbsp;
      <h1>{lang}</h1>
    </a>
  )
}

export default Software
