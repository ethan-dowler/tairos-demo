import React, { useContext } from 'react'
import { AppContext } from '../App'

const Enemny = ({ id }) => {
  const App = useContext(AppContext)

  return (
    <div className="Enemy" data-select-id={id} onClick={App.select}>
      {id}
    </div>
  )
}

export default Enemny
