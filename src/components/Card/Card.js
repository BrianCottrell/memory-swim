import React from 'react'

const Card = ({ className, id, name, onClick }) => {
  const image = require(`./images/${name}.svg`)

  return image ? (
    <li className={className}>
      <a className="Card__element" onClick={() => onClick(id, name)}>
        <div className="Card__contents Card__contents--back">
          ?
        </div>
        <div className="Card__contents Card__contents--front">
          <img src="https://www.online-convert.com/qrcode/4e9a2faa-8fe0-44cc-9909-0c37d0f13fc5/2d50a7d5-525e-4778-ac13-69295a51194f" alt={name} />
        </div>
      </a>
    </li>
  ) : null
}

export default Card
