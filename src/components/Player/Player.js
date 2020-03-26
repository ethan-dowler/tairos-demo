import React from 'react'
import Deck from '../Deck'
import Hand from '../Hand'

const Player = ({ deckOne, deckTwo, skillsInHand }) => {
  return (
    <div className="Player">
      <div className="Player-deck Player-deck--one">
        <Deck {...deckOne} />
      </div>

      <div className="Player-deck Player-deck--two">
        <Deck {...deckTwo} />
      </div>

      <div className="Player-hand">
        <Hand skillTypes={skillsInHand} />
      </div>
    </div>
  )
}

export default Player
