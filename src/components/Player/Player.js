import React, { useContext } from 'react'
import classNames from 'classnames'
import { AppContext } from '../App'

const Player = ({ id }) => {
  const App = useContext(AppContext)

  return (
    <div className="Player" data-select-id={id} onClick={App.select}>
      {id}
    </div>
  )
}

export default Player
