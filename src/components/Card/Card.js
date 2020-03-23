import React, { useContext } from 'react'
import classNames from 'classnames'
import AppContext from '../../contexts/AppContext'

const Card = ({ id, title, body }) => {
  const app = useContext(AppContext)

  return (
    <div
      className={classNames('Card', {
        'Card-selected': app.isSelected(id),
      })}
      onClick={app.select}
      data-select-id={id}
    >
      <div className="Card-title">{title}</div>
      <div className="Card-body">{body}</div>
    </div>
  )
}

export default Card
