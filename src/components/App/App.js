import React, { PureComponent } from 'react'
import Player from '../Player'
import Enemy from '../Enemy'

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
          <div className="App-contentArea App-enemies">
            <Enemy id="enemy-1" />
            <Enemy id="enemy-2" />
            <Enemy id="enemy-3" />
          </div>
          <div className="App-contentArea App-players">
            <Player id="player-1" />
            <Player id="player-2" />
            <Player id="player-3" />
            <Player id="player-4" />
          </div>
        </div>
      </div>
    </AppContext.Provider>
  )
}

export { App as default, AppContext }
