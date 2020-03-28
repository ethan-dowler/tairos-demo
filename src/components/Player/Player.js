import React, { PureComponent } from 'react'
import Deck from '../Deck'
import Skill from '../Skill'

class Player extends PureComponent {
  state = {
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

  onPlay = skill => {
    this.removeFromHand(skill)
    this.addToDiscard(skill)
  }

  onFetch = skill => this.removeFromDiscard(skill)

  render = () => (
    <div className="Player">
      <div className="Player-deck Player-deck--one">
        <Deck
          type={this.props.deckOneType}
          skillsInDiscard={this.state.skillsInDiscard}
          onDraw={this.onDraw}
          onFetch={this.onFetch}
        />
      </div>

      <div className="Player-deck Player-deck--two">
        <Deck
          type={this.props.deckTwoType}
          skillsInDiscard={this.state.skillsInDiscard}
          onDraw={this.onDraw}
          onFetch={this.onFetch}
        />
      </div>

      <div className="Player-hand">
        {this.state.skillsInHand.sort().map(type => (
          <Skill type={type} onPlay={this.onPlay} key={Math.random()} />
        ))}
      </div>
    </div>
  )
}

export default Player
