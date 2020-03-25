import React from 'react'
import * as DeckTypes from '../../data/DeckTypes'

const Deck = ({ type }) => {
  const data = DeckTypes[type]
  if (data === undefined) return <div>Unknown Deck Type: {type}</div>

  return (
    <div className="Deck">
      <div className="Deck-name">{data.name}</div>
      <div className='Deck-skills'>
        {data.skills.join(",")}
      </div>
    </div>
  )
}

export default Deck
