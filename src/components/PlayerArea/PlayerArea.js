import React from 'react'
import Player from '../Player'
import StatusBar from '../StatusBar'

const PlayerArea = ({ name, ...props }) => {
  return (
    <div className="PlayerArea">
      <div className="PlayerArea-name">{name}</div>
      <StatusBar />
      <Player {...props} />
    </div>
  )
}

export default PlayerArea
