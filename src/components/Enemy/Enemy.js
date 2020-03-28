import React, { PureComponent } from 'react'
import * as EnemyTypes from '../../data/EnemyTypes'

class Enemy extends PureComponent {
  enemyData = EnemyTypes[this.props.type]

  state = {
    damageTaken: 0,
  }

  takeDamage = number => {
    let newDamageTaken = this.state.damageTaken + number
    if (newDamageTaken > this.enemyData.maxHealth)
      newDamageTaken = this.enemyData.maxHealth

    this.setState({ damageTaken: newDamageTaken })
  }

  onDamage = e => {
    let amount = parseInt(e.target.dataset.amount)
    this.takeDamage(amount)
  }

  render = () => (
    <div className="Enemy">
      <div className="Enemy-name">{this.enemyData.name}</div>
      <div className="Enemy-stats">
        <div className="Enemy-health">
          Health: {this.enemyData.maxHealth - this.state.damageTaken}
        </div>
        <div className="Enemy-attack">Attack: {this.enemyData.attack}</div>
      </div>
      <div className="">Modify Health</div>
      <div className="Enemy-actions">
        <button onClick={this.onDamage} data-amount={-5}>
          +5
        </button>
        <button onClick={this.onDamage} data-amount={-3}>
          +3
        </button>
        <button onClick={this.onDamage} data-amount={-1}>
          +1
        </button>
        <button onClick={this.onDamage} data-amount={1}>
          -1
        </button>
        <button onClick={this.onDamage} data-amount={3}>
          -3
        </button>
        <button onClick={this.onDamage} data-amount={5}>
          -5
        </button>
      </div>
    </div>
  )
}

export default Enemy
