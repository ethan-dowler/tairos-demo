import React from 'react'

const DAMAGE_AMOUNTS = [-2, -1, 1, 2, 3, 4, 5, 6]

const HealthModifier = ({ takeDamage }) => {
  let handleClick = e => {
    let amount = parseInt(e.target.dataset.amount)
    takeDamage(amount)
  }

  return (
    <div className="HealthModifier">
      <div className="HealthModifier-title">Modify Health</div>

      <div className="HealthModifier-buttons">
        {DAMAGE_AMOUNTS.map(amount => (
          <button
            className="HealthModifier-button"
            onClick={handleClick}
            data-amount={amount}
          >
            {amount < 0 && '+'}
            {amount * -1}
          </button>
        ))}
      </div>
    </div>
  )
}

export default HealthModifier
