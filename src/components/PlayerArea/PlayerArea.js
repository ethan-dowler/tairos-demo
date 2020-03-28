import React from 'react'
import Player from '../Player'

const PlayerArea = ({ name, ...props }) => {
  return (
    <div className="PlayerArea">
      <div className="PlayerArea-name">{name}</div>
      <Player {...props} />
    </div>
  )
}

export default PlayerArea
