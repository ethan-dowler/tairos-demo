import React from 'react'
import Enemy from '../Enemy'

const EnemyArea = ({ name, ...props }) => {
  return (
    <div className="EnemyArea">
      <div className="EnemyArea-name">{name}</div>
      <div className="EnemyArea-card">
        <Enemy {...props} />
      </div>
    </div>
  )
}

export default EnemyArea
