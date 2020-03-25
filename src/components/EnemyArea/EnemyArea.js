import React from 'react'
import Enemy from '../Enemy'

const EnemyArea = ({ name, type }) => {
  return (
    <div className="EnemyArea">
      <div className="EnemyArea-name">{name}</div>
      <div className="EnemyArea-card">
        <Enemy type={type} />
      </div>
    </div>
  )
}

export default EnemyArea
