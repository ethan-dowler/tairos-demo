import React, { PureComponent } from 'react'
import EnemyArea from '../EnemyArea'
import PlayerArea from '../PlayerArea'

const AppContext = React.createContext({})

class App extends PureComponent {
  state = {
    selectedElementId: '',
    player1: {
      deckOneType: 'Guardian',
      deckTwoType: 'Tactician',
      skillsInHand: [],
    },
    player2: {
      deckOneType: 'Ranger',
      deckTwoType: 'Elementalist',
      skillsInHand: [],
    },
    player3: {
      deckOneType: 'Arcanist',
      deckTwoType: 'Shadow',
      skillsInHand: [],
    },
    player4: {
      deckOneType: 'Brawler',
      deckTwoType: 'Squire',
      skillsInHand: [],
    },
    enemy1: {
      type: 'Monster1',
      damageTaken: 0,
    },
    enemy2: {
      type: 'Monster1',
      damageTaken: 0,
    },
    enemy3: {
      type: 'Monster1',
      damageTaken: 0,
    },
  }

  select = e =>
    this.setState({
      selectedElementId: e.target.closest('[data-select-id]').dataset.selectId,
    })

  isSelected = id => this.state.selectedElementId === id

  render = () => (
    <AppContext.Provider value={this}>
      <div className="App">
        <h1 className="App-heading">Welcome to Tairos</h1>

        <p>Coming Soon...</p>

        <div className="App-content">
          <div className="App-contentArea App-contentArea--enemies">
            <EnemyArea name="enemy-1" {...this.state.enemy1} />
            <EnemyArea name="enemy-2" {...this.state.enemy2} />
            <EnemyArea name="enemy-3" {...this.state.enemy3} />
          </div>

          <div className="App-contentArea App-contentArea--players">
            <PlayerArea name="player-1" {...this.state.player1} />
            <PlayerArea name="player-2" {...this.state.player2} />
            <PlayerArea name="player-3" {...this.state.player3} />
            <PlayerArea name="player-4" {...this.state.player4} />
          </div>
        </div>
      </div>
    </AppContext.Provider>
  )
}

export { App as default, AppContext }
