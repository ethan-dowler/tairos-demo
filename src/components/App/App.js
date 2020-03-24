import React, { PureComponent } from 'react'
import Card from '../Card'

const AppContext = React.createContext({})

class App extends PureComponent {
  state = {
    selectedElementId: 'block',
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
        <Card id={'strike'} title="Strike" body="Deal 3 damage." />
        <Card id={'block'} title="Block" body="Prevent 2 damage." />
        <Card id={'grapple'} title="Grapple" body="Stun an enemy." />
      </div>
    </AppContext.Provider>
  )
}

export { App as default, AppContext }
