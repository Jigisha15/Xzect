import Image from 'next/image'

function Software({ to, image, lang }) {
  return (
    <a
      href={to}
      className="soft-card"
      target="_blank"
    >
      <Image
        height={28}
        width={28}
        src={image}
        alt=""
      />
      &nbsp;&nbsp;&nbsp;
      <h1>{lang}</h1>
    </a>
  )
}

export default Software
