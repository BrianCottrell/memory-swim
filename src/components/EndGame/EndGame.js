import React from 'react'

const EndGame = ({ className }) => {

  return (
    <div className={className}>
      <img
        src="https://res.cloudinary.com/dhl3gjazr/image/upload/v1565319492/deep-dive/fishAngler1a.png"
        alt="You won"
        className="youWonImage"
      />

      <p className="youWonText">
        Congratulations!<br />You won!
      </p>

      <br />

      <a href="/new-game" className="newGameLink">
        Play again
      </a>
    </div>
  )
}

export default EndGame
