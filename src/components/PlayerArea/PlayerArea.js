import React from 'react'
import Deck from '../Deck'
import Hand from '../Hand'

const PlayerArea = ({ name, deckOneType, deckTwoType, skillsInHand }) => {
  return (
    <div className="PlayerArea">
      <div className="PlayerArea-name">{name}</div>

      <div className="PlayerArea-deck PlayerArea-deck--one">
        <Deck type={deckOneType} />
      </div>

      <div className="PlayerArea-deck PlayerArea-deck--two">
        <Deck type={deckTwoType} />
      </div>

      <div className="PlayerArea-hand">
        <Hand skillTypes={skillsInHand} />
      </div>
    </div>
  )
}

export default PlayerArea
