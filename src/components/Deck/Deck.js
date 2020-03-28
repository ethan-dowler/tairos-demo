import React, { PureComponent, Fragment } from 'react'
import * as DeckTypes from '../../data/DeckTypes'
import shuffle from '../../util/shuffle'
import tally from '../../util/tally'

const DrawPile = ({ skills, numberOfCards, onDraw }) => (
  <Fragment>
    <div className="Deck-skills">{skills.join(',')}</div>
    <div className="Deck-counters">
      <div className="Deck-deckSize">Deck: {numberOfCards}</div>
      {numberOfCards && <button onClick={onDraw}>Draw</button>}
    </div>
  </Fragment>
)

const DiscardPile = ({ skills, skillsInDiscard, onFetch }) => (
  <Fragment>
    {skills.map(skill => (
      <div className="Deck-discardCount" key={Math.random()}>
        {skill}: {tally(skillsInDiscard, skill)}{' '}
        <button name={skill} onClick={onFetch}>
          Fetch
        </button>
      </div>
    ))}
  </Fragment>
)

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
    drawMode: true,
  }

  drawSkill = () => {
    let deckContents = [...this.state.skillsInDeck]
    if (!deckContents.length) return

    let skill = deckContents.shift()
    this.setState({ skillsInDeck: deckContents })
    this.props.onDraw(skill)
  }

  fetchSkill = skill => {
    console.log('fetching skill', skill)
    let deckContents = [...this.state.skillsInDeck]
    deckContents.unshift(skill)
    this.setState({ skillsInDeck: deckContents })
  }

  onFetch = e => {
    let skill = e.target.name
    this.fetchSkill(skill)
    this.props.onFetch(skill)
  }

  toggleDrawMode = () => this.setState({ drawMode: !this.state.drawMode })

  render() {
    if (this.deckData === undefined)
      return <div>Unknown Deck Type: {this.props.type}</div>

    return (
      <div className="Deck">
        <div>
          <div className="Deck-name">{this.deckData.name}</div>
          <button onClick={this.toggleDrawMode}>
            View {this.state.drawMode ? 'Discard' : 'Deck'}
          </button>
        </div>
        {this.state.drawMode ? (
          <DrawPile
            skills={this.deckData.skills}
            numberOfCards={this.state.skillsInDeck.length}
            onDraw={this.drawSkill}
          />
        ) : (
          <DiscardPile
            skills={this.deckData.skills}
            skillsInDiscard={this.props.skillsInDiscard}
            onFetch={this.onFetch}
          />
        )}
      </div>
    )
  }
}

export default Deck
