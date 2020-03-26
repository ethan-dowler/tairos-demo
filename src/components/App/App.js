import React, { PureComponent } from 'react'
import EnemyArea from '../EnemyArea'
import PlayerArea from '../PlayerArea'

const AppContext = React.createContext({})

class App extends PureComponent {
  state = {
    selectedElementId: 'player-1',
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
            <EnemyArea name="enemy-1" type="Monster1" />
            <EnemyArea name="enemy-2" type="Monster1" />
            <EnemyArea name="enemy-3" type="Monster1" />
          </div>

          <div className="App-contentArea App-contentArea--players">
            <PlayerArea
              name="player-1"
              deckOneType={'Guardian'}
              deckTwoType={'Tactician'}
              skillsInHand={['Strike', 'Bolster']}
            />
            <PlayerArea
              name="player-2"
              deckOneType={'Ranger'}
              deckTwoType={'Elementalist'}
              skillsInHand={['Hasten', 'Burn']}
            />
            <PlayerArea
              name="player-3"
              deckOneType={'Arcanist'}
              deckTwoType={'Shadow'}
              skillsInHand={['Blast', 'Sneak']}
            />
            <PlayerArea
              name="player-4"
              deckOneType={'Brawler'}
              deckTwoType={'Squire'}
              skillsInHand={['Tackle', 'Resupply']}
            />
          </div>
        </div>
      </div>
    </AppContext.Provider>
  )
}

export { App as default, AppContext }
