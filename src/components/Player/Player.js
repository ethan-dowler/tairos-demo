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

  onPlay = e => {
    if (!e.target.name) return console.log('Put a name on the Play button!')

    let skill = e.target.name
    let handContents = [...this.state.skillsInHand]
    let indexOfSkill = handContents.indexOf(skill)
    handContents.splice(indexOfSkill, 1)
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
        {this.state.skillsInHand.sort().map(type => (
          <Skill key={Math.random()} type={type} onPlay={this.onPlay} />
        ))}
      </div>
    </div>
  )
}

export default Player
