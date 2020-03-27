import React, { PureComponent } from 'react'
import * as DeckTypes from '../../data/DeckTypes'
import shuffle from '../../util/shuffle'

class Deck extends PureComponent {
  deckData = DeckTypes[this.props.type]

  state = {
    skillsInDeck: shuffle([
      ...this.deckData.skills,
      ...this.deckData.skills,
      ...this.deckData.skills,
      ...this.deckData.skills,
      ...this.deckData.skills,
    ]),
    skillsDrawn: [],
    skillsDiscarded: [],
  }

  drawSkill = () => {
    let deckContents = [...this.state.skillsInDeck]
    if (!deckContents.length) return

    let skill = deckContents.shift()
    this.setState({ skillsInDeck: deckContents })
    this.props.onDraw(skill)
  }

  render() {
    if (this.deckData === undefined)
      return <div>Unknown Deck Type: {this.props.type}</div>

    return (
      <div className="Deck">
        <div>
          <div className="Deck-name">{this.deckData.name}</div>
        </div>
        <div className="Deck-skills">{this.deckData.skills.join(',')}</div>
        <div className="Deck-counters">
          <div className="Deck-deckSize">
            Deck: {this.state.skillsInDeck.length}
          </div>
          <div className="Deck-discardSize">
            Discard: {this.state.skillsDiscarded.length}
          </div>
          <button onClick={this.drawSkill}>Draw</button>
        </div>
      </div>
    )
  }
}

export default Deck
