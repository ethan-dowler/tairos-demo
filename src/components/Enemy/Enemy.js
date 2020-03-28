import React, { PureComponent } from 'react'
import * as EnemyTypes from '../../data/EnemyTypes'
import HealthModifier from '../HealthModifier'

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

  render = () => (
    <div className="Enemy">
      <div className="Enemy-name">{this.enemyData.name}</div>
      <div className="Enemy-stats">
        <div className="Enemy-health">
          Health: {this.enemyData.maxHealth - this.state.damageTaken}
        </div>
        <div className="Enemy-attack">Attack: {this.enemyData.attack}</div>
      </div>
      <HealthModifier takeDamage={this.takeDamage} />
    </div>
  )
}

export default Enemy
