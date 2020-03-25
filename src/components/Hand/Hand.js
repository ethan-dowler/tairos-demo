import React from 'react'
import Card from '../Card'

const Hand = ({ cards }) => {
  return (
    <div className="Hand">
      {cards.map(card => (
        <Card card={card} />
      ))}
    </div>
  )
}

export default Hand
