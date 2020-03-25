import React from 'react'

const EnemyArea = ({ id, card }) => {
  return (
    <div className="EnemyArea">
      <div className="EnemyArea-name">{id}</div>
      <div className="EnemyArea-card">{card}</div>
    </div>
  )
}

export default EnemyArea
