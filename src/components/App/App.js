import React, { PureComponent } from 'react'
import EnemyArea from '../EnemyArea'
import PlayerArea from '../PlayerArea'

const AppContext = React.createContext({})

class App extends PureComponent {
  state = {
    wideMode: false,
  }

  toggleWideMode = () => {
    this.setState({ wideMode: !this.state.wideMode })
  }

  render = () => (
    <AppContext.Provider value={this}>
      <div className={`App ${this.state.wideMode ? 'wide-mode' : ''}`}>
        <h1 className="App-heading">Welcome to Tairos</h1>

        <button onClick={this.toggleWideMode}>Toggle Wide Mode</button>

        <div className="App-content">
          <div className="App-contentArea App-contentArea--enemies">
            <EnemyArea name="Enemy" type="Monster1" />
            <EnemyArea name="Enemy" type="Monster1" />
            <EnemyArea name="Enemy" type="Monster1" />
          </div>

          <div className="App-contentArea App-contentArea--players">
            <PlayerArea
              name="Red"
              deckOneType="Guardian"
              deckTwoType="Tactician"
            />
            <PlayerArea
              name="Blue"
              deckOneType="Ranger"
              deckTwoType="Elementalist"
            />
            <PlayerArea
              name="Green"
              deckOneType="Arcanist"
              deckTwoType="Shadow"
            />
            <PlayerArea
              name="Yellow"
              deckOneType="Brawler"
              deckTwoType="Squire"
            />
          </div>
        </div>
      </div>
    </AppContext.Provider>
  )
}

export { App as default, AppContext }
