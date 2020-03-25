import React from 'react'
import Hand from '../Hand'

const PlayerArea = ({ id, deckOne, deckTwo, cardsInHand }) => {
  return (
    <div className="PlayerArea">
      <div className="PlayerArea-name">{id}</div>

      <div className="PlayerArea-area">
        <div className="PlayerArea-deck PlayerArea-deck--one">{deckOne}</div>

        <div className="PlayerArea-deck PlayerArea-deck--two">{deckTwo}</div>

        <div className="PlayerArea-hand">
          <Hand cards={cardsInHand} />
        </div>
      </div>
    </div>
  )
}

export default PlayerArea
