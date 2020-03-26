import React from 'react'
import * as DeckTypes from '../../data/DeckTypes'

const DECK_SIZE = 15

const Deck = ({ type, skillsDrawn = [], skillsDiscarded = [] }) => {
  const data = DeckTypes[type]
  if (data === undefined) return <div>Unknown Deck Type: {type}</div>

  return (
    <div className="Deck">
      <div>
        <div className="Deck-name">{data.name}</div>
      </div>
      <div className="Deck-skills">{data.skills.join(',')}</div>
      <div className="Deck-counters">
        <div className="Deck-deckSize">
          Deck: {DECK_SIZE - skillsDrawn.length}
        </div>
        <div className="Deck-discardSize">
          Discard: {skillsDiscarded.length}
        </div>
      </div>
    </div>
  )
}

export default Deck
