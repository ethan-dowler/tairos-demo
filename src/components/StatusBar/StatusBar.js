import React from 'react'
import Status from '../Status'

const StatusBar = ({ isEnemy = false }) => (
  <div className="StatusBar">
    {!isEnemy && <Status label="Fatigue" stackable={true} />}
    <Status label="Stun" />
    {isEnemy && <Status label="Chill" />}
    {isEnemy && <Status label="Scorch (max 3)" stackable={true} />}
  </div>
)

export default StatusBar
