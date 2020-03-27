import React, { PureComponent } from 'react'
import EnemyArea from '../EnemyArea'
import PlayerArea from '../PlayerArea'

const AppContext = React.createContext({})

class App extends PureComponent {
  state = {
    playerOne: {
      deckOneType: 'Guardian',
      deckTwoType: 'Tactician',
      skillsInHand: [],
    },
    playerTwo: {
      deckOneType: 'Ranger',
      deckTwoType: 'Elementalist',
      skillsInHand: [],
    },
    playerThree: {
      deckOneType: 'Arcanist',
      deckTwoType: 'Shadow',
      skillsInHand: [],
    },
    playerFour: {
      deckOneType: 'Brawler',
      deckTwoType: 'Squire',
      skillsInHand: [],
    },
    enemyOne: {
      type: 'Monster1',
      damageTaken: 0,
    },
    enemyTwo: {
      type: 'Monster1',
      damageTaken: 0,
    },
    enemyThree: {
      type: 'Monster1',
      damageTaken: 0,
    },
  }

  render = () => (
    <AppContext.Provider value={this}>
      <div className="App">
        <h1 className="App-heading">Welcome to Tairos</h1>

        <p>Coming Soon...</p>

        <div className="App-content">
          <div className="App-contentArea App-contentArea--enemies">
            <EnemyArea name="enemy-one" {...this.state.enemyOne} />
            <EnemyArea name="enemy-two" {...this.state.enemyTwo} />
            <EnemyArea name="enemy-three" {...this.state.enemyThree} />
          </div>

          <div className="App-contentArea App-contentArea--players">
            <PlayerArea name="player-one" {...this.state.playerOne} />
            <PlayerArea name="player-two" {...this.state.playerTwo} />
            <PlayerArea name="player-three" {...this.state.playerThree} />
            <PlayerArea name="player-four" {...this.state.playerFour} />
          </div>
        </div>
      </div>
    </AppContext.Provider>
  )
}

export { App as default, AppContext }
