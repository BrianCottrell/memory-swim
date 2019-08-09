import React from 'react'

const Card = ({ className, id, name, onClick }) => {

  return ( 
    <li className={className}>
      <a className="Card__element" onClick={() => onClick(id, name)}>
        <div className="Card__contents Card__contents--back">
          ?
        </div>
        <div className="Card__contents Card__contents--front">
          <img src={"https://res.cloudinary.com/dhl3gjazr/image/upload/v1565319492/deep-dive/"+name+".png"} alt={name} />
        </div>
      </a>
    </li>
  )
}

export default Card
