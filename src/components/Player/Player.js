import React, { PureComponent } from 'react'
import Deck from '../Deck'
import Skill from '../Skill'
import StatusBar from '../StatusBar'
import HealthModifier from '../HealthModifier'

class Player extends PureComponent {
  maxHealth = 16

  state = {
    damageTaken: 0,
    skillsInHand: [],
    skillsInDiscard: [],
  }

  addToHand = skill => {
    let handContents = [...this.state.skillsInHand]
    handContents.push(skill)
    this.setState({ skillsInHand: handContents })
  }

  removeFromHand = skill => {
    let handContents = [...this.state.skillsInHand]
    let indexOfSkill = handContents.indexOf(skill)
    handContents.splice(indexOfSkill, 1)
    this.setState({ skillsInHand: handContents })
  }

  addToDiscard = skill => {
    let discardContents = [...this.state.skillsInDiscard]
    discardContents.push(skill)
    this.setState({ skillsInDiscard: discardContents })
  }

  removeFromDiscard = skill => {
    let discardContents = [...this.state.skillsInDiscard]
    let indexOfSkill = discardContents.indexOf(skill)
    discardContents.splice(indexOfSkill, 1)
    this.setState({ skillsInDiscard: discardContents })
  }

  onDraw = skill => this.addToHand(skill)

  onMill = skill => this.addToDiscard(skill)

  onFetch = skill => this.removeFromDiscard(skill)

  onPlay = skill => {
    this.removeFromHand(skill)
    this.addToDiscard(skill)
  }

  takeDamage = number => {
    let newDamageTaken = this.state.damageTaken + number
    if (newDamageTaken > this.maxHealth) newDamageTaken = this.maxHealth

    this.setState({ damageTaken: newDamageTaken })
  }

  render = () => (
    <div className="Player">
      <div className="Player-health">
        Health: {this.maxHealth - this.state.damageTaken}
      </div>
      <StatusBar />
      <HealthModifier takeDamage={this.takeDamage} />

      <div className="Player-cards">
        <div className="Player-deck Player-deck--one">
          <Deck
            type={this.props.deckOneType}
            skillsInDiscard={this.state.skillsInDiscard}
            onDraw={this.onDraw}
            onMill={this.onMill}
            onFetch={this.onFetch}
          />
        </div>

        <div className="Player-deck Player-deck--two">
          <Deck
            type={this.props.deckTwoType}
            skillsInDiscard={this.state.skillsInDiscard}
            onDraw={this.onDraw}
            onMill={this.onMill}
            onFetch={this.onFetch}
          />
        </div>

        <div className="Player-hand">
          {this.state.skillsInHand.sort().map(type => (
            <Skill type={type} onPlay={this.onPlay} key={Math.random()} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Player
