import React from 'react'
import Enemy from '../Enemy'
import StatusBar from '../StatusBar'
import EngagedWithSelector from '../EngagedWithSelector'

const EnemyArea = ({ name, ...props }) => {
  return (
    <div className="EnemyArea">
      <div className="EnemyArea-name">{name}</div>
      <EngagedWithSelector />
      <StatusBar isEnemy={true} />
      <div className="EnemyArea-card">
        <Enemy {...props} />
      </div>
    </div>
  )
}

export default EnemyArea
