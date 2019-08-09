import React from 'react'

const LevelLink = ({ children, onClick, type }) => {

  return (
    <a onClick={onClick} className="NewGame__link">
      <img src={"https://res.cloudinary.com/dhl3gjazr/image/upload/v1565319492/deep-dive/"+type+".png"} alt="Level" />

      {children}
    </a>
  )
}

const NewGame = ({
  className,
  onLevelSelect
}) => (
  <div className={className}>
    <h1 className="NewGame__title">
      Select level
    </h1>

    <ul>
      <li>
        <LevelLink
          type="fishLantern1"
          onClick={() => onLevelSelect('easy')}
        >
          Easy
        </LevelLink>
      </li>

      <li>
        <LevelLink
          type="fishDragon1a"
          onClick={() => onLevelSelect('medium')}
        >
          Medium
        </LevelLink>
      </li>

      <li>
        <LevelLink
          type="fishAngler1a"
          onClick={() => onLevelSelect('hard')}
        >
          Hard
        </LevelLink>
      </li>

      <li>
        <LevelLink
          type="fishViper1a"
          onClick={() => onLevelSelect('very-hard')}
        >
          Very hard
        </LevelLink>
      </li>
    </ul>
  </div>
)

export default NewGame
