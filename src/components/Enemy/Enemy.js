import React from 'react'
import * as EnemyTypes from '../../data/EnemyTypes'

const Enemy = ({ type, damageTaken = 0 }) => {
  const data = EnemyTypes[type]
  if (data === undefined) return <div>Unknown Enemy Type: {type}</div>

  return (
    <div className="Enemy">
      <div className="Enemy-name">{data.name}</div>
      <div className="Enemy-health">Health: {data.health - damageTaken}</div>
      <div className="Enemy-attack">Attack: {data.attack}</div>
    </div>
  )
}

export default Enemy
