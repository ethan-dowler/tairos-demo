import React, { useContext } from 'react'
import classNames from 'classnames'
import AppContext from '../../contexts/AppContext'

const Card = ({ id, title, body }) => {
  const App = useContext(AppContext)

  return (
    <div
      className={classNames('Card', {
        'Card-selected': App.isSelected(id),
      })}
      onClick={App.select}
      data-select-id={id}
    >
      <div className="Card-title">{title}</div>
      <div className="Card-body">{body}</div>
    </div>
  )
}

export default Card
