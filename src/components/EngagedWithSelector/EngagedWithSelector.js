import React from 'react'

const ENGAGED_WITH_OPTIONS = ['None', 'Red', 'Blue', 'Green', 'Yellow']

const EngagedWithSelector = () => (
  <label>
    <span className="EngagedWithSelector-label">Engaged With:</span>
    <select className="EngagedWithSelector">
      {ENGAGED_WITH_OPTIONS.map(option => (
        <option key={Math.random()}>{option}</option>
      ))}
    </select>
  </label>
)

export default EngagedWithSelector
