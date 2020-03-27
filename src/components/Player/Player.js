import React, { PureComponent } from 'react'
import Deck from '../Deck'
import Skill from '../Skill'

class Player extends PureComponent {
  state = {
    skillsInHand: [],
  }

  onDraw = skill => {
    if (!skill) return

    let handContents = [...this.state.skillsInHand]
    handContents.push(skill)
    this.setState({ skillsInHand: handContents })
  }

  render = () => (
    <div className="Player">
      <div className="Player-deck Player-deck--one">
        <Deck type={this.props.deckOneType} onDraw={this.onDraw} />
      </div>

      <div className="Player-deck Player-deck--two">
        <Deck type={this.props.deckTwoType} onDraw={this.onDraw} />
      </div>

      <div className="Player-hand">
        {this.state.skillsInHand.map(type => (
          <Skill key={Math.random()} type={type} />
        ))}
      </div>
    </div>
  )
}

export default Player
